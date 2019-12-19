import React, { useRef, useState, useEffect } from 'react';
import { Carousel, Icon } from 'antd';
import axios from 'axios';

import './style.scss';

import Card from '../../components/Card';
import config from '../../utils/config';

const prefixCls = 'flash-card';

const renderNewWords = newWords => {
  let result = null;

  if (newWords && newWords.length > 0) {
    result = newWords.map((newWord, index) => (
      <Card key={index} {...newWord} />
    ));
  }

  return result;
};

const Flashcard = ({
  match,
  location: {
    state: { topicId },
  },
}) => {
  const [newWords, setNewWords] = useState([]);

  const carouselRef = useRef(null);

  const handlePreviousSlide = () => carouselRef.current.slick.slickPrev();
  const handleNextSlide = () => carouselRef.current.slick.slickNext();

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${config.API_URL}/api/new-words`,
      params: {
        idTopic: topicId,
      },
    })
      .then(res => {
        setNewWords(res.data.results.newWords);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-content`}>
        <Icon
          type="left"
          className={`${prefixCls}-pre`}
          onClick={handlePreviousSlide}
        />
        <Icon
          type="right"
          className={`${prefixCls}-next`}
          onClick={handleNextSlide}
        />
        <Carousel ref={carouselRef}>{renderNewWords(newWords)}</Carousel>
      </div>
    </div>
  );
};

export default Flashcard;
