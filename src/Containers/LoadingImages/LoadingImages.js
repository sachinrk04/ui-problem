import React from 'react';
import { ImagesLoading } from "../../config/loadingImages.js"
import "./LoadingImages.scss";
import ImageContainer from '../../Components/LoadingImages/ImageContainer.js';

export default function LoadingImages() {
  return (
    <div className='loading-images'>
      <div className="container">
        {ImagesLoading.map(res => {
          return (
            <div key={res.id} className="wrapper">
              <ImageContainer
                src={res.urls.regular}
                thumb={res.urls.thumb}
                height={res.height}
                width={res.width}
                alt={res.alt_description}
              />
            </div>
          );
        })}
      </div>
    </div>
  )
}
