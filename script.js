var board = null
var game = new Chess()

function makeRandomMove() {
    var possibleMoves = game.moves()

    if (possibleMoves.length === 0) return

    var randomIdx = Math.floor(Math.random() * possibleMoves.length)
    game.move(possibleMoves[randomIdx])
    board.position(game.fen())
}

var config = {
    draggable: true,
    position: 'start',
    onDrop: function (source, target) {
        var move = game.move({
            from: source,
            to: target,
            promotion: 'q'
        })

        if (move === null) return 'snapback'

        window.setTimeout(makeRandomMove, 250)
    }
}

board = Chessboard('board', config)
