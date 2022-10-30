import { Kanban, Plus } from 'phosphor-react';
import { FunctionComponent } from 'react';
import { useRecoilState } from 'recoil';
import { Board } from '~/domain/entities/board';
import { boardStore } from '~/infrastructure/services/store/recoil';
import { SidebarContainer, SideBarBoard, SideBarButton } from './styles';

export const Sidebar: FunctionComponent = () => {
  const [board, SetBoard] = useRecoilState(boardStore);

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
      <SideBarBoard>
        <ul>
          {board.all.map(showBoard)}
          <li>
            <SideBarButton bg={true}>
              add new board <Plus weight="bold" size={16} />
            </SideBarButton>
          </li>
        </ul>
      </SideBarBoard>
      <div>
        <div></div>
      </div>
    </SidebarContainer>
  );
};
