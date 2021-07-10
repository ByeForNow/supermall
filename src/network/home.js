import { request } from "./request";

export default {
    getHomeMultidata(){
        return request({
            url:"/home/multidata"
        });
    },
    getRecommends(){
        return request({
            baseURL:'http://123.207.32.32:8000',
            url:"/home/multidata"
        });
    }
} 