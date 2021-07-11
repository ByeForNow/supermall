import request from "./request";

export default {
    getHomeMultidata(){
        return request.get("http://192.168.2.100:8000/home/multidata");
    },
    getRecommends(){
        return request.get("http://123.207.32.32:8000/home/multidata");
    },
    getHomeGoods(type,page){
        return request.get("http://192.168.2.100:8000/home/getGoodsList",{
            type,
            page
        });
    }
} 