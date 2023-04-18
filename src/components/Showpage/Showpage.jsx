import Header from '../Header/Header'
import Filter from '../Filter/Filter'
import Footer from '../Footer/Footer'
import ShowpageCard from '../Cards/ShowpageCard';

import { useEffect, useState } from "react";
import { getItem } from '../../api/items';
import { useParams } from 'react-router-dom';

export default function Showpage() {
  const [searchResults, setSearchResults] = useState(null)
  const params = useParams()

  useEffect(() => {
    const workAround = async () => {
      const results = await getItem(params.id)
      setSearchResults(results)
    };
    workAround();
  }, [])


  const [auth, setAuth] = useState()

  useEffect(() => {
    localStorage.getItem("TOKEN") ? setAuth(true) : setAuth(false)
  }, [])

  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <>
      <Header auth={auth} />
      <ShowpageCard props={searchResults} />
      <Footer />
    </>
  )
}