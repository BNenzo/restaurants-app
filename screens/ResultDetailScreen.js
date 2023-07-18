import { useEffect, useState } from "react";
import { FlatList, Image, View, StyleSheet } from "react-native";
import yelpApi from "../api/yelp.api";

const ResultDetailScreen = ({ route }) => {
  const id = route.params.id;
  const [result, setResult] = useState();

  useEffect(() => {
    const fetchResultDetail = async () => {
      const { data } = await yelpApi.get(`/${id}`);
      setResult(data);
    };
    fetchResultDetail();
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.images} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  images: {
    width: 300,
    height: 250,
    marginTop: 8,
  },
});

export default ResultDetailScreen;
