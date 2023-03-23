import React from 'react';
import {ViewProps} from 'react-native';
import * as S from './styles';

interface Props extends ViewProps {
  title?: string;
}

export function ListItem(props: Props) {
  return (
    <S.Content>
      <S.Title>{props.title}</S.Title>
    </S.Content>
  );
}
