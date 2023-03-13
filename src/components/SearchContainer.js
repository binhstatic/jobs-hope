import React from 'react';
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';
import Wrapper from '../assets/wrappers/SearchContainer';

const SearchContainer = () => {
  return (
    <Wrapper>
      <form className='form'>
        <h4>search form</h4>
        <div className='form-center'>
          {/* search position */}
          <FormRow type='text' name='search' />
          {/* search by status */}
          <FormRowSelect labelText='status' name='searchStatus' />
          {/* search by type*/}
          <FormRowSelect labelText='type' name='searchType' />
          {/* sort */}
          <FormRowSelect name='sort' />
          <button className='btn btn-block btn-danger'>clear filters</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
