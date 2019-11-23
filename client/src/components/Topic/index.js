import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

import changeToSlug from '../../utils/changeToSlug';

const prefixCls = 'topic';

const Topic = ({ image, title }) => {
  return (
    <Link
      className={`${prefixCls}`}
      to={{
        pathname: `/new-word/${changeToSlug(title)}`,
        state: {
          topic: title,
        },
      }}
    >
      <div className={`${prefixCls}-wrap-image`}>
        <img src={image} alt={title} />
      </div>
      <h4>{title}</h4>
    </Link>
  );
};

export default Topic;
