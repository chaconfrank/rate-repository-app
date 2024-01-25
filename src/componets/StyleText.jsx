import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subHeading: {
    fontSize: theme.fontSizes.subHeading,
  },
  textAlingCenter: {
    textAlign: "center",
  },
});

export default function StyleText({
  children,
  aling,
  color,
  fontSize,
  fontWeight,
  style,
  ...restOfPromps
}) {
  const textStyle = [
    styles.text,
    aling === "center" && styles.textAlingCenter,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subHeading" && styles.subHeading,
    fontWeight === "bold" && styles.bold,
    style
  ];
  return (
    <Text style={textStyle} {...restOfPromps}>
      {children}
    </Text>
  );
}
