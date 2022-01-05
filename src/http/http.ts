import service from './service'

export default {
    POST(url: string, obj: object = {}) {
        return service({
            url: url,      // url = base url + request url
            method: 'post',
            data: obj,    //----------------->>>区别
        })
    }, GET(url: string, obj: object = {}) {
        return service({
            url: url,      // url = base url + request url
            method: 'get',
            params: obj,    //----------------->>>区别
        })
    }
}
