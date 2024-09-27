import React from 'react';
import { Parallax } from 'react-parallax';
import './Gallery.css';

const images = [
  'download (1).jpeg', 'download (2).jpeg', 'download (3).jpeg', 'download (4).jpeg',
  'download (4).jpeg', 'download (1).jpeg', 'download (2).jpeg', 'download (3).jpeg',
  'download (4).jpeg', 'download (4).jpeg', 'download (1).jpeg', 'download (2).jpeg',
  'download (1).jpeg', 'download (2).jpeg', 'download (3).jpeg', 'download (4).jpeg',
  'download (4).jpeg', 'download (1).jpeg', 'download (2).jpeg', 'download (3).jpeg',
  'download (4).jpeg', 'download (4).jpeg', 'download (1).jpeg', 'download (2).jpeg',
  'download (1).jpeg', 'download (2).jpeg', 'download (3).jpeg', 'download (4).jpeg',
  'download (4).jpeg', 'download (1).jpeg', 'download (2).jpeg', 'download (3).jpeg',
  'download (4).jpeg', 'download (4).jpeg', 'download (1).jpeg', 'download (2).jpeg',
  'download (1).jpeg', 'download (2).jpeg', 'download (3).jpeg', 'download (4).jpeg',
  'download (4).jpeg', 'download (1).jpeg', 'download (2).jpeg', 'download (3).jpeg',
  'download (4).jpeg', 'download (4).jpeg', 'download (1).jpeg', 'download (2).jpeg',
  'download (1).jpeg', 'download (2).jpeg', 'download (3).jpeg', 'download (4).jpeg',
  'download (4).jpeg', 'download (1).jpeg', 'download (2).jpeg', 'download (3).jpeg',
  'download (4).jpeg', 'download (4).jpeg', 'download (1).jpeg', 'download (2).jpeg',
  'download (1).jpeg', 'download (2).jpeg', 'download (3).jpeg', 'download (4).jpeg',
  'download (4).jpeg', 'download (1).jpeg', 'download (2).jpeg', 'download (3).jpeg',
  'download (4).jpeg', 'download (4).jpeg', 'download (1).jpeg', 'download (2).jpeg',
];

const Gallery = () => {
  return (
    <div className="gallery-section">
      <div className="gallery-heading-container">
        <h1 className="gallery-heading">GALLERY</h1>
        <p className="gallery-subheading">For the Memories we make along the way</p>
      </div>

      <div className="grid-container">
        {images.map((image, index) => (
          <div key={index} className="grid-item">
            <Parallax
              bgImage={image}  // Background image for parallax
              strength={50}  // Parallax strength
              bgImageStyle={{
                backgroundSize: 'contain',  
                backgroundPosition: 'center',  
              }}
              
            >
              <div style={{ height: '250px' }} /> {}
            </Parallax>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
