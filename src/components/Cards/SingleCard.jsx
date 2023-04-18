import "./Card.css";
import { Link } from "react-router-dom";

function Card({ id, title, description, img, location, date }) {

  const day = date?.split("-")[1]
  const month = date?.split("-")[0]
  const year = date?.split("-")[2]
  const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  function handleFav(event) {
    event.currentTarget.classList.toggle('isFav')
  }

  return (
    <div className="card-box" key={id}>
      <Link to={`/item/${id}`}>
        <img src={img ? img : "https://i.imgur.com/uueDD78.jpg"} className="card-img" alt="" />
      </Link>
      <div className="card-info-flex">
        <div className="top">
          <span className="card-title">{title.length > 30 ? title.substring(0, 30) + "..." : title}</span>
          <span className="star" onClick={handleFav} id={id} >
            {/* <svg className="star-svg" viewBox="0 0 250 250">
              <desc>Yellow star with intersecting paths to demonstrate nonzero value.</desc>
              <polygon className="starClick" onClick={handleFav} id={id} points="47.773,241.534 123.868,8.466 200.427,241.534 7.784,98.208 242.216,98.208 " />
            </svg> */}&hearts;
          </span>
        </div>

        <p className="desc">
          <span className="date-posted">Posted: {monthArr[month]} {day}, {year}</span>
        </p>
      </div >
    </div >
  );
}

export default Card;
