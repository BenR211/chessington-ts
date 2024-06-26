import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../../../src/engine/square';
export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableMove = [];
        let currentSqr = board.findPiece(this);
        if (this.player === Player.WHITE){
            availableMove.push(new Square(currentSqr.row +1, currentSqr.col));
        }
        else {
            availableMove.push(new Square(currentSqr.row - 1, currentSqr.col));
        }

        
        return availableMove;
    }
}
