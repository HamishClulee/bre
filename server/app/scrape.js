let Xray = require('x-ray')
let Download = require('image-downloader')
let Front = Xray({
    filters: {
        trim: function(value) {
            return typeof value === 'string' ? value.trim() : value
        },
        strip: function(value) {
            return typeof value === 'string' ? value.replace(/\s/g, "") : value
        }
    }
})
let Content = Xray({
    // custom filters
})
let frontpage = {
    fullday: [],
    halfday: [],
    activities: [],
    trekking: []
}
let deetUrls = []

let getImageName = function(path) {
    let tmp = 'https://baliclassictour.com/wp-content/uploads/2017/06/Bali-Tanah-Lot-Temple-17.jpg'
    let sp = tmp.split('/')
    return sp[sp.length - 1]
}

const scraper = function() {
    console.log('scraper called')
    Front('https://baliclassictour.com/', '.post-style.box', [{
        title: '.post-title | trim',
        description: '.price-box | trim | strip',
        link: 'a@href',
        content: {}
    }])(function(err, con) {
        con.forEach(function(v, i){
            if (i < 9) {
                frontpage.fullday.push(v)
            } else if (i >= 9 && i < 12) {
                frontpage.halfday.push(v)
            } else if (i >= 12 && i < 21) {
                frontpage.trekking.push(v)
            } else {
                frontpage.activities.push(v)
            }
        })
        for (let name in frontpage) {
            frontpage[name].forEach(function(v, i) {
                Content(v.link, '.wrapper-content', {
                    imgs: ['img@src'],
                    description: ['p']
                })(function(err, cont) {
                    frontpage[name][i].content = cont
                    // console.log(frontpage[name][i])
                })
            })
        }
    })
    setTimeout(function() {
        console.log(JSON.stringify(frontpage))
    }, 100000)
}

module.exports = scraper

// if (cont[0] && cont[0].imgs) {
//     cont[0].imgs.forEach(function(v, i) {
//         console.log(v)
//         Download.image({
//             url: v,
//             dest: './downloads'
//         })
//         .then(({ filename, image }) => {
//             console.log('File saved to', filename)
//         })
//         .catch((err) => {
//             console.error(err)
//         })
//     })
// }