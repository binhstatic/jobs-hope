import React from 'react';
import FormRow from '../../components/FormRow';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector((store) => store.user);

  const { email, lastName, location, name } = user;

  return (
    <Wrapper>
      <form className='form'>
        <h3>profile</h3>
        <div className='form-center'>
          <FormRow type='text' name='name' value={name} />
          <FormRow
            type='text'
            labelText='last name'
            name='lastName'
            value={lastName}
          />
          <FormRow type='email' name='email' value={email} />
          <FormRow type='text' name='location' value={location} />
          <button type='submit' className='btn btn-block'>
            save changes
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
