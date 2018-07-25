let n 
init()

setInterval(() => {
    getImg(n).removeClass('center').addClass('left')
    .one('transitionend', (e) => {
        $(e.currentTarget).removeClass('left').addClass('right')
    })
    getImg(n+1).removeClass('right').addClass('center')
    n += 1
},3000)

function centerImg(n) {
    if (n > 3) {
        n = n % 3
        if (n === 0) {
            n = 3
        }
    }
    return n 
}

function init() {
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('center')
    .siblings().addClass('right')
}

function getImg(n) {
    return $(`.images > img:nth-child(${centerImg(n)})`)
}