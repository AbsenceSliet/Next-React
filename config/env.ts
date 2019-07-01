let base_url : string
// base_url = process.env.NODE_ENV == 'development' ? 'http://127.0.0.1:1002' : '' ;
base_url = process.env.NODE_ENV == 'development' ? '' : '';
export {
    base_url
}