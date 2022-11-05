import { FunctionComponent, useEffect, useState } from 'react';
import { Input } from '~/infrastructure/ui/components/Input';

type statusFormProps = {
  submit: boolean;
};
export const StatusForm: FunctionComponent<statusFormProps> = ({ submit }) => {
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
