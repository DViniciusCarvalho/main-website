const ballsArea = $('.balls-area')
const addQtd = $('#add-quantity-display')
const removeQtd = $('#remove-quantity-display')
const displayQtd = $('.quantity-display')

let ballsAreaHeight = ballsArea.height()
let ballsAreaWidth = ballsArea.width()

var ballsArray = []

class Ball {
    constructor(number){
        this.diameter = 10 + Math.random() * 30
        this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
        this.xAxis = Math.random() * (ballsAreaWidth - this.diameter)
        this.yAxis = Math.random() * (ballsAreaHeight - this.diameter)
        this.speed = (Math.random() * 3.5) + 0.8
        // { x ∃ R, k ∃ N | x = k * π/4 }
        this.cosDirX = Math.random() * 4 > 2 ? 1 : -1
        this.sinDirY = Math.random() * 4 > 2 ? 1 : -1
        this.id = String(Math.floor(Date.now() + (Math.random() * (10**6)))) + `_${number}`
        this.createBall()
        this.DOMreference = document.getElementById(this.id)
        setInterval(this.moveBall, 10)
    }
    createBall = () => {      
        let ball = document.createElement('div')
        ball.style.backgroundColor = this.color
        ball.style.height = `${this.diameter}px`
        ball.style.width = `${this.diameter}px`
        ball.style.borderRadius = '50%'
        ball.style.position = 'absolute'
        ball.style.top = `${this.yAxis}px`
        ball.style.left = `${this.xAxis}px`
        ball.setAttribute('id', this.id)
        console.log(ball)
        ballsArea.append(ball)
    }
    removeBall = () => {
        let element = this.DOMreference
        let currentId = this.id
        element.remove()
        ballsArray = ballsArray.filter((element) => {
            if(element.id !== currentId){
                return element
            }
        }) 
        displayQtd.text(ballsArray.length)   
        clearInterval(this.moveBall)           
    }
    verifyPosition = () => {  
        if(this.xAxis + this.diameter >= ballsAreaWidth || this.xAxis <= 0){               
            this.cosDirX = Number(-(this.cosDirX))
        }
        if(this.yAxis + this.diameter >= ballsAreaHeight || this.yAxis <= 0){
            this.sinDirY = Number(-(this.sinDirY))
        }
    }
    moveBall = () => {
        this.verifyPosition()
        if(this.xAxis + this.diameter > ballsAreaWidth + 20){
            this.removeBall()
        }
        this.xAxis += this.cosDirX * this.speed
        this.yAxis += this.sinDirY * this.speed 
        this.DOMreference.style.top = `${this.yAxis}px`
        this.DOMreference.style.left = `${this.xAxis}px`        
    }
}

$(window).resize(() => {
    ballsAreaHeight = ballsArea.height()
    ballsAreaWidth = ballsArea.width()
    displayQtd.text(ballsArray.length)
})

$('#add-button').click(async () => {
    for(let i = 0; i < Number(addQtd.val()); i++){
        ballsArray.push(new Ball(i))
    }
    displayQtd.text(ballsArray.length)
})

$('#remove-button').click(() => {
    if(Number(removeQtd.val()) > ballsArray.length){
        window.alert('Invalid quantity.')
    }
    else if(Number(removeQtd.val()) !== 0){
        for(let i = 0; i < Number(removeQtd.val()); i++){
            let removed = ballsArray.pop()
            removed.DOMreference.remove()             
        }
        displayQtd.text(ballsArray.length)
    }   
})