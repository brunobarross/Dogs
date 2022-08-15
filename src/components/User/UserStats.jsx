import React from 'react';
import { GET_STATS } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Head from '../Helper/Head';
import Loading from '../Helper/Loading';
import UserStatsGraphs from './UserStatsGraphs';

const UserStats = () => {
  const { data, error, loading, request } = useFetch();
  React.useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div>
        <Head title="Estatisticas" />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};

export default UserStats;
