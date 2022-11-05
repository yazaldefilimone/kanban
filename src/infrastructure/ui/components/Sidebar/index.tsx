import { Kanban, Plus } from 'phosphor-react';
import { FunctionComponent, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Board } from '~/domain/entities/board';
import { boardStore } from '~/infrastructure/services/store/recoil';
import { BoardForm } from '~/infrastructure/ui/components/BoardForm';
import { Modal } from '~/infrastructure/ui/components/Modal';
import { SidebarContainer, SideBarBoard, SideBarButton, SideBarContent } from './styles';

export const Sidebar: FunctionComponent = () => {
  const [board, SetBoard] = useRecoilState(boardStore);
  const [modalBoard, SetModalBoard] = useState(false);

  const handlerBoard = (boardParam: Board) => {
    if (board.active?.id === boardParam.id) {
      return null;
    }
    SetBoard((current) => ({ ...current, active: boardParam }));
  };

  function showBoard(param: Board) {
    return (
      <li key={`board-${param.id}`}>
        <SideBarButton active={param.id === board.active?.id} onClick={() => handlerBoard(param)}>
          <Kanban size={20} />
          {param.name}
        </SideBarButton>
      </li>
    );
  }

  return (
    <SidebarContainer>
      <SideBarContent>
        <SideBarBoard>
          <span>All Boards ({board.all.length})</span>
          <ul>
            {board.all.map(showBoard)}
            <li>
              <SideBarButton bg={true} onClick={() => SetModalBoard(!modalBoard)}>
                add new board <Plus weight="bold" size={16} />
              </SideBarButton>
            </li>
          </ul>
        </SideBarBoard>
        <div>
          <div></div>
        </div>
      </SideBarContent>
      <Modal active={modalBoard} SetActive={SetModalBoard}>
        <BoardForm heading={'Add New Board'} />
      </Modal>
    </SidebarContainer>
  );
};
