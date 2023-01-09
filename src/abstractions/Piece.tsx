export abstract class Piece {
	protected _move: string;
	protected _value: number;
	protected _name: string;
	protected _startAt: string;
	protected _currentPosition: string;

	constructor(_move: string, _value: number, _name: string, _startAt: string) {
		this._move = _move;
		this._value = _value;
		this._name = _name;
		this._startAt = _startAt;
		this._currentPosition = _startAt;
	}

	abstract moves(): string;
	abstract captures(): boolean;
}
