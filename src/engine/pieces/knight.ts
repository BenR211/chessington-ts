import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let moves:Square[] = []
        let currentSqr = board.findPiece(this);
        moves.push(new Square(currentSqr.row +2, currentSqr.col -1));
        moves.push(new Square(currentSqr.row + 2, currentSqr.col + 1));
        moves.push(new Square(currentSqr.row + 1, currentSqr.col + 2));
        moves.push(new Square(currentSqr.row - 1, currentSqr.col + 2));
        moves.push(new Square(currentSqr.row - 2, currentSqr.col + 1));
        moves.push(new Square(currentSqr.row - 2, currentSqr.col - 1));
        moves.push(new Square(currentSqr.row + 1, currentSqr.col - 2));
        moves.push(new Square(currentSqr.row - 1, currentSqr.col - 2));
        return moves;
    }
}
