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
                if (board.getPiece(new Square(currentSqr.row + 1, currentSqr.col)) === undefined){
                    if (currentSqr.row === 1){
                        if (board.getPiece(new Square(currentSqr.row + 2, currentSqr.col)) === undefined){
                            availableMove.push(new Square(currentSqr.row +2, currentSqr.col));
                        }
                    }
                    availableMove.push(new Square(currentSqr.row +1, currentSqr.col));
            }
            }
            else {
                if (board.getPiece(new Square(currentSqr.row - 1, currentSqr.col)) === undefined){
                    if (currentSqr.row === 6){
                        if (board.getPiece(new Square(currentSqr.row - 2, currentSqr.col)) === undefined)
                        availableMove.push(new Square(currentSqr.row - 2, currentSqr.col));
                    }
                    availableMove.push(new Square(currentSqr.row - 1, currentSqr.col));
                }
            }
        

        
        return availableMove;
    }
}
