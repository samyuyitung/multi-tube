const regex = new RegExp("^https:\\/\\/www\\.youtube\\.com\\/watch\\?v=(\\w+)$")

function mostSquare(num) {
    let smaller = Math.floor(Math.sqrt(num))

    return {
        y: smaller,
        x: smaller + (num % smaller)   
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
        console.log(dimens)
        return {
            width: browserWidth / dimens.x,
            height: browserHeight / dimens.y 
        }
    }
}
module.exports = util