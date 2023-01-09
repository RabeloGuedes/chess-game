import { Piece } from './Piece';

export class Pawn extends Piece {
	moves(): string {
		return this._currentPosition;
	}
	captures(): boolean {
		return true;
	}
}
