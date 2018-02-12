import React from 'react';
import LoginInput from 'components/LoginInput';
import PasswordInput from 'components/PasswordInput';
import LoginButton from 'components/LoginButton';

import './index.scss';

const Content = () => (
  <div className='Content'>
    <div className='Content__inner'>
      <h1 className='Content__title'>Login to Your Account</h1>
      <div className='Content__input'>
        <LoginInput />
      </div>
      <div className='Content__password'>
        <PasswordInput />
      </div>
      <button className='Content__button'>
        <LoginButton />
      </button>
    </div>
  </div>
);

export default Content;
