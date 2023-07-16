import { View, Text, Image, StyleSheet } from "react-native";
import TextStyled, { TextColors, TextSizes } from "./common/TextStyled";

const RestaurantCard = ({ src, title, starsQuantity, reviewsQuantity }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: src }} />
      <TextStyled fontBold>{title}</TextStyled>
      <View style={styles.ratings}>
        <TextStyled
          color={TextColors.SECONDARY}
          size={TextSizes.SMALL}
        >{`${starsQuantity} Stars`}</TextStyled>
        <TextStyled
          color={TextColors.SECONDARY}
          size={TextSizes.SMALL}
        >{`${reviewsQuantity} Reviews`}</TextStyled>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { rowGap: 4, marginLeft: 8, marginHorizontal: 8 },
  image: {
    width: 250,
    height: 120,
    resizeMode: "stretch",
  },
  ratings: {
    flexDirection: "row",
    columnGap: 8,
  },
});

export default RestaurantCard;
