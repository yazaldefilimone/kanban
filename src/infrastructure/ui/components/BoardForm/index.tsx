import { FunctionComponent, ReactNode, useState } from 'react';
import { Button } from '~/infrastructure/ui/components/Button';
import { Input } from '~/infrastructure/ui/components/Input';
import { BoardFormContainer, BoardFormContent, SubTaskFormContainer, SubTaskInput, SubtaskBtn, Subtasks } from './styles';
import { StatusForm } from '~/infrastructure/ui/components/StatusForm';
interface BoardFormProps {
  children?: ReactNode;
  heading: string;
}

export const BoardForm: FunctionComponent<BoardFormProps> = ({ heading }) => {
  const initForm = {
    name: '',
    description: ''
  };
  const [form, SetForm] = useState(initForm);
  const [subTaskCount, SetSubTaskCount] = useState<number[]>([]);
  const [submit, SetSubmit] = useState<boolean>(false);

  function handlerName(name: string) {
    SetForm((state) => ({ ...state, name }));
  }

  function handlerBtn(id: number) {
    if (id < 2) return;
    SetSubTaskCount((count) => count.filter((c, index) => index !== id));
  }

  function handlerActionSubmit() {
    SetSubmit(true);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <BoardFormContainer>
      <h3>{heading}</h3>
      <BoardFormContent>
        <Input
          label="Name"
          name="name"
          placeholder="Enter Board name"
          action={{
            SetValue: handlerName,
            value: form.name
          }}
        />

        <SubTaskFormContainer>
          <label>Board Status</label>
          <Subtasks>
            {subTaskCount.map((cou, key) => (
              <SubTaskInput key={`status-${key}`}>
                <StatusForm submit={submit} />
              </SubTaskInput>
            ))}
          </Subtasks>

          <SubtaskBtn>
            <Button action={() => SetSubTaskCount((count) => [...count, count.length])}>Add new Status</Button>
            <Button bg={false} border={true} action={() => handlerBtn(subTaskCount.length - 1)}>
              Remove last Status
            </Button>
          </SubtaskBtn>
        </SubTaskFormContainer>
      </BoardFormContent>

      <Button action={handlerActionSubmit}>Save Board</Button>
    </BoardFormContainer>
  );
};
