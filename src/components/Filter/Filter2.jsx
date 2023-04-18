// Import CSS.
import "./Filter.css";
// Import files.
import { links } from "../../assets/images-links";

// Import hooks.
import { useEffect, useRef, useState } from "react";
import { InView } from "react-intersection-observer";

function Filter({ selectedFilter, setSelectedFilter, handleFilterRef }) {
  const [sticky, setSticky] = useState(false)
  const filterDiv = useRef(null)

  useEffect(() => {
    if (sticky) {
      filterDiv.current.classList.add("is-stuck")
      console.log(sticky);
      filterDiv.current.classList.add("is-stuck")
    }
    else {
      console.log(sticky);
      filterDiv.current.classList.remove("is-stuck")
    }
  }, [sticky])

  const handleInViewChange = (inView) => {
    if (!inView) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  };

  return (
    <InView onChange={handleInViewChange} rootMargin="-120px 0px 0px 0px">
      <div ref={filterDiv} className={`filter-div ${sticky ? 'stuck' : 'nostuck'}`}>
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
    </InView>
  );
}

export default Filter;