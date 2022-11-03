const playerTwo = (function(){
    //const getMarker = () =>{}
    let marker = "o"
    return {marker}
})()
const playerOne = (function(){
    //const getMarker = () =>{}
    let marker = "x"
    return {marker}
})()

let game = (function(){
    let currentPlayer = playerOne
    let nextPlayer = playerTwo

    const changeCurrentPlayer = function (){
        [this.currentPlayer, this.nextPlayer] = [this.nextPlayer, this.currentPlayer] 
    }

    const startGame = () => {
        let rounds = document.querySelector("round-input")
        _gameBoard.clearField()
    }

    return {currentPlayer, nextPlayer, startGame, changeCurrentPlayer }
})()

let _gameBoard = (function(){
    let field = document.querySelector("#field")
    field.addEventListener("click", (e) =>{
        if(e.target.textContent == ""){
            e.target.textContent = game.currentPlayer.marker
            game.changeCurrentPlayer()
        }
    })

    let message = document.querySelector("#message")
    let fieldValues = ["", "", "", 
    "", "", "", 
    "", "", "", ]
    
    let clearField = function (){
        field.textContent = " "
        field.style.display = "grid"
        
        createBlock()
    }
    
    const createBlock = (function() {
        for(let block of fieldValues){
            let lol = document.createElement("div")
            lol.classList.add("block")
            lol.textContent = block
            field.append(lol) 
        }
    })
    
    let blocks = document.querySelectorAll(".block")
 
    return {clearField}
                
    })()

const _gamePanel = (function (){
    let startBtn = document.querySelector("#start-btn")
    startBtn.addEventListener("click", () => {
        game.startGame()
    })
})()