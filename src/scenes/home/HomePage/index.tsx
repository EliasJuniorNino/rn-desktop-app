import React from 'react';
import * as S from './styles';
import {FlatList} from 'react-native';
import {AppBasePage} from '../../../components/AppBasePage';
import {ListItem} from './components/ListItem';
import {useViewModel} from './viewModel';

export function HomePage() {
  const viewModel = useViewModel();

  return (
    <AppBasePage isLoading={viewModel.listQuery.isLoading}>
      <FlatList
        data={viewModel.listQuery.data}
        keyExtractor={item => item.key}
        renderItem={({item}) => <ListItem title={item.title} />}
        ListEmptyComponent={
          <S.EmptyListMessage>Nenhum item encontrado</S.EmptyListMessage>
        }
      />
    </AppBasePage>
  );
}
