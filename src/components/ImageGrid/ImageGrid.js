import React from 'react';
import './ImageGrid.css';

const ImageGrid = ({ images = [] }) => (
  <div className="container">
    <h1>images: {images.length}</h1>
    <div className="image-grid__container">
      {images.map(({ entry_id, file_name, content_type }, idx) => (
        <div
          className="image-grid-item"
          key={idx + file_name + entry_id + content_type}
        >
          <a
            href={`https://nl.knowblearticles.com/rest/imagesrv/${entry_id}/${file_name}`}
            target="_blank"
          >
            <img
              src={`https://nl.knowblearticles.com/rest/imagesrv/${entry_id}/${file_name}`}
              alt={file_name}
            />
          </a>
          <span>
            {entry_id}/{file_name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default ImageGrid;
