import { FunctionComponent, useEffect, useState } from 'react';
import { Input } from '../Input';

type subtaskFormProps = {
  submit: boolean;
};
export const SubtaskForm: FunctionComponent<subtaskFormProps> = ({ submit }) => {
  const [subtask, SetSubtask] = useState<string>('');
  function handlerForm(value: string) {
    SetSubtask(value);
  }

  useEffect(() => {
    console.log(subtask);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submit]);
  return (
    <Input
      action={{
        SetValue: handlerForm,
        value: subtask
      }}
    />
  );
};
