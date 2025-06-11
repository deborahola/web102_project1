import '/src/Card.css';

const Card = ({ title, genre, description, trailer, image }) => {

  return (

    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p className="genre">{genre}</p>
        <p className="desc">{description}</p>
        <a href={trailer} target="_blank">
          <button>View Trailer</button>
        </a>
      </div>
    </div>

  );

}

export default Card;
