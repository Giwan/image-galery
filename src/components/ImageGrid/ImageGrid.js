import React from "react";
import "./ImageGrid.css";

const generateData = () => {
  const data = new Array(100);
  const result = [];
  for (let i = 0; i < data.length; i++) {
    result[i] = {
      id: Math.floor(Math.random() * Math.floor(999)),
      name: "https://via.placeholder.com/150x150",
      type: "image/png"
    };
  }

  return result;
};

const images = generateData();

const ImageGrid = () => (
  <div className="container">
    <div className="image-grid__container">
      {images.map(({ id, name, type }, idx) => (
        <div className="image-grid-item" key={idx + name + id + type}>
          <img src={name} />
        </div>
      ))}
    </div>
  </div>
);

export default ImageGrid;
