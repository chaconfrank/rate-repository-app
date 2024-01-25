import React from "react";
import { FlatList, Text, View } from "react-native";
import repositories from "../data/repositories";
import ReposityItem from "./RepositoryItem";

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (<ReposityItem {...repo} />)}
    />
  );
};

export default RepositoryList;
