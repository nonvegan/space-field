const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
const divRanges = document.createElement('div')
const nRange = document.createElement('input')
const speedRange = document.createElement('input')
const radiusRange = document.createElement('input')
const nRangeLabel = document.createElement('label')
const speedRangeLabel = document.createElement('label')
const radiusRangeLabel = document.createElement('label')

nRange.setAttribute("type", "range")
nRange.setAttribute("id", "nRange")
speedRange.setAttribute("type", "range")
speedRange.setAttribute("id", "speedRange")
radiusRange.setAttribute("type", "range")
radiusRange.setAttribute("id", "radiusRange")

nRangeLabel.htmlFor = "nRange"
nRangeLabel.innerText = "Stars"
speedRangeLabel.htmlFor = "speedRange"
speedRangeLabel.innerText = "Velocity"
radiusRangeLabel.htmlFor = "radiusRange"
radiusRangeLabel.innerText = "Stars radius"

document.body.appendChild(canvas)
document.body.appendChild(divRanges)
divRanges.appendChild(nRangeLabel)
divRanges.appendChild(nRange)
divRanges.appendChild(speedRangeLabel)
divRanges.appendChild(speedRange)
divRanges.appendChild(radiusRangeLabel)
divRanges.appendChild(radiusRange)

nRange.addEventListener('input', () => {
    if (5 * nRange.value > stars.length) {
        for (let index = 0; index < nRange.value * 5 - stars.length; index++) {
            stars.push(new Star)
        }
    } else {
        if (5 * nRange.value < stars.length) {
            for (let index = 0; index < stars.length * 5 - nRange.value; index++) {
                stars.pop()
            }
        }
    }
})
speedRange.addEventListener('input', () => speed = speedRange.value)
radiusRange.addEventListener('input', () => radius = radiusRange.value / 10)

const stars = []
const width = 1920
const height = 1080
canvas.width = width
canvas.height = height
let nStars = nRange.value * 5
let speed = speedRange.value
let radius = radiusRange.value / 10
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