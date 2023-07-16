import { useEffect, useState } from "react";
import yelpApi from "../api/yelp.api";

const useResults = () => {
  const [results, setResults] = useState([]);

  const onSearchAction = async (defaultSearch = "") => {
    const { data } = await yelpApi.get("/search", {
      params: {
        limit: 10,
        tern: defaultSearch || searchText,
        location: "San jose",
      },
    });
    setResults([...data.businesses]);
  };

  useEffect(() => {
    onSearchAction("pizza");
  }, []);

  return [results, onSearchAction];
};

export default useResults;
