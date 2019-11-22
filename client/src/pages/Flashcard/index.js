import React from 'react';
import { Carousel, Icon } from 'antd';

import './style.scss';

const prefixCls = 'flash-card';

const renderNewWords = newWords => {
  let result = null;

  if (newWords && newWords.length > 0) {
    result = newWords.map(({ newWord, meaning, image, example }, index) => (
      <div key={index}>
        <img src={image} alt={newWord} />
      </div>
    ));
  }

  return result;
};

const Flashcard = ({ match, location }) => {
  console.log('Flashcard match:', match);
  console.log('Flashcard location:', location);

  const newWords = [
    {
      newWord: 'Apple',
      meaning: 'Quả táo',
      image: 'https://img.lovepik.com/element/40020/7618.png_860.png',
      example: 'This is an apple',
    },
    {
      newWord: 'Apple',
      meaning: 'Quả táo',
      image:
        'https://image.thanhnien.vn/660/uploaded/minhnguyet/2019_11_09/bonbon_aqgt.jpg',
      example: 'This is an apple',
    },
    {
      newWord: 'Apple',
      meaning: 'Quả táo',
      image:
        'https://sohanews.sohacdn.com/thumb_w/660/2016/vu-sua-nguon-cung-cap-nhieu-dinh-duong-thai-ky-1422-1477710235569-71-52-311-438-crop-1477710284092.png',
      example: 'This is an apple',
    },
  ];

  const onChange = current => {
    console.log(current.pre());
  };

  const handlePreviousSlide = () => {};
  const handleNextSlide = () => {};

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
        <Carousel afterChange={onChange}>{renderNewWords(newWords)}</Carousel>
      </div>
    </div>
  );
};

export default Flashcard;
