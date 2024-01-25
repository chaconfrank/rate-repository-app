import React from "react";
import { Image, View, StyleSheet } from "react-native";
import StyleText from "./StyleText";
import RepositoryStats from "./RepositoryStarts";
import theme from "../theme";

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  language,
}) => (
  <View style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={style.image} source={{ uri: ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyleText fontWeight="bold" fontSize="subHeading">
        Full Name: {fullName}
      </StyleText>
      <StyleText color='secondary'>{description}</StyleText>
      <StyleText style={style.language}>{language}</StyleText>
    </View>
  </View>
);

const ReposityItem = (props) => {
  return (
    <View key={props.id} style={style.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    borderRadius: 4,
    overflow: "hidden",
    marginVertical: 4,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
});
export default ReposityItem;
