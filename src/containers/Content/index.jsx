import React from 'react';
import LoginInput from 'components/LoginInput';

import './index.scss';

const Content = () => (
  <div className='Content'>
    <div className='Content__inner'>
      <div className='Content__input'>
        <LoginInput />
      </div>
    </div>
  </div>
);

export default Content;
