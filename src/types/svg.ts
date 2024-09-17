export type IconProp = Record<string, string>;

export type Prop = { [key in string]: string };

export type ReactElement = () => JSX.Element;

export type PropTSX = { [key in string]: ReactElement };
