const regex = new RegExp("^https:\\/\\/www\\.youtube\\.com\\/watch\\?v=(\\w+)$")
const util = {
    validateURL(url) {
        return regex.test(url)
    },
    getVideoId(url) {
        const caps = regex.exec(url)
        if (caps && caps.length >= 2)
            return caps[1   ]
        return ""
    } 
}
module.exports = util
// export default util