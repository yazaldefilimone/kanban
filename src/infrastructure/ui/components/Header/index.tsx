import { Gear, Plus, UserGear } from 'phosphor-react';
import { FunctionComponent, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { boardStore } from '~/infrastructure/services/store/recoil';
import { Button } from '~/infrastructure/ui/components/Button';
import { Input } from '~/infrastructure/ui/components/Input';
import { Modal } from '~/infrastructure/ui/components/Modal';
import { TaskForm } from '~/infrastructure/ui/components/TaskForm';
import { HeaderAction, HeaderSearch, HeaderContainer, HeaderContent, HeaderLogo, HeaderWrapper } from './styles';

export const Header: FunctionComponent = () => {
  const { active } = useRecoilValue(boardStore);
  const [modal, SetModal] = useState(false);
  const [searchUser, SetSearchUser] = useState('');
  function handlerAddUser() {
    return null;
  }

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
          <h2>{active?.name || 'Name'}</h2>
          <HeaderAction>
            <HeaderSearch>
              <Input
                action={{
                  SetValue: SetSearchUser,
                  value: searchUser
                }}
                placeholder="search user for email"
              />
              <Button action={handlerAddUser}>Join</Button>
            </HeaderSearch>

            <Button action={handlerButton}>
              add new task <Plus weight="bold" size={16} />
            </Button>
            <Button bg={false} action={() => ''}>
              <UserGear weight="bold" size={20} />
            </Button>
            <Button bg={false} action={() => ''}>
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
