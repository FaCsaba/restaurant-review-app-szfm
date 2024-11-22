import fs from "node:fs/promises";
import { Plugin } from 'vite';

export function svgLoader(): Plugin<any> {
  const svgRegex = /\.svg$/;

  return {
    name: 'svg-loader',
    enforce: 'pre',

    async load(path: string) {
      if (!path.match(svgRegex)) return;

      let svg;
      try {
        svg = await fs.readFile(path, 'utf-8');
      } catch (ex) {
        console.warn('\n', `${path} couldn't be loaded by svg-loader, fallback to default loader`);
        return;
      }

      return `export default ${JSON.stringify(svg)}`;
    }
  }
}