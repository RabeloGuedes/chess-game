export abstract class Piece {
	private _move: string;
	private _value: number;
	private _name: string;
	private _startAt: string;

	constructor(_move: string, _value: number, _name: string, _startAt: string) {
		this._move = _move;
		this._value = _value;
		this._name = _name;
		this._startAt = _startAt;
	}

	abstract moves(): string;
	abstract captures(): boolean;
}
