// Import hooks.
import { useEffect, useState } from "react";

// Import components.
import Header from '../components/Header/Header'
import Filter from '../components/Filter/Filter'
import Cards from "../components/Cards/Cards"
import Footer from "../components/Footer/Footer"


export default function Home() {

  const [auth, setAuth] = useState()

  useEffect(() => {
    localStorage.getItem("TOKEN") ? setAuth(true) : setAuth(false)
  }, [])

  const [selectedFilter, setSelectedFilter] = useState(0);

  function handleFilterRef(ref) {
    console.log(ref);
  }

  return (
    <>
      <Header auth={auth} />
      <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} handleFilterRef={handleFilterRef} />
      <Cards />
      <Footer />
    </>
  )
}