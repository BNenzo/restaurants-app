import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import RestaurantList from "../components/RestaurantList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults.hook";

const HomeScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [results, onSearchAction] = useResults();

  const updateSearchText = (newValue) => {
    setSearchText(newValue);
  };

  const searchRestaurant = async () => {
    await onSearchAction(searchText);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchValue={searchText}
        onSerchValueChange={updateSearchText}
        onSearchEndEditing={searchRestaurant}
      />
      <RestaurantList results={results} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 16 },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
    backgroundColor: "grey",
    color: "white",
  },
});

export default HomeScreen;
