import { View, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ searchValue, onSerchValueChange, onSearchEndEditing }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={24} color="black" />
      <TextInput
        value={searchValue}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        placeholder="Search"
        onChangeText={(newValue) => onSerchValueChange(newValue)}
        onEndEditing={onSearchEndEditing}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "#F0EEEE",
    height: 48,
    borderRadius: 8,
    columnGap: 16,
    marginBottom: 10,
  },
  input: {
    color: "black",
  },
});
