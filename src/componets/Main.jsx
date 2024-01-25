import React from "react";
import { View } from "react-native";
import RepositoryList from "./RepositryList";
import AppBar from "./AppBar";

const Main = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;
