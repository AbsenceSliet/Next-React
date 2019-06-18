let base_url : string
base_url = process.env.NODE_ENV =='development' ? '' : '' ;

export {
    base_url
}