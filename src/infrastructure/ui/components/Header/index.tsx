import { Gear, Plus, UserGear } from 'phosphor-react';
import { FunctionComponent, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { boardStore } from '~/infrastructure/services/store/recoil';
import { Button } from '~/infrastructure/ui/components/Button';
import { Modal } from '../Modal';
import { TaskForm } from '../TaskForm';
import { HeaderAction, HeaderContainer, HeaderContent, HeaderLogo, HeaderWrapper } from './styles';

export const Header: FunctionComponent = () => {
  const { active } = useRecoilValue(boardStore);
  const [modal, SetModal] = useState(false);

  const handlerButton = () => {
    SetModal(!modal);
  };
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <img src="/assets/icons/logo-light.svg" />
        </HeaderLogo>
        <HeaderWrapper>
          <h2>{active?.name}</h2>
          <HeaderAction>
            <Button action={handlerButton}>
              add new task <Plus weight="bold" size={16} />
            </Button>
            <Button bg={false} action={handlerButton}>
              <UserGear weight="bold" size={20} />
            </Button>
            <Button bg={false} action={handlerButton}>
              <Gear weight="bold" size={20} />
            </Button>
          </HeaderAction>
        </HeaderWrapper>
      </HeaderContent>
      <Modal active={modal} SetActive={SetModal}>
        <TaskForm heading="Add new task" />
      </Modal>
    </HeaderContainer>
  );
};
