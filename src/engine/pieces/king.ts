import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../../../src/engine/square';
export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves:Square[] = []
        let currentSqr = board.findPiece(this);

        for (let row = currentSqr.row - 1; row <= currentSqr.row +1; row ++ ){
            for (let col = currentSqr.col - 1; col <= currentSqr.col + 1; col ++){
                if (!(currentSqr.row === row && currentSqr.col === col)){
                    moves.push(new Square(row, col));
                }
            }
        }

        return moves;
    }
}
