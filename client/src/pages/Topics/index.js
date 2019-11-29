import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './style.scss';

import Topic from '../../components/Topic';
import config from '../../utils/config';

const prefixCls = 'topics';

const renderTopic = topics => {
  let result = null;

  if (topics && topics.length > 0) {
    result = topics.map((topic, index) => <Topic key={index} {...topic} />);
  }

  return result;
};

const Topics = ({}) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    if (topics.length <= 0) {
      axios({
        method: 'GET',
        url: `${config.API_URL}/api/new-word-topics`,
      })
        .then(res => {
          setTopics(res.data.results.topics);
        })
        .catch(err => console.log(err));
    }
  }, []);

  return (
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-content`}>
        <h1>Hôm nay bạn muốn học chủ đề nào?</h1>
        <div className={`${prefixCls}-wrapped-list`}>{renderTopic(topics)}</div>
      </div>
    </div>
  );
};

export default Topics;
