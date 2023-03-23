import {useQuery} from '../../../hooks/useQuery';
import {getItemsHandler} from './handlers/network/getItems';

export function useViewModel() {
  const listQuery = useQuery({
    handler: getItemsHandler,
  });

  return {
    listQuery,
  };
}
