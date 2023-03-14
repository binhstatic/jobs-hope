import React, { useEffect, useState } from 'react';
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilters, handleChange } from '../features/allJobs/allJobsSlice';
import useDebounce from '../hooks/useDebounce';

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('');
  const debouncedSearch = useDebounce(localSearch, 1000);

  const { isLoading, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const handleSearchPosition = (e) => {
    setLocalSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(handleChange({ name: 'search', value: localSearch }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  const handleClear = (e) => {
    e.preventDefault();
    setLocalSearch('');
    dispatch(clearFilters());
  };

  return (
    <Wrapper>
      <form className='form'>
        <h4>search form</h4>
        <div className='form-center'>
          {/* search position */}
          <FormRow
            type='text'
            name='search'
            value={localSearch}
            handleChange={handleSearchPosition}
          />
          {/* search by status */}
          <FormRowSelect
            labelText='status'
            name='searchStatus'
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', 'interview', 'declined', 'pending']}
          />
          {/* search by type*/}
          <FormRowSelect
            labelText='type'
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={['all', 'full-time', 'part-time', 'remote', 'internship']}
          />
          {/* sort */}
          <FormRowSelect
            name='sort'
            value={sort}
            list={sortOptions}
            handleChange={handleSearch}
          />
          <button
            className='btn btn-block btn-danger'
            onSubmit={handleClear}
            disabled={isLoading}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
