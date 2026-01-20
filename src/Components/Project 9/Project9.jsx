import React, { use, useEffect, useState } from 'react'

function Square({ value, onClick }) {
        return (
          <button className="square w-28 h-28 text-2xl font-bold border border-black text-black flex items-center justify-center bg-white hover:bg-gray-200 font-2xl cursor-pointer" onClick={onClick}>
            {value}
          </button>
        );
      }
      function getWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    
    const Project9 = () => {
        const [squares, setSquares] = useState(Array(9).fill(""));
        const [isXTurn, setIsXTurn] = useState(true);
        const [status, setStatus] = useState('');
        const handelClick=(index)=>{
            if(squares[index]!==""){
                return;
            }
            const newSquares=[...squares];
            if(getWinner(newSquares) || newSquares[squares]) return
            newSquares[index]=isXTurn?"X":"O"; 
            setSquares(newSquares);
            setIsXTurn(!isXTurn);
        }
        // console.log(squares);
       
        useEffect(() => {
           if (!getWinner(squares) && squares.every((square) => square !== "")) {
            setStatus("It's a Tie! Please restart the Game!!");
          }
            else if (getWinner(squares)) {
            setStatus(`Winner is ${getWinner(squares)} . Please restart the Game!!`);
          } else {
            setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
          }
        }, [squares]);

    
    
  return (
    <div className=" min-h-screen bg-[url('../../../Img/tic.jpg')] bg-cover bg-center"> 
        <div className=" text-white p-3  rounded-b-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mt-10">Project 9 </h1>
        </div>
        <div className="m-auto p-5 mt-10 bg-slate-500 bg-opacity-70 rounded-lg w-11/12 lg:w-8/12 flex items-center justify-center after:clear-both after:content-none after:display-table">
            <div className="">
                <Square value={squares[0]} onClick={() => handelClick(0)} />
                <Square value={squares[1]} onClick={() => handelClick(1)} />
                <Square value={squares[2]} onClick={() => handelClick(2)} />
            </div>
            <div>
                <Square value={squares[3]} onClick={() => handelClick(3)} />
                <Square value={squares[4]} onClick={() => handelClick(4)} />
                <Square value={squares[5]} onClick={() => handelClick(5)} />
            </div>
            <div>
                <Square value={squares[6]} onClick={() => handelClick(6)} />
                <Square value={squares[7]} onClick={() => handelClick(7)} />
                <Square value={squares[8]} onClick={() => handelClick(8)} />
            </div>
        </div>
        <div className="text-center">
            <h1 className="text-white text-xl font-bold mt-5">{status}</h1>
            <button className="text-white bg-red-600 hover:bg-red-700  font-bold py-2 px-4 rounded mt-5" onClick={() => {
                setSquares(Array(9).fill(""));
                setIsXTurn(true);
                setStatus("");
            }}>Restart Game</button>
        </div>
    </div>
  )
}

export default Project9