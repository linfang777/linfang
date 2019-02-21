// 组数量设置，对应 img 和 txt 文件夹下的内容，
// 如 structure = [1, 4, 2] 意思是，第 0 组照片有 1 张，第 1 组 4 张，第 2 组 2 张，对应 img 下的（第几组.第几张jpg）
// 代码里的数数一般从零开始

const structure = [10, 2, 2];

// 用来获取首页点击所传递参数的方法
function getParams(key) {
    let reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    console.log(window.location.search.substr(1));
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}