import { usePlayFourInLine } from '../core/hooks/usePlayFourInLine';

import { LayoutMain } from '@ui/layouts/LayoutMain';
import { Board } from '@ui/components/Board';
import { TitleSection } from '@ui/components/TitleSection';
import { ScoreBoard } from '@ui/components/ScoreBoard';
import { Modal } from '@ui/components/Modal';

export default function HomeContainer() {
  const {
    board,
    handleColumnClick, 
    currentPlayer,

    winner, 
    handleResetGame, 
    
  } = usePlayFourInLine();

  const titelModal = winner === 'draw' ? 'Empate' : 'Victoria';
  const contentModal = winner === 'draw' 
    ? 'Es un empate' 
    : `El ganador es ${winner}`; 

  return (
    <LayoutMain
      header={<TitleSection contentTitle='4 en raya'/>}
      scoreboard={<ScoreBoard currentPlayer={currentPlayer}/>}
      children={
        <>
          <Board 
            board={board} 
            handleSelectColumn={handleColumnClick} 
          />
          {(winner) && (
            <Modal
              titleModal={titelModal}
              labelButton='Finish'
              buttonAction={handleResetGame}
            >
              {contentModal}
            </Modal>
          )}
        </>
      }
    />
  );
}