const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
const divRanges = document.createElement('div')
const speedRange = document.createElement('input')
const nRange = document.createElement('input')
const radiusRange = document.createElement('input')
speedRange.setAttribute("type", "range")
nRange.setAttribute("type", "range")
radiusRange.setAttribute("type", "range")
document.body.appendChild(canvas)
document.body.appendChild(divRanges)
divRanges.appendChild(nRange)
divRanges.appendChild(speedRange)
divRanges.appendChild(radiusRange)


speedRange.addEventListener('input', () => speed = speedRange.value / 2)
radiusRange.addEventListener('input', () => radius = radiusRange.value / 8)
nRange.addEventListener('input', () => {
    if (nRange.value > stars.length) {
        for (let index = 0; index < nRange.value - stars.length; index++) {
            stars.push(new Star)
        }
    } else {
        if (nRange.value < stars.length) {
            for (let index = 0; index < stars.length - nRange.value; index++) {
                stars.pop()
            }
        }
    }
})

const stars = []
const width = 1920
const height = 1080
canvas.width = width
canvas.height = height
let nStars = nRange.value
let speed = speedRange.value / 2
let radius = radiusRange.value / 8

for (let i = 0; i < nStars; i++) {
    stars.push(new Star)
}

ctx.translate(width / 2, height / 2)

function update() {
    ctx.clearRect(-width, -height, 2 * width, 2 * height)
    for (const star of stars) {
        star.update(ctx)
        star.draw(ctx)
    }
}

setInterval(() => {
    update()
}, getMs(60));