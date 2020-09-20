
axios.defaults.baseURL = 'https://developer.duyiedu.com/vue/bz/'

// 拦截器
axios.interceptors.response.use(response=>{
    // console.log(response)
    const {status} =response
    const {baseURL, url} = response.config
    if(status === 200){
        // video特殊处理
        if(url === baseURL + 'video'){
            return {
                count: response.data.count,
                data: response.data.data
            }
        }
        return response.data.data
    }
    return response
})