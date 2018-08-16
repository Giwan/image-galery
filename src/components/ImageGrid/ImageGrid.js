import React from "react";
import "./ImageGrid.css";

const ImageGrid = ({ images = [] }) => (
  <div className="container">
    <div className="image-grid__container">
      {images.map(({ entry_id, file_name, content_type }, idx) => (
        <div
          className="image-grid-item"
          key={idx + file_name + entry_id + content_type}
        >
          <img
            src={`https://nl.knowblearticles.com/rest/imagesrv/${entry_id}/${file_name}`}
            alt=""
          />
        </div>
      ))}
    </div>
  </div>
);

export default ImageGrid;
