export async function getItemsHandler(): Promise<IItem[]> {
  return [
    {
      key: '1',
      title: 'Title 1',
    },
    {
      key: '2',
      title: 'Title 2',
    },
  ];
}

export type IItem = {key: string; title?: string};
