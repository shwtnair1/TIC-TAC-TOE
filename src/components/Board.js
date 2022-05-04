import { Square } from './Square'
import { useState } from 'react';
import './components.css';

function Board() {
    const [squares, setSquares] = useState([]);
    const [isX, setisX] = useState(true);

    const handleClick = (i) => {
        squares[i] = isX?'X':'O'
        setSquares(squares);
        setisX(!isX);
    }

    const handleRestart = (i) => {
        setSquares([]);
        setisX(true);
    }
    const checkWinner=()=>{
        let winningMoves = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let i=0;i<winningMoves.length;i++){
            const [a,b,c] = winningMoves[i]
            if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
                return squares[a]
            }
        }
        return null;
    }
    const renderSquare = (i) => {
        return <Square onClick={()=>handleClick(i)} value={squares[i]} />
    }

    const winner = checkWinner();
    return (
        <div className="board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>

            <div className='status-container'>
                {winner ? 'Winner : '+ winner : `Next Player : ${isX ? 'X' : 'O'}`}
            </div>
            <button onClick={handleRestart}>Restart</button>
        </div>
    );
}

export default Board;