import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }
    private add_Direction(startRow:number, startCol:number, rowIncrementor:number, colIncrementor:number, moves_pointer: Square[]) {
        for(let i  = 0; i < 8; i ++){
            startCol += colIncrementor;
            startRow += rowIncrementor;
            if (startCol < 0 || startCol > 7 || startRow < 0 || startRow > 7){
                break;
            }
            moves_pointer.push(new Square(startRow, startCol));
        }
    }




    public getAvailableMoves(board: Board) {
        const moves: Square[] = [];
        let currentSqr = board.findPiece(this);
        this.add_Direction(currentSqr.row, currentSqr.col, 1, 1, moves);
        this.add_Direction(currentSqr.row, currentSqr.col, 1,-1, moves);
        this.add_Direction(currentSqr.row, currentSqr.col, -1,1, moves);
        this.add_Direction(currentSqr.row, currentSqr.col, -1,-1, moves);
        return moves;
    }
}
