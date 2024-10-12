import ReactDOMServer from "react-dom/server";
import { IconHTML, IconCSS, IconJS } from "@lib/Icons";
import type { Prop, ReactElement, PropTSX } from "@type/svg";

const langs: PropTSX = {
  html: IconHTML,
  css: IconCSS,
  javascript: IconJS,
};

export const getIconLangByName = ({ name }: { name: string }) =>
  langs[name]?.();

const toUtf8 = (Icon: ReactElement, props?: Prop) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(<Icon {...props} />)
  )}`;

const toBase64 = (Icon: ReactElement, props?: Prop) =>
  `data:image/svg+xml;base64,${btoa(
    ReactDOMServer.renderToStaticMarkup(<Icon {...props} />)
  )}`;

export const svgToUtf8 = (svg: ReactElement, props?: Prop) =>
  toUtf8(svg, props);

export const svgToBase64 = (svg: ReactElement, props?: Prop) =>
  toBase64(svg, props);

export const svgToUtf8Url = (svg: ReactElement, props?: Prop) =>
  `url('${toUtf8(svg, props)}')`;

export const svgToBase64Url = (svg: ReactElement, props?: Prop) =>
  `url('${toBase64(svg, props)}')`;
