import { atom } from 'recoil';
import { Board } from '~/domain/entities/board';
const boards = [
  {
    id: '8104ff79-2a2c-48f7-a794-6237c4116b10',
    name: 'kanban',
    admin: ['06fc9410-d086-4b49-bf5e-9b853931062d'],
    createdAt: '2022-10-27T10:10:25.281Z',
    updateAt: '2022-10-27T10:10:25.281Z'
  },
  {
    id: '08433e21-7e7a-4b6b-b857-1e8da6702a49',
    name: 'Spotfy',
    admin: ['06fc9410-d086-4b49-bf5e-9b853931062d'],
    createdAt: '2022-10-27T10:52:55.685Z',
    updateAt: '2022-10-27T10:52:55.685Z'
  },
  {
    id: '71804dcc-d7bc-4098-a81e-948e63b1d31d',
    name: 'SoundClub',
    admin: ['06fc9410-d086-4b49-bf5e-9b853931062d'],
    createdAt: '2022-10-27T10:53:50.042Z',
    updateAt: '2022-10-27T10:53:50.042Z'
  }
];

type boardStoreType = {
  active: Board | null;
  all: Board[];
};

type userStoreType = {
  id: string;
  token: string;
  admin: boolean;
};

export const boardStore = atom<boardStoreType>({
  key: 'tsyudfihjgnohkmfgdjshgfgchvjfbkgnl;mlhfndisugyfghjfkjgnl',
  default: {
    active: null,
    all: boards
  }
});

export const userStore = atom<userStoreType>({
  key: 'userStore',
  default: {
    id: '',
    token: '',
    admin: false
  }
});
