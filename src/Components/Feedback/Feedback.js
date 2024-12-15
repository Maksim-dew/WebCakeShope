import React from "react";
import "./Feedback.css";

import Title from "../ui/Title/title";
// import BlockFeedback from "../ui/BlockFeedback/BlockFeedback";
// import { Carousel } from "../ui/Carousel/Carousel";

import e1 from "../Photo/Yorumlar/IMG_1214.PNG"
import e2 from "../Photo/Yorumlar/IMG_1215.PNG"
import e4 from "../Photo/Yorumlar/IMG_1217.PNG"
import e6 from "../Photo/Yorumlar/IMG_1219.PNG"
import e7 from "../Photo/Yorumlar/IMG_1220.PNG"
import e14 from "../Photo/Yorumlar/IMG_1227.PNG"
import e15 from "../Photo/Yorumlar/IMG_1228.PNG"
import e16 from "../Photo/Yorumlar/IMG_1229.PNG"
import e17 from "../Photo/Yorumlar/IMG_1230.PNG"
import e18 from "../Photo/Yorumlar/IMG_1231.PNG"


import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

function Feedback() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const yorumlar = [
    <div className="yorumlar">
      <img
        src={e1}
        onDragStart={handleDragStart}
        role="presentation"
        alt="yorumlar"
        className="yorumlar"
      />
    </div>,
    <div className="yorumlar">
      <img
        src={e2}
        onDragStart={handleDragStart}
        role="presentation"
        alt="yorumlar"
        className="yorumlar"
      />
    </div>,
    <div className="yorumlar">
      <img
        src={e4}
        onDragStart={handleDragStart}
        role="presentation"
        alt="yorumlar"
        className="yorumlar"
      />
    </div>,
    <div className="yorumlar">
      <img
        src={e6}
        onDragStart={handleDragStart}
        role="presentation"
        alt="yorumlar"
        className="yorumlar"
      />
    </div>,
    <div className="yorumlar">
      <img
        src={e7}
        onDragStart={handleDragStart}
        role="presentation"
        alt="yorumlar"
        className="yorumlar"
      />
    </div>,
<div className="yorumlar">
  <img
    src={e14}
    onDragStart={handleDragStart}
    role="presentation"
    alt="yorumlar"
    className="yorumlar"
  />
</div>,
<div className="yorumlar">
  <img
    src={e15}
    onDragStart={handleDragStart}
    role="presentation"
    alt="yorumlar"
    className="yorumlar"
  />
</div>,
<div className="yorumlar">
  <img
    src={e16}
    onDragStart={handleDragStart}
    role="presentation"
    alt="yorumlar"
    className="yorumlar"
  />
</div>,
<div className="yorumlar">
  <img
    src={e17}
    onDragStart={handleDragStart}
    role="presentation"
    alt="yorumlar"
    className="yorumlar"
  />
</div>,
<div className="yorumlar">
  <img
    src={e18}
    onDragStart={handleDragStart}
    role="presentation"
    alt="yorumlar"
    className="yorumlar"
  />
</div>,
  ];
  return (
    <div className="feedback" id="Feedback">
      <Title title="Отзывы" translate="Feedback" />
      <div className="f-content">
      
      <AliceCarousel mouseTracking items={yorumlar} responsive={responsive}  disableButtonsControls={true}/>
            </div>
    </div>
  );
}

export default Feedback;
