import React from 'react';
import { Carousel } from 'antd';

import './style.scss';

const prefixCls = 'flash-card';

const Flashcard = ({ match, location }) => {
  console.log('Flashcard match:', match);
  console.log('Flashcard location:', location);

  const onChange = (a, b, c) => {
    console.log(a, b, c);
  };

  return (
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-content`}>
        <Carousel afterChange={onChange}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Flashcard;
