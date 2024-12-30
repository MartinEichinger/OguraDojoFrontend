import { createDirectus, graphql } from '@directus/sdk';

export const sendData = (query: string) => {
  console.log('sendData: ', query);
  const client = createDirectus('https://ogura-dojo-cms.directus.app/').with(graphql());

  const sendResult = async () => {
    const result = await client.query(query);
    console.log(result);
  };

  sendResult();
};
