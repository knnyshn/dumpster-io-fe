import "./Card.css";
import Card from './SingleCard'
import { getItems } from "../../api/items.js";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

function Cards() {
  const [items, setItems] = useState()
  // const [ info, setInfo ] = useState()

  useEffect(() => {
    const workAround = async () => {
      const items = await getItems()
      setItems(items);
    };
    workAround();
  }, [])

  function handleClick() {
    // setInfo(items);
    console.log('info');
  }

  return (
    <div className="cards-flex">
      {items ?
        items.map(item => (
          <div onClick={handleClick} key={item._id}>
            <Card
              id={item._id}
              title={item.title}
              description={item.description}
              img={item.img}
              location={item.location}
              date={item.dateUploaded}
            />
          </div>
        ))
        : null
      }
    </div >
  );
}

export default Cards;