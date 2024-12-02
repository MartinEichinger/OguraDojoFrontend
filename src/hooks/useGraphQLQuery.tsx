import { useEffect, useState } from 'react';
import { createDirectus, graphql } from '@directus/sdk';

const useGraphQLQuery = (query: string) => {
  const [queryResult, setQueryResult] = useState<any>();

  useEffect(() => {
    const client = createDirectus('https://ogura-dojo-cms.directus.app/').with(graphql());

    const getResults = async () => {
      const result = await client.query(query);
      setQueryResult(result);
    };

    getResults();
  }, [query]);

  return queryResult;
};

export default useGraphQLQuery;
