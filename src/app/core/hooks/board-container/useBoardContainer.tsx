import { ROWS } from '@core/constants';
import { AppContext } from '@core/state/AppContext';
import {
    resetState,
    setPlayeres,
    setWinner,
    updateBoard,
} from '@core/state/board-game/actions';
import { checkWinner } from '@core/utils';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IBoardContainerProps } from '../../interfaces/game/boardContainerProps.interface';

export const useBoardContainer = (): IBoardContainerProps => {
    const { state, dispatch } = useContext(AppContext);
    const navigate = useNavigate();
    const winner = state.winner;
    const board = state.board;
    const players = state.players;
    const [fallingCells, setFallingCells] = useState<string[]>([]);

    const onClickResetButton = () => {
        dispatch(resetState());
        navigate('/');
    };

    const handleClick = (col: number) => {
        if (winner) return;

        for (let row = ROWS - 1; row >= 0; row--) {
            if (board && !board[row][col]) {
                const newBoard = [...board];
                const currentPlayer = players?.find((p) => p.isCurrentPlayer);
                newBoard[row][col] = currentPlayer?.color ?? null;

                setFallingCells((prev) => [...prev, `${row}-${col}`]);
                dispatch(updateBoard(newBoard));

                const result = checkWinner({
                    board: newBoard,
                    row,
                    col,
                    players,
                });

                if (result) dispatch(setWinner(result));

                const [player1, player2] = players ?? [];
                dispatch(
                    setPlayeres([
                        {
                            ...player1,
                            isCurrentPlayer: !player1.isCurrentPlayer,
                        },
                        {
                            ...player2,
                            isCurrentPlayer: !player2.isCurrentPlayer,
                        },
                    ])
                );
                return;
            }
        }
    };

    return { state, fallingCells, onClickResetButton, handleClick };
};
