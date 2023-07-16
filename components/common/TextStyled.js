import { Text, StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const TextSizes = {
  LARGE: "large",
  SMALL: "small",
};

export const TextColors = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

const TextStyled = ({ fontBold, size, color, children, className }) => {
  const textStyles = [
    styles.text,
    fontBold && styles.fontBold,
    size && styles[size],
    color && styles[color],
    className,
  ];

  return <Text style={textStyles}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.medium,
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.primary,
  },
  fontBold: {
    fontWeight: theme.fontWeights.bold,
  },
  large: {
    fontSize: theme.fontSizes.large,
  },
  small: {
    fontSize: theme.fontSizes.small,
  },
  secondary: { color: theme.colors.secondary },
});

export default TextStyled;
