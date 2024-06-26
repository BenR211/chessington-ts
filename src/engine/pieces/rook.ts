import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves = [];
        let currrentSqr = board.findPiece(this);
        let currentRow = currrentSqr.row;
        let currentCol = currrentSqr.col;
        for (let i = 0; i < 8; i ++){
            if (i === currentRow){continue;}
            moves.push(new Square(i, currentCol));
        }
        for (let i = 0; i < 8; i++){
            if (i === currentCol){continue;}
            moves.push(new Square(currentRow, i));
            
        }
        return moves;
    }
}
