import './Board.css';
import { CellInterface } from '../../interfaces/CellInterface/CellInterface';
import { Pawn } from '../Pawn/Pawn';

export default function Board() {
	const boardColumns = [
		{ column: 'a', color: '' },
		{ column: 'b', color: '' },
		{ column: 'c', color: '' },
		{ column: 'd', color: '' },
		{ column: 'e', color: '' },
		{ column: 'f', color: '' },
		{ column: 'g', color: '' },
		{ column: 'h', color: '' },
	];

	const boardRows = ['1', '2', '3', '4', '5', '6', '7', '8'];

	const whitePawns = [
		{ startAt: 'a2', name: 'pawnW1' },
		{ startAt: 'b2', name: 'pawnW2' },
		{ startAt: 'c2', name: 'pawnW3' },
		{ startAt: 'd2', name: 'pawnW4' },
		{ startAt: 'e2', name: 'pawnW5' },
		{ startAt: 'f2', name: 'pawnW6' },
		{ startAt: 'g2', name: 'pawnW7' },
		{ startAt: 'h2', name: 'pawnW8' },
	];

	const boardCell = [] as Array<CellInterface>;

	boardColumns.forEach(({ column, color }) => {
		boardRows.forEach((row) => {
			let cellColor = '';
			if (
				(column === 'a' ||
					column === 'c' ||
					column === 'e' ||
					column === 'g') &&
				(row == '1' || row == '3' || row == '5' || row == '7')
			) {
				cellColor = 'even-cell';
			} else if (
				(column === 'b' ||
					column === 'd' ||
					column === 'f' ||
					column === 'h') &&
				(row == '2' || row == '4' || row == '6' || row == '8')
			) {
				cellColor = 'even-cell';
			} else {
				cellColor = 'odd-cell';
			}
			const cell = {
				position: `${column}${row}`,
				color: cellColor,
			};
			boardCell.push(cell);
		});
	});

	const positioningThePieces = (position: string) => {
		const pawns = whitePawns.map(({ startAt, name }) => {
			if (startAt === position) {
				return (
					<Pawn
						key={name}
						name={name}
						startAt={startAt}
						currentPosition={startAt}
					/>
				);
			}
			return null;
		});
		return pawns;
	};

	return (
		<div id='game-board'>
			{boardCell.map(({ color, position }, index) => (
				<div
					key={position}
					id={position}
					className={`game-board-cell ${color}`}
				>
					{position}
					{positioningThePieces(position)}
				</div>
			))}
		</div>
	);
}
