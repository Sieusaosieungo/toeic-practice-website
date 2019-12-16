import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import config from '../../utils/config';

import './style.scss';

const prefixCls = 'card';

const Card = ({ newWord, meaning, image, example }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => setIsFlipped(!isFlipped);

  return (
    <div className={`${prefixCls}`}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div onClick={handleClick} className={`${prefixCls}-front`}>
          <img src={`${config.API_URL}/${image}`} alt={newWord} />
        </div>

        <div onClick={handleClick} className={`${prefixCls}-back`}>
          <p style={{ color: '' }} className={`${prefixCls}-new-word`}>
            Từ mới:&nbsp;{newWord}
          </p>
          <p style={{ color: '' }} className={`${prefixCls}-meaning`}>
            Ý nghĩa:&nbsp;{meaning}
          </p>
          <p className={`${prefixCls}-example`}>Ví dụ:&nbsp;{example}</p>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
