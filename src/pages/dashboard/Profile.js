import React from 'react';
import FormRow from '../../components/FormRow';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const Profile = () => {
  return (
    <Wrapper>
      <form className='form'>
        <h3>profile</h3>
        <div className='form-center'>
          <FormRow type='text' name='name' />
          <FormRow type='text' labelText='last name' name='lastName' />
          <FormRow type='email' name='email' />
          <FormRow type='text' name='location' />
          <button type='submit' className='btn btn-block'>
            save changes
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
