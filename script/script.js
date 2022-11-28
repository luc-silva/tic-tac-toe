let Player = function(name, marker){
    const playerName = name
    const icon = marker
    let binarySequence

    function setBinary(){
        this.binarySequence = ""
        
        gameBoard.fieldValues.forEach(value => {
            if(value == this.icon){
                this.binarySequence += "1"
            } else {
                this.binarySequence += "0"
            }
        })
    }

    return {playerName, icon, setBinary, binarySequence}
}

let game = (function(){
    let currentPlayer = null
    let nextPlayer = null
    let victory = [448, 56, 7, 292, 146, 73, 273, 84]

    const checkWonConditions = function(){
        victory.forEach(number => {
            let res = parseInt(game.currentPlayer.binarySequence, 2) & number
            let winner = null

            if(res == number){
                console.log("boa " + game.currentPlayer.playerName)
            }   
        })
    }

    const changeCurrentPlayerDisplay = function(){
        let currentPlayerDisplay = document.querySelector("#current-player-display")
        currentPlayerDisplay.textContent = `${this.currentPlayer.playerName}`
        console.log(currentPlayer.playerName, this.currentPlayer.playerName)
    }
    const changeCurrentPlayer = function (){
        [this.currentPlayer, this.nextPlayer] = [this.nextPlayer, this.currentPlayer] 
        // changeCurrentPlayerDisplay()
    }

    const startGame = function (){
        let rounds = document.querySelector("round-input")
        this.currentPlayer = Player("player one", "x")
        this.nextPlayer =  Player("player two", "o")

        gameBoard.clearField()

    }

    return {currentPlayer, nextPlayer, startGame, changeCurrentPlayer, checkWonConditions}
})()

let gameBoard = (function(){
    let field = document.querySelector("#field")
    field.addEventListener("click", function (e){
        if(e.target.textContent == ""){
            e.target.textContent = game.currentPlayer.icon
            gameBoard.getFieldValues()
            game.currentPlayer.setBinary()
            game.checkWonConditions()
            game.changeCurrentPlayer()
        }
    })


    let message = document.querySelector("#message")
    let fieldValues = ["", "", "", 
    "", "", "", 
    "", "", "", ]



    const getFieldValues = function(){
        let blocks = document.querySelectorAll(".block")
        this.fieldValues = []
        blocks.forEach(block => {
            this.fieldValues.push(block.textContent)
        });
    }

    
    let clearField = function (){
        field.textContent = " "
        field.style.display = "grid"
        
        createBlock()
    }
    
    const createBlock = (function() {
        for(let value = 0; value < fieldValues.length; value++){
            let block = document.createElement("div")
            block.classList.add("block")
            block.textContent = fieldValues[value]
            block.setAttribute("value", value)
            field.append(block) 
        }
    })
 
    return {clearField, fieldValues, getFieldValues, }
                
    })()

const _gamePanel = (function (){
    let startBtn = document.querySelector("#start-btn")
    startBtn.addEventListener("click", () => {
        game.startGame()
    })
})()