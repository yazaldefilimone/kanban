import { FunctionComponent, useState } from 'react';
import { hexadecimalColor } from '~/shared/hex-color';
// import { Task } from '../Task';
import { BoardContainer, BoardColumn, BoardColumnHead, BoardStatus, BoardTitle } from './styles';
import { DragDropContext, DropResult, ResponderProvided } from 'react-beautiful-dnd';
import dynamic from 'next/dynamic';

const Task = dynamic(() => import('../Task'), {
  ssr: false
});
export const Board: FunctionComponent = () => {
  const [k, SetTasks] = useState('');
  const tasks = [
    [
      {
        id: 'fhchgvdyjavdyulwegyfduvewyu',
        name: 'Plan Product Hunt launch',
        total: 'Subtasks (0 of 6)'
      },
      {
        id: 'gadugvyusvcyuweyuwe',
        name: 'Share on Show HN',
        total: 'Subtasks (0 of 6)'
      },
      {
        id: 'hccvhgwdvwvcuwe',
        name: 'Write launch article to publish on multiple channels',
        total: 'Subtasks (0 of 6)'
      }
    ],
    [
      {
        id: 'hbcjvuwe',
        name: ' Product  launch',
        total: 'Subtasks (0 of 6)'
      },
      {
        id: 'ehcbjhvujew',
        name: 'Share on Show HN',
        total: 'Subtasks (0 of 6)'
      },
      {
        id: 'ehcvwejhgvj',
        name: ' article to publish on multiple channels',
        total: 'Subtasks (0 of 6)'
      }
    ],
    [
      {
        id: 'sdhcsjdcvj',
        name: 'Plan Product Hunt launch',
        total: 'Subtasks (0 of 6)'
      },
      {
        id: 'sdcjhhbcijhd',
        name: 'Share HN',
        total: 'Subtasks (0 of 6)'
      },
      {
        id: 'sdbchjldsvcjhw',
        name: 'Write launch ',
        total: 'Subtasks (0 of 6)'
      }
    ]
  ];
  const status = ['TODO', 'DOING', 'DONE'];

  function onDragEnd(result: DropResult, provided: ResponderProvided) {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    const newDestinationIndex = destination?.index as number;
    const newDestinationColumn = destination?.droppableId as string;
    const oldDestinationIndex = source?.index;
    const oldDestinationColumn = source?.droppableId;
    const taskId = draggableId;

    const newStatusPosition = status.indexOf(newDestinationColumn);
    const oldStatusPosition = status.indexOf(oldDestinationColumn);

    const task = tasks[oldStatusPosition].find((old) => old.id === taskId);
    if (task) {
      tasks[oldStatusPosition]?.splice(oldDestinationIndex, 1);
      tasks[newStatusPosition]?.splice(newDestinationIndex, 0, task);
    }

    console.log({ draggableId, oldDestinationIndex, newDestinationIndex, newStatusPosition });
  }
  const statusWithColor = status.map((s) => ({
    name: s,
    color: hexadecimalColor()
  }));
  return (
    <BoardContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        {statusWithColor.map((status, index) => {
          const task = tasks[index];
          return (
            <BoardColumn key={status.name}>
              <BoardColumnHead>
                <BoardStatus color={status.color}></BoardStatus>
                <BoardTitle>
                  {status.name}- ( {task.length})
                </BoardTitle>
              </BoardColumnHead>
              <Task tasks={task} id={status.name} />
            </BoardColumn>
          );
        })}
      </DragDropContext>
    </BoardContainer>
  );
};
