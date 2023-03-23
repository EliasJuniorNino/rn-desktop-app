import {useCallback, useState} from 'react';

export function useQuery<TData = unknown>(
  props: IQueryHookProps<TData>,
): IQueryHookReturn<TData> {
  const [data, setData] = useState<TData | undefined>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      const handlerResponse = await props.handler();
      setData(handlerResponse);
    } finally {
      setLoading(false);
    }
  }, [props]);

  return {
    data,
    isLoading,

    fetch,
  };
}

type IQueryHandlerCallback<TData> = () => Promise<TData>;

export interface IQueryHookProps<TData> {
  handler: IQueryHandlerCallback<TData>;
}

export interface IQueryHookReturn<TData> {
  data: TData | undefined;
  isLoading: boolean;

  fetch: () => Promise<void>;
}
