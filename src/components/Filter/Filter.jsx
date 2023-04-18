// Import CSS.
import "./Filter.css";
// Import files.
import { links } from "../../assets/images-links";

// Import hooks.
import { useRef } from "react";

function Filter({ selectedFilter, setSelectedFilter, handleFilterRef }) {
  const filterDiv = useRef(null)

  return (
    <div ref={filterDiv} className="filter-div">
      {links.map((item, i) => (
        <div
          key={i}
          className={`links-box ${i === selectedFilter && "selected-box"}`}
          onClick={() => {
            console.log("selecting key", i);
            setSelectedFilter(i);
          }}
        >
          <img src={item.imgSrc} className="links-img" alt="" />
          <p
            className={`links-label ${i === selectedFilter && "selected-label"}`}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Filter;