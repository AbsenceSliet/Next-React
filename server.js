// server.js
const next = require('next')
const express = require('express')


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = dev ? 1002 : 80
const LRUCache = require('lru-cache')

const ssrCache = new LRUCache({
    max: 1000,
    maxAge: 1000 * 60 * 60
})

const devProxy = {
    '/api': {
        target: 'http://127.0.0.1:7001',
        pathRewrite: {
            // '^/api': '/'
        },
        changeOrigin: true
    }
}
const getCacheKey = req => `${req.url}`

const renderAndCache = async(req, res, pagePath, queryParams) => {
    const key = getCacheKey(req)
    if (ssrCache.has(key)) {
        res.setHeader('x-cache', 'HIT')
        res.send(ssrCache.get(key))
        return
    }

    try {
        const html = await app.renderToHTML(req, res, pagePath, queryParams)
        if (res.statusCode !== 200) {
            res.send(html)
            return
        }
        ssrCache.set(key, html)
        res.setHeader('x-cache', 'MISS')
        res.send(html)
    } catch (err) {
        app.renderError(err, req, res, pagePath, queryParams)
    }
}


app.prepare().then(() => {
    const server = express()

    // Set up the proxy.
    if (dev && devProxy) {
        const proxyMiddleware = require('http-proxy-middleware')
        Object.keys(devProxy).forEach(function(context) {
            server.use(proxyMiddleware(context, devProxy[context]))
        })
    }
    server.get('/detail/:id', async(req, res) => {
        const actualpage = `/list/detail`
        const queryParams = { id: req.params.id }

        renderAndCache(req, res, actualpage, {...req.params })
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })
    server.listen(port, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost ' + port)
    })
})