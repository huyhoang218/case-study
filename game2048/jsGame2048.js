let board
let score = 0
let rows = 4
let columns = 4

window.onload = function () {
    setGame()
}

function setGame() {
    let board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement('div')
            div.tile = r.toString() + ',' + c.toString()
        }
    }
}
