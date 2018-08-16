import React from 'react';
import './SwfGrid.css';

const SwfGrid = ({ images = [] }) => {
  return (
    <div>
      <h1>Swiffy images: {images.length}</h1>
      {images.map(({ entry_id, file_name }, idx) => {
        return (
          <ul key={idx + entry_id + file_name}>
            <li>{file_name}</li>
            <li>
              <a
                href={`http://wm5.knowble.nl/rest/imagesrv/${entry_id}/${file_name}`}
              >{`http://wm5.knowble.nl/rest/imagesrv/${entry_id}/${file_name}`}</a>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default SwfGrid;
