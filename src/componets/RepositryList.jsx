import React from "react";
import { FlatList, Text, View } from "react-native";
import repositories from "../data/repositories";

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      renderItem={({ item: repo }) => (
        <View key={repo.id}>
          <Text>id: {repo.id}</Text>
          <Text>Full Name: {repo.fullName}</Text>
          <Text>Desciption: {repo.description}</Text>
          <Text>Language: {repo.language}</Text>
          <Text>Starts: {repo.stargazersCount}</Text>
          <Text>Forks: {repo.forksCount}</Text>
          <Text>Rating: {repo.ratingAverage}</Text>
          <Text>Review: {repo.reviewCount}</Text>
        </View>
      )}
    />
  );
};

export default RepositoryList;
