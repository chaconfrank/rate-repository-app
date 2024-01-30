import React from "react";
import { Text, View } from "react-native";
import RepositoryList from "./RepositryList";
import AppBar from "./AppBar";
import { Route, Switch } from "react-router-native";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <Text>Working on it!</Text>
        </Route>
      </Switch>
    </View>
  );
};

export default Main;
