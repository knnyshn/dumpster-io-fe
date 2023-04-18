// Import CSS.
import './ShowpageCard.css'

// Import
import GoogleMapReact from 'google-map-react';

export default function ShowpageCard({ props }) {
  props ? console.log(props) : console.log("none");

  return (
    <>
      <div className="showpage-container">
        <div className="item-info">
          <p>{props?.title ? props.title : ""}</p>
          <img alt="the-item" src={props?.img ? props.img : "https://i.imgur.com/uueDD78.jpg"} />
          <p>{props?.description ? props.description : ""}</p>
          <p>{props?.dateUploaded ? props.dateUploaded : ""}</p>
        </div>
        <div className="item-location-map">
          {props?.location ?
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyDKJnzUeLMF750WbkItYzJRds5FSIxbOgM" }}
              defaultCenter={[props.location.latitude, props.location.longitude]}
              defaultZoom={15}
            /> :
            <p> heollo</p>
          }

        </div>
      </div>
    </>
  )
}