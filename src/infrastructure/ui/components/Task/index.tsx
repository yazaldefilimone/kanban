import { Fragment, FunctionComponent } from 'react';
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
const Task: FunctionComponent<TaskProps> = ({ id, tasks }) => {
  return (
    <div key={id}>
      <Droppable key={id} droppableId={id}>
        {(provided, snapshot) => (
          <div className="headerList">
            <TaskContainer isDraw={snapshot.isDraggingOver} {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided, snapshot) => (
                    <TaskContent
                      isDraw={snapshot.isDragging}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <span>{task.name}</span>
                      <p>{task.total}</p>
                    </TaskContent>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </TaskContainer>
          </div>
        )}
      </Droppable>
    </div>
  );
};
export default Task;
