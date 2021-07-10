import { request } from "./request";

export default {
    getHomeMultidata(){
        return request({
            url:"/home/multidata"
        });
    }
} 