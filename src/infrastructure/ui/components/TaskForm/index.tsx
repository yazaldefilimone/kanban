import { FunctionComponent, ReactNode, useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import {
  TaskFormContainer,
  TaskFormContent,
  TaskFormArea,
  SubTaskFormContainer,
  SubTaskInput,
  SubtaskBtn,
  Subtasks
} from './styles';
import { ComboBox } from '../Combobox';
import { SubtaskForm } from '../SubtaskForm';
interface TaskFormProps {
  children?: ReactNode;
  heading: string;
}

export const TaskForm: FunctionComponent<TaskFormProps> = ({ heading }) => {
  const initForm = {
    name: '',
    description: ''
  };
  const [form, SetForm] = useState(initForm);
  const [subtaskCount, SetSubtaskCount] = useState<number[]>([]);
  const [submit, SetSubmit] = useState<boolean>(false);

  function handlerName(name: string) {
    SetForm((state) => ({ ...state, name }));
  }

  function handlerBtn(id: number) {
    if (id < 2) return;
    SetSubtaskCount((count) => count.filter((c, index) => index !== id));
  }
  function handlerDescription(description: string) {
    SetForm((state) => ({ ...state, description }));
  }
  const actions = ['TODO', 'DOING', 'TESTING', 'REVIEW'];
  function handlerActionSubmit() {
    SetSubmit(true);
  }
  function handlerComboBox(data: any) {
    console.log(data);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <TaskFormContainer>
      <h3>{heading}</h3>
      <TaskFormContent>
        <Input
          label="Name"
          placeholder="Enter task name"
          action={{
            SetValue: handlerName,
            value: form.name
          }}
        />
        <TaskFormArea>
          <label>Description</label>
          <textarea placeholder="Enter task description "></textarea>
        </TaskFormArea>
        <SubTaskFormContainer>
          <label>SubTasks</label>
          <Subtasks>
            {subtaskCount.map((cou, key) => (
              <SubTaskInput key={`subtask-${key}`}>
                <SubtaskForm submit={submit} />
              </SubTaskInput>
            ))}
          </Subtasks>

          <SubtaskBtn>
            <Button action={() => SetSubtaskCount((count) => [...count, count.length])}>Add new SubTask</Button>
            <Button bg={false} border={true} action={() => handlerBtn(subtaskCount.length - 1)}>
              Remove last SubTask
            </Button>
          </SubtaskBtn>
        </SubTaskFormContainer>
        <ComboBox options={actions} action={handlerComboBox} label="Status" />
      </TaskFormContent>

      <Button action={handlerActionSubmit}>Save Task</Button>
    </TaskFormContainer>
  );
};
