import ReactDOMServer from "react-dom/server";
import { IconHTML, IconCSS, IconJS } from "@lib/Icons";
import type { Prop, ReactElement, PropTSX } from "@type/svg";

const langs: PropTSX = {
  html: IconHTML,
  css: IconCSS,
  javascript: IconJS,
};

const toData = (Icon: ReactElement, props?: Prop) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    ReactDOMServer.renderToStaticMarkup(<Icon {...props} />)
  )}`;

export const getIconLangByName = ({ name }: { name: string }) =>
  langs[name]?.();

export const svgToData = (svg: ReactElement, props?: Prop) =>
  toData(svg, props);

export const svgToDataUrl = (svg: ReactElement, props?: Prop) =>
  `url('${toData(svg, props)}')`;
