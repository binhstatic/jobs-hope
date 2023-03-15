import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StatsContainer from '../../components/StatsContainer';
import { getStats } from '../../features/allJobs/allJobsSlice';

const Stats = () => {
  const { isLoading, stats } = useSelector((store) => store.allJobs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStats());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stats]);

  return (
    <>
      <StatsContainer />
    </>
  );
};

export default Stats;
