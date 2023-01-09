import { useState } from 'react';
import { PieceInterface } from '../../interfaces/PieceInterface/PieceInterface';
import './Pawn.css';

export function Pawn(props: PieceInterface) {
	const [pawnState, setPawnState] = useState({
		name: props.name,
		move: 'forward',
		captures: 'diagonal',
		value: 1,
		startAt: props.startAt,
		currentPosition: props.startAt,
	});

	function moves(): string {
		return pawnState.currentPosition;
	}

	function captures(): boolean {
		return true;
	}

	return <div id={pawnState.name} className='pawn'></div>;
}
