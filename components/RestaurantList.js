import { ScrollView, StyleSheet } from "react-native";
import RestaurantSection from "./RestaurantSection";

const RestaurantList = ({ results }) => {
  const filterResults = (priceFilter) => {
    return results?.filter((result) => {
      return result.price == priceFilter;
    });
  };

  return (
    <ScrollView style={styles.container}>
      <RestaurantSection
        title={"Cost Effective"}
        results={filterResults("$")}
      />
      <RestaurantSection title={"Bit Pricier"} results={filterResults("$$")} />
      <RestaurantSection title={"Big Spender"} results={filterResults("$$$")} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 16,
  },
});

export default RestaurantList;
