import React from 'react';
import LoginInput from 'components/LoginInput';
import PasswordInput from 'components/PasswordInput';

import './index.scss';

const Content = () => (
  <div className='Content'>
    <div className='Content__inner'>
      <div className='Content__input'>
        <LoginInput />
      </div>
      <div className='Content__password'>
        <PasswordInput />
      </div>
    </div>
  </div>
);

export default Content;
