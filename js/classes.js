class Star {
    constructor() {
        this.position = new Vector(random(-width / 2, width / 2), random(-height / 2, height / 2))
        this.z = random(0, width)
        this.lz = this.z
    }
    draw() {
        ctx.fillStyle = '#fff'
        ctx.beginPath()
        ctx.arc(mapValue(this.position.x / this.z, 0, 1, 0, width), mapValue(this.position.y / this.z, 0, 1, 0, height), mapValue(this.z, 0, width, parseInt(radius, 10), 0), 0, 2 * Math.PI, false)
        ctx.fill()
        ctx.strokeStyle = '#fff'
        ctx.lineWidth = mapValue(this.z, 0, width, parseInt(radius / 3, 10), 0);
        ctx.beginPath();
        ctx.moveTo(mapValue(this.position.x / this.z, 0, 1, 0, width), mapValue(this.position.y / this.z, 0, 1, 0, height));
        ctx.lineTo(mapValue(this.position.x / this.lz, 0, 1, 0, width), mapValue(this.position.y / this.lz, 0, 1, 0, height));
        ctx.stroke();
    }
    update() {
        this.lz = this.z
        this.z -= speed
        if (this.z < 0) {
            this.position.x = random(-width / 2, width / 2);
            this.position.y = random(-height / 2, height / 2)
            this.z = random(0, width)
            this.lz = this.z
        }
    }
}

class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    add(vector) {
        this.x += vector.x
        this.y += vector.y
    }
    add(vector) {
        this.x -= vector.x
        this.y -= vector.y
    }
}