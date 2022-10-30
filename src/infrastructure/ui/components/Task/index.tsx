import { FunctionComponent } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { TaskContainer, TaskContent } from './styles';

type Tasks = {
  id: string;
  name: string;
  total: string;
};
type TaskProps = {
  id: string;
  tasks: Tasks[];
};
export const Task: FunctionComponent<TaskProps> = ({ id, tasks }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <TaskContainer className={id} {...provided.droppableProps} ref={provided.innerRef}>
          {tasks.map((task, index) => (
            <div key={task.id}>
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <TaskContent ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <span>{task.name}</span>
                    <p>{task.total}</p>
                  </TaskContent>
                )}
              </Draggable>
            </div>
          ))}

          {provided.placeholder}
        </TaskContainer>
      )}
    </Droppable>
  );
};
