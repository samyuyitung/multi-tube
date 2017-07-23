var request = require('request');

const videoRegex = new RegExp("^https:\\/\\/www\\.youtube\\.com\\/watch\\?v=([\\w|-]+)$")
const playlistRegex = new RegExp("^https:\\/\\/www\\.youtube\\.com\\/playlist\\?list=([\\w|-]+)$")

const API_KEY = 'AIzaSyCNdAjur1fqSfMjKA4Yjpv4Ub1NJxQhcVQ'

const getPlaylists = (playlistId) => new Promise((resolve, reject) => {
    if (playlistId) {
    request(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${API_KEY}`, (error, response, bodyStr) => {
        if (error) {
            resolve([]);
        } else if (bodyStr) {
           const vids = []
           const body = JSON.parse(bodyStr);
            if (body.items && body.items.length > 0) {
                body.items.forEach(function(item) {
                    if (item.snippet && item.snippet.resourceId.kind === 'youtube#video') {
                        vids.push(item.snippet.resourceId.videoId)
                    } 
                });
                resolve(vids)
            }
        }
    }) 
    } else {
        reject()
    }
})

const util = {
    validateURL(url) {
        return videoRegex.test(url) || playlistRegex.test(url)
    },
    getVideoIds: url => new Promise((resolve, reject) => {
        getPlaylists()
        if (videoRegex.test(url)) {
            const caps = videoRegex.exec(url)
            if (caps && caps.length >= 2)
                resolve([caps[1]])
            reject() 
        } else if (playlistRegex.test(url)) { 
            const caps = playlistRegex.exec(url)
            if (caps && caps.length >= 2) {
                return getPlaylists(caps[1]).then(
                    (vids) => {
                        resolve(vids)
                    }
                    ) 
            }
            reject()
        } else {         
            reject()
        }          
    })
}


module.exports = util