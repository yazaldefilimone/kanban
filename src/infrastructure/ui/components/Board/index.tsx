import { FunctionComponent, useState } from 'react';
import { hexadecimalColor } from '~/shared/hex-color';
import { Task } from '../Task';
import { BoardContainer, BoardColumn, BoardColumnHead, BoardStatus, BoardTitle } from './styles';
import { DragDropContext, DropResult, ResponderProvided } from 'react-beautiful-dnd';

export const Board: FunctionComponent = () => {
  const [search, SetSearch] = useState('');
  const status = ['TODO', 'DOING', 'DONE'];
  const tasks = [
    [
      {
        id: 'sdfhdgjkfl',
        name: 'Plan Product Hunt launch',
        total: 'Subtasks (0 of 6)'
      },
      {
        id: 'hicvhjcvuwecjhg',
        name: 'Share on Show HN',
        total: 'Subtasks (0 of 6)'
      },
      {
        id: 'qgyfhdbjnkdb',
        name: 'Write launch article to publish on multiple channels',
        total: 'Subtasks (0 of 6)'
      }
    ],
    [
      {
        id: 'asjhdajd',
        name: ' Product  launch',
        total: 'Subtasks (0 of 6)'
      },
      {
        id: 'fdgfhjwregrdfs',
        name: 'Share on Show HN',
        total: 'Subtasks (0 of 6)'
      },
      {
        id: 'wfwefwefwef',
        name: ' article to publish on multiple channels',
        total: 'Subtasks (0 of 6)'
      }
    ],
    [
      {
        id: 'sdfhdgjkfl',
        name: 'Plan Product Hunt launch',
        total: 'Subtasks (0 of 6)'
      },
      {
        id: 'ahvbfbvsr',
        name: 'Share HN',
        total: 'Subtasks (0 of 6)'
      },
      {
        id: 'sdhkbfs',
        name: 'Write launch ',
        total: 'Subtasks (0 of 6)'
      }
    ]
  ];
  function onDragEnd(result: DropResult, provided: ResponderProvided) {
    console.log(result, provided);
  }
  return (
    <BoardContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        {status.map((status, index) => {
          return (
            <BoardColumn key={status}>
              <BoardColumnHead>
                <BoardStatus color={hexadecimalColor()}></BoardStatus>
                <BoardTitle>{status}</BoardTitle>
              </BoardColumnHead>
              <Task tasks={tasks[index]} id={status} />
            </BoardColumn>
          );
        })}
      </DragDropContext>
    </BoardContainer>
  );
};
