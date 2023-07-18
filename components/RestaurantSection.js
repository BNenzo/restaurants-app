import { StyleSheet, FlatList, View } from "react-native";
import RestaurantCard from "./RestaurantCard";
import { H1 } from "./common/TextStyled";

const RestaurantSection = ({ title, results }) => {
  return (
    results.length > 0 && (
      <View style={styles.container}>
        <H1 fontBold className={styles.titleStyled}>
          {title}
        </H1>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={results}
          renderItem={({ item }) => (
            <RestaurantCard
              id={item.id}
              title={item.name}
              starsQuantity={item.rating}
              reviewsQuantity={item.review_count}
              src={item.image_url}
            />
          )}
          keyExtractor={(result) => result.id}
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 8,
  },
  titleStyled: {
    marginLeft: 8,
  },
});

export default RestaurantSection;
