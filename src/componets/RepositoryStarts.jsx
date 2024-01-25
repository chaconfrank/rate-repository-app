import React from "react";
import { View } from "react-native";
import StyleText from "./StyleText";

const ParseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10} k` : String(value);
};

const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyleText aling="center" fontWeight="bold">
          {ParseThousands(props.stargazersCount)}
        </StyleText>

        <StyleText aling="center">Starts</StyleText>
      </View>
      <View>
        <StyleText aling="center" fontWeight="bold">
          {ParseThousands(props.stargazersCount)}
        </StyleText>

        <StyleText aling="center">Forks</StyleText>
      </View>
      <View>
        <StyleText aling="center" fontWeight="bold">
          {props.ratingAverage}
        </StyleText>

        <StyleText aling="center">Rating</StyleText>
      </View>
      <View>
        <StyleText aling="center" fontWeight="bold">
          {props.reviewCount}
        </StyleText>

        <StyleText aling="center">Review</StyleText>
      </View>
    </View>
  );
};

export default RepositoryStats;
