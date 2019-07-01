import service from "~config/fetch"
export const getlist : any = ()=> service({
    method:'get',
    url:'https://api.tvmaze.com/search/shows?q=batman'
})
export const getdetail: any = (id: number) => service({
    url: `https://api.tvmaze.com/shows/${id}`,
    method: 'get',
})
export const testget: any = () => service({
    url: `/api/v2/movie/in_theaters`,
    method: 'get',
})
export const getImage: string = (data : any) => service({
    url:`/api/getImage`,
    method:'get',
    params:data
})