import React from 'react';
import {ViewProps} from 'react-native';
import {LoadingComponent} from './components/LoadingComponent';
import * as S from './styles';

interface Props extends ViewProps {
  isLoading?: boolean;
}

export function AppBasePage(props: Props) {
  const {isLoading, children, ...restOfProps} = props;

  return (
    <S.Container {...restOfProps}>
      {children}
      {isLoading ? <LoadingComponent /> : <></>}
    </S.Container>
  );
}
