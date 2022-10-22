import { FunctionComponent, HTMLInputTypeAttribute, ChangeEventHandler, SetStateAction, Dispatch } from 'react';
import { InputContainer } from './styles';

type InputProps = {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  action: {
    SetValue: Dispatch<SetStateAction<string>>;
    value: string;
  };
};
export const Input: FunctionComponent<InputProps> = ({ type, placeholder, action }) => {
  const handlerChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    action.SetValue(target.value);
  };

  return (
    <InputContainer>
      <input placeholder={placeholder} type={type || 'text'} onChange={handlerChange} value={action.value} />
    </InputContainer>
  );
};
