import React from 'react';
import styled from 'styled-components';
import FormRow from '../../components/FormRow';
import FormRowSelect from '../../components/FormRowSelect';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddJob = () => {
  return (
    <Wrapper>
      <form className='form'>
        <h3>add job</h3>
        <div className='form-center'>
          {/* position */}
          <FormRow type='text' name='position' />
          {/* company */}
          <FormRow type='text' name='company' />
          {/* jobLocation */}
          <FormRow type='text' name='jobLocation' labelText='job location' />
          {/* status */}
          <FormRowSelect name='status' />
          {/* job type*/}
          <FormRowSelect name='jobType' labelText='job type' />
          <div className='btn-container'>
            <button type='button' className='btn btn-block clear-btn'>
              clear
            </button>
            <button type='submit' className='btn btn-block submit-btn'>
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
