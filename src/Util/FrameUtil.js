const regex = new RegExp("^https:\\/\\/www\\.youtube\\.com\\/watch\\?v=(\\w+)$")

function mostSquare(num) {
    let upper = Math.ceil(Math.sqrt(num))

    return {
        y: upper,
        x: Math.ceil(num / upper)    
    }
}
const util = {
    /**
     * Gets the best 16:9 ratio
     * @param {*} count 
     */
    getOptimalPlayerSize(count) {
        const browserHeight = window.innerHeight
        const browserWidth = window.innerWidth
        
        const dimens = mostSquare(count)
        return {
            width: browserWidth / dimens.x,
            height: browserHeight / dimens.y 
        }
    }
}
module.exports = util