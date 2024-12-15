import React from "react";
import "./Work.css";

import "./image-gallery.css";

import Title from "../ui/Title/title";

import g1 from "../Photo/Gallary/IMG_0419.jpeg";
import g2 from "../Photo/Gallary/IMG_0520.jpeg";
import g3 from "../Photo/Gallary/IMG_0932.jpeg";
import g4 from "../Photo/Gallary/IMG_1008.jpeg";
import g5 from "../Photo/Gallary/IMG_1011.jpeg";
import g6 from "../Photo/Gallary/IMG_0194.jpg";
import g7 from "../Photo/Gallary/IMG_6201.jpg";
import g8 from "../Photo/Gallary/IMG_1011.jpg";
import g9 from "../Photo/Gallary/IMG_1116.jpg";
import g10 from "../Photo/Gallary/IMG_4802.jpg";

import w1 from "../Photo/Gallary/IMG_6201.jpg";
import w2 from "../Photo/Gallary/IMG_6357.jpg";
import w3 from "../Photo/Gallary/IMG_6472.jpg";
import w4 from "../Photo/Gallary/IMG_6850.jpg";
import w5 from "../Photo/Gallary/IMG_7123.jpg";
import w6 from "../Photo/Gallary/IMG_7361.jpg";
import w7 from "../Photo/Gallary/IMG_7599.jpg";
import w8 from "../Photo/Gallary/IMG_7686.jpg";
import w9 from "../Photo/Gallary/IMG_7720.jpg";
import w10 from "../Photo/Gallary/IMG_7813.jpg";

import e2 from "../Photo/Gallary/IMG_8285.jpg";
import e3 from "../Photo/Gallary/IMG_8327.jpg";
import e4 from "../Photo/Gallary/IMG_8656.jpg";
import e5 from "../Photo/Gallary/IMG_8753.jpg";
import e6 from "../Photo/Gallary/IMG_8791.jpg";
import e7 from "../Photo/Gallary/IMG_8851.jpg";
import e8 from "../Photo/Gallary/IMG_8896.jpg";

import hit1 from "../Photo/Gallary/Hit1.jpeg";
import hit2 from "../Photo/Gallary/Hit2.jpeg";
import hit3 from "../Photo/Gallary/Hit3.jpeg";
import hit4 from "../Photo/Gallary/Hit4.jpeg";
import hit5 from "../Photo/Gallary/Hit5.jpeg";


import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";


function Work() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const handleDragStart = (e) => e.preventDefault();

  const items_q = [
    <div className="items">
      <img
        src={g1}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={g2}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={g3}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={g4}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={g5}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,

    <div className="items">
      <img
        src={g6}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={g7}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,

    <div className="items">
      <img
        src={g8}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={g9}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={g10}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
  ];

  const items_w = [
    <div className="items">
      <img
        src={w1}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={w2}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={w3}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={w4}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={w5}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={w6}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={w7}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={w8}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={w9}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={w10}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
  ];

  const items_e = [
    <div className="items">
      <img
        src={e2}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={e3}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={e4}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={e5}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={e6}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={e7}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={e8}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
  ];

  const items_hit = [
    <div className="items">
      <img
        src={hit1}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={hit2}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={hit3}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={hit4}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
    <div className="items">
      <img
        src={hit5}
        onDragStart={handleDragStart}
        role="presentation"
        alt="cake"
        className="items"
      />
    </div>,
  ];

  const photos = [
    { src: hit1, width: 15, height: 17, },
    { src: hit2, width: 150, height: 175 },
    { src: hit3, width: 15, height: 17 },
    { src: hit4, width: 150, height: 175 },
    { src: hit5, width: 15, height: 17 },
    { src: e2, width: 15, height: 17, },
    { src: e3, width: 150, height: 175 },
    { src: e4, width: 15, height: 17 },
    { src: e5, width: 150, height: 175 },
    { src: e6, width: 15, height: 17 },
    { src: e7, width: 150, height: 175 },
    { src: e8, width: 15, height: 17 },
    { src: w1, width: 150, height: 175 },
    { src: w2, width: 15, height: 17 },
    { src: w3, width: 150, height: 175 },
    { src: w4, width: 15, height: 17 },
    { src: w5, width: 150, height: 175 },
    { src: w6, width: 15, height: 17 },
    { src: w7, width: 150, height: 175 },
    { src: w8, width: 15, height: 17 },
    { src: w9, width: 150, height: 175 },
    { src: w10, width: 15, height: 17 },
    { src: g1, width: 150, height: 175 },
    { src: g2, width: 15, height: 17 },
    { src: g3, width: 15, height: 17 },
    { src: g4, width: 150, height: 175 },
    { src: g5, width: 15, height: 17 },
    { src: g6, width: 150, height: 175 },
    { src: g7, width: 15, height: 17 },
    { src: g8, width: 150, height: 175 },
    { src: g9, width: 150, height: 175 },
    { src: g10, width: 15, height: 17 }, 

  ];

  return (
    <div className="work" id="Work">
      <Title title="Мои работы" translate="My works" />
      <div className="gallery">
        <div className="gallery-center">
        <RowsPhotoAlbum photos={photos} />
        </div>
      </div>
    </div>
  );
}

export default Work;
