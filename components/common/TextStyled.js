import { Text, StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const TextColors = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

export const TextStyled = ({ fontBold, color, children, className }) => {
  const textStyles = [
    styles.text,
    fontBold && styles.fontBold,
    color && styles[color],
    className,
  ];

  return <Text style={textStyles}>{children}</Text>;
};

export const H1 = ({ fontBold, color, children, className }) => {
  return (
    <TextStyled
      style={styles.h1}
      fontBold={fontBold}
      color={color}
      className={className}
    >
      {children}
    </TextStyled>
  );
};

export const SmallText = ({ fontBold, color, children, className }) => {
  return (
    <TextStyled
      style={styles.smallText}
      fontBold={fontBold}
      color={color}
      className={className}
    >
      {children}
    </TextStyled>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.medium,
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.primary,
  },
  h1: {
    fontSize: theme.fontSizes.large,
  },
  smallText: {
    fontSize: theme.fontSizes.small,
  },
  fontBold: {
    fontWeight: theme.fontWeights.bold,
  },
  secondary: { color: theme.colors.secondary },
});
