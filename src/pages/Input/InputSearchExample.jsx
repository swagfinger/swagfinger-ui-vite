import React, { useState, useRef } from 'react';
import { Input, InputWrapper, Button, Icon } from '../../components';
import { SearchIcon } from '../../icons';

const InputSearchExample = () => {
  const ref = useRef(null);

  const clickHandler = () => {
    console.log('value: ', ref.current.value);
  };

  return (
    <InputWrapper>
      <Input ref={ref} border={false} placeholder="placeholder" />
      <Button intent="icon" onClick={clickHandler}>
        <Icon size="25px">
          <SearchIcon />
        </Icon>
      </Button>
    </InputWrapper>
  );
};

export default InputSearchExample;