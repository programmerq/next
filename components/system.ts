import css, {
  AllSystemCSSProperties,
  CssFunctionReturnType,
  SystemStyleObject,
} from "@styled-system/css";
import { Property } from "csstype";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  RequiredTheme,
  ResponsiveValue,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
  variant,
} from "styled-system";
import theme from "components/theme";
import { camelCaseToDash } from "utils/string";

type GenericProp<K extends string, T extends Record<string, unknown>> = {
  [I in K]?: keyof T | Array<keyof T>;
};

export interface StyledSystemProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps,
    GenericProp<"text", typeof theme.textStyles>,
    GenericProp<"gradient", typeof theme.gradients> {
  css?: CssFunctionReturnType | string;
  breakInside?: ResponsiveValue<Property.BreakInside, RequiredTheme>;
  columns?: ResponsiveValue<Property.Columns, RequiredTheme>;
  columnGap?: ResponsiveValue<Property.ColumnGap, RequiredTheme>;
  cursor?: ResponsiveValue<Property.Cursor, RequiredTheme>;
  textDecoration?: ResponsiveValue<Property.TextAlign, RequiredTheme>;
  textTransform?: ResponsiveValue<Property.TextTransform, RequiredTheme>;
  float?: ResponsiveValue<Property.Float, RequiredTheme>;
  listStyle?: ResponsiveValue<Property.ListStyle, RequiredTheme>;
  listStyleType?: ResponsiveValue<Property.ListStyleType, RequiredTheme>;
  whiteSpace?: ResponsiveValue<Property.WhiteSpace, RequiredTheme>;
  textOverflow?: ResponsiveValue<Property.TextOverflow, RequiredTheme>;
  borderCollapse?: ResponsiveValue<Property.BorderCollapse, RequiredTheme>;
  boxSizing?: ResponsiveValue<Property.BoxSizing, RequiredTheme>;
  transition?: ResponsiveValue<Property.Transition, RequiredTheme>;
  transform?: ResponsiveValue<Property.Transform, RequiredTheme>;
  animationDuration?: ResponsiveValue<
    Property.AnimationDuration,
    RequiredTheme
  >;
  pointerEvents?: ResponsiveValue<Property.PointerEvents, RequiredTheme>;
}

export const all = compose(
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
  system({
    textDecoration: true,
    textOverflow: true,
    textTransform: true,
    listStyle: true,
    listStyleType: true,
    whiteSpace: true,
    borderCollapse: true,
    transition: true,
    animationDuration: true,
    float: true,
    boxSizing: true,
    pointerEvent: true,
    cursor: true,
    columns: true,
    columnGap: true,
    breakInside: true,
    transform: true,
  }),
  variant({
    prop: "text",
    variants: theme.textStyles,
  }),
  variant({
    prop: "gradient",
    variants: theme.gradients,
  })
);

export interface StyledSystemWrapperProps
  extends FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    GenericProp<"text", typeof theme.textStyles> {}

export const wrapper = compose(flexbox, layout, position, shadow, space);

const media =
  (mediaKey = "", styles: SystemStyleObject) =>
  ({ /* props,  */ theme }) => {
    const key = theme.media[mediaKey];
    return {
      [key]: css(styles)(theme),
    };
  };

type Easing = string;

type Item = [
  keyof AllSystemCSSProperties,
  keyof typeof theme.transitionTimings,
  Easing?
];

export function transition(items: Item[]): string {
  return items
    .map((item) => {
      const prop = camelCaseToDash(item[0]);
      const timing = theme.transitionTimings[item[1]];
      const easing = item[2] ? ` ${item}` : "";

      return `${prop} ${timing}ms${easing}`;
    })
    .join(",");
}

export {
  media,
  css,
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  typography,
  variant,
};

export type {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
};
