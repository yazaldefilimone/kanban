import { Gear, Plus, UserGear } from 'phosphor-react';
import { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';
import { boardStore } from '~/infrastructure/services/store/recoil';
import { Button } from '~/infrastructure/ui/components/Button';

import { HeaderAction, HeaderContainer, HeaderContent, HeaderLogo, HeaderWrapper } from './styles';

export const Header: FunctionComponent = () => {
  const { active } = useRecoilValue(boardStore);

  const handlerButton = () => {
    return null;
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
    </HeaderContainer>
  );
};
