import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

import changeToSlug from '../../utils/changeToSlug';
import config from '../../utils/config';

const prefixCls = 'topic';

const Topic = ({ _id, image, title }) => {
  return (
    <Link
      className={`${prefixCls}`}
      to={{
        pathname: `/new-word/${changeToSlug(title)}`,
        state: {
          topicId: _id,
        },
      }}
    >
      <div className={`${prefixCls}-wrap-image`}>
        <img src={`${config.API_URL}${image}`} alt={title} />
      </div>
      <h4>{title}</h4>
    </Link>
  );
};

export default Topic;
