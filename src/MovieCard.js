import Rate from  "./Rating";
import React from 'react';



const MovieCard = ({
 movie: { title, year, rating, image, type, description },
}) => {
  return (
    <div className="card">
      <div className="card_left">
        <img src={image} alt="poster" />
      </div>
      <div className="card_right">
        <h1>{title}</h1>
        <div className="card_right__details">
          <ul>
            <li>{year}</li>
            
            <li>{type}</li>
          </ul>
        </div>
        <div className="card_right__rating">
          <Rate rating={rating} />
        </div>
        <div className="card_right__review">
          <p>{description}</p>
          <a href="https://www.youtube.com/watch?v=T2PvuFuCUO4">Read More</a>
        </div>
        <div className="card_right__button">
          <a href="https://www.youtube.com/watch?v=T2PvuFuCUO4">WATCH TRAILER</a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
 