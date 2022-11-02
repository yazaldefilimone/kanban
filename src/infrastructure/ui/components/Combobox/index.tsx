import { CaretDown } from 'phosphor-react';
import { FunctionComponent, useEffect, useState } from 'react';
import { ComboBoxContainer, ComboBoxSelect, ComboBoxOptions, ComboBoxOption, ComboBoxContent } from './styles';

type comboboxOptionType = {
  key: string;
  name: string;
};
type ComboBoxProps = {
  label?: string;
  options: string[] | comboboxOptionType[];
  action: (option: string | comboboxOptionType) => void;
};
export const ComboBox: FunctionComponent<ComboBoxProps> = ({ label, options, action }) => {
  const [optionsHook, SetOptionsHook] = useState<{ option: string | comboboxOptionType } | null>(null);
  const [name, SetName] = useState<string>();
  const [active, SetActive] = useState(false);

  function handlerOption(option: string | comboboxOptionType) {
    SetOptionsHook({ option });
    SetActive(!active);
  }

  function handlerSelect() {
    SetActive(!active);
  }

  useEffect(() => {
    if (!optionsHook) return;
    SetName(typeof optionsHook.option === 'object' ? optionsHook.option.name : optionsHook.option);
    action(optionsHook.option);
  }, [action, optionsHook]);

  return (
    <ComboBoxContainer>
      {label && <label>{label}</label>}
      <ComboBoxContent>
        <ComboBoxSelect active={active} onClick={handlerSelect}>
          {name ? <span>{name}</span> : <span>Select your {label ? label : 'options'}</span>}
          <CaretDown size={19} />
        </ComboBoxSelect>
        <ComboBoxOptions active={active}>
          {options.map((option, key) => (
            <ComboBoxOption onClick={() => handlerOption(option)} key={`option-${key}`}>
              {typeof option === 'object' ? option.name : option}
            </ComboBoxOption>
          ))}
        </ComboBoxOptions>
      </ComboBoxContent>
    </ComboBoxContainer>
  );
};
