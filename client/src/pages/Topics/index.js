import React from 'react';

import './style.scss';

import Topic from '../../components/Topic';

const prefixCls = 'topics';

const renderTopic = lstTopics => {
  let result = null;

  if (lstTopics && lstTopics.length > 0) {
    result = lstTopics.map((topic, index) => <Topic key={index} {...topic} />);
  }

  return result;
};

const Topics = ({}) => {
  const lstTopics = [
    {
      title: 'Accounting',
      image:
        'https://tienganhmoingay.com/static/Vocabulary/images/topic_images/accounting.png',
    },
    {
      title: 'Airlines',
      image:
        'https://tienganhmoingay.com/static/Vocabulary/images/topic_images/airlines.png',
    },
    {
      title: 'Applying & Interviewing',
      image:
        'https://tienganhmoingay.com/static/Vocabulary/images/topic_images/applying.png ',
    },
    {
      title: 'Banking',
      image:
        'https://tienganhmoingay.com/static/Vocabulary/images/topic_images/banking.png',
    },
    {
      title: 'Board Meetings & Committees',
      image:
        'https://tienganhmoingay.com/static/Vocabulary/images/topic_images/board_meeting.png',
    },
    {
      title: 'Car Rentals',
      image:
        'https://tienganhmoingay.com/static/Vocabulary/images/topic_images/car_rentals.png',
    },
    {
      title: 'Computers',
      image:
        'https://tienganhmoingay.com/static/Vocabulary/images/topic_images/computers.png',
    },
    {
      title: 'Contracts',
      image:
        'https://tienganhmoingay.com/static/Vocabulary/images/topic_images/contracts.png',
    },
    {
      title: 'Cooking As A Career',
      image:
        'https://tienganhmoingay.com/static/Vocabulary/images/topic_images/cooking.png',
    },
    {
      title: 'Correspondence',
      image:
        'https://tienganhmoingay.com/static/Vocabulary/images/topic_images/correspondence.png',
    },
    {
      title: 'Dentists Office',
      image:
        'https://tienganhmoingay.com/static/Vocabulary/images/topic_images/dentist.png',
    },
    {
      title: 'Doctors Office',
      image:
        'https://tienganhmoingay.com/static/Vocabulary/images/topic_images/doctor.png',
    },
    {
      title: 'Eating Out',
      image:
        'https://tienganhmoingay.com/static/Vocabulary/images/topic_images/eating_out.png',
    },
    {
      title: 'Events',
      image:
        'https://tienganhmoingay.com/static/Vocabulary/images/topic_images/events.png',
    },
    {
      title: 'Financial Statements',
      image:
        'https://tienganhmoingay.com/static/Vocabulary/images/topic_images/financial_statements.png',
    },
  ];

  return (
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-content`}>
        <h1>Hôm nay bạn muốn học chủ đề nào?</h1>
        <div className={`${prefixCls}-wrapped-list`}>{renderTopic(lstTopics)}</div>
      </div>
    </div>
  );
};

export default Topics;
