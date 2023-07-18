import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { TextStyled, SmallText, TextColors } from "./common/TextStyled";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({ id, src, title, starsQuantity, reviewsQuantity }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", { id })}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: src }} />
        <TextStyled fontBold>{title}</TextStyled>
        <View style={styles.ratings}>
          <SmallText
            color={TextColors.SECONDARY}
          >{`${starsQuantity} Stars`}</SmallText>
          <SmallText
            color={TextColors.SECONDARY}
          >{`${reviewsQuantity} Reviews`}</SmallText>
        </View>
      </View>
    </TouchableOpacity>
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
