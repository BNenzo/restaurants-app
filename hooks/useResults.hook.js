import { useEffect, useState } from "react";
import yelpApi from "../api/yelp.api";

const useResults = () => {
  const [results, setResults] = useState([]);

  const onSearchAction = async (searchText = "") => {
    const { data } = await yelpApi.get("/search", {
      params: {
        limit: 50,
        term: searchText,
        location: "San jose",
      },
    });
    setResults([...data.businesses]);
  };

  useEffect(() => {
    onSearchAction("burger");
  }, []);

  return [results, onSearchAction];
};

export default useResults;
