import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />
        </a>
      </div>
      <style>
        {`
          .portfolio-item {
            width: 100%; /* Make the item full width */
            max-width: 300px; /* Set a maximum width for uniformity */
            margin: 15px; /* Optional: adds spacing between items */
          }
          .portfolio-item img {
            width: 100%; /* Image takes full width of its container */
            height: 200px; /* Set a fixed height for consistency */
            object-fit: cover; /* Ensures the image covers the area without stretching */
            border-radius: 5px; /* Optional: adds rounded corners to images */
          }
        `}
      </style>
    </div>
  );
};
