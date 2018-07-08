
//跳转
function jump(page, pageMax, pageUrl) {
    var p = parseInt(page);
    var url = null;
    if (!isNaN(p) && pageMax >= 1) {
        if (p == 1) {
            url = pageUrl.replace(/:num\//, "");
        } else if (p <= pageMax) {
            url = pageUrl.replace(/:num/, p);
        }
    }
    if (url != null) {
        location.href = url;
    }
}
