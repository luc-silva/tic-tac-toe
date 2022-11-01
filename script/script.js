// const playerOne = (function(){
//     const icn;


// }

// )()

const _gameBoard = (function(){
    let field = document.querySelector("#field")

    let clearField = function (){
        field.textContent = " "
        addBlock()
        getBlocks()
    }
    
    const addBlock = function() {
        for(let i = 0; i != 9; i++){
            let lol = document.createElement("div")
            lol.classList.add("block")
            field.append(lol) 
        }
    }
    
    const getBlocks = function(){
        let blocks = document.querySelectorAll(".block")
        blocks.forEach(block => {
            block.addEventListener("click", () => {
                block.textContent = "X" //currentPLayer.icn
            })
        })
    }

    return {clearField, addBlock}

})()