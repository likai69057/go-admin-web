//获取树形菜单列表
import request from "../../request";

export function getMenuListApi(params?: object){
    return request({
        rul: "http://127.0.0.1:5173/munu.json",
        method: 'get',
        params
    })
}