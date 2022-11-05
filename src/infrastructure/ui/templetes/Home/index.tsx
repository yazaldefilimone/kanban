import { Fragment, FunctionComponent } from 'react';
import { Header } from '~/infrastructure/ui/components/Header';
import { Sidebar } from '~/infrastructure/ui/components/Sidebar';
import { Board } from '~/infrastructure/ui/components/Board';

export const HomeTemplete: FunctionComponent = () => {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <Board />
    </Fragment>
  );
};
