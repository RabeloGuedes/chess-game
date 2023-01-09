import './Board.css';
import { CellInterface } from '../../interfaces/CellInterface/CellInterface';

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
	return (
		<div id='game-board'>
			{boardCell.map(({ color, position }) => (
				<span
					key={position}
					id={position}
					className={`game-board-cell ${color}`}
				>
					{position}
				</span>
			))}
		</div>
	);
}
