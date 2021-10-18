import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as UI from 'ui';
import { v4 as uuidv4 } from 'uuid';

import { actions } from '../reducer';
import * as S from './Form.styles';

// eslint-disable-next-line xss/no-mixed-html
const UserForm: React.FC = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    dispatch(actions.create({ id: uuidv4(), name }));
    setName('');
  }

  function onChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setName(ev.target.value);
  }

  return (
    <S.Container onSubmit={onSubmit}>
      <UI.GridRow>
        <S.Input name="name" onChange={onChange} value={name} placeholder="New User's name" />
        <UI.Button type="submit">Create New User</UI.Button>
      </UI.GridRow>
    </S.Container>
  );
};

export default UserForm;
