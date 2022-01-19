/**
 * Deterministic colors derived from oub keys, hashes or any other string data
 * @module useColor
 * */

import ColorHash from "color-hash";

const color = {
  light: new ColorHash({
    saturation: [0.05, 0.08, 0.22],
    lightness: [0.85, 0.87, 0.9],
  }),
  regular: new ColorHash({
    saturation: [0.1, 0.5, 0.7],
    lightness: [0.3, 0.5, 0.7],
  }),
  deep: new ColorHash({
    saturation: [0.5, 0.7, 0.9],
    lightness: [0.5, 0.6, 0.7],
  }),
  dark: new ColorHash({
    saturation: [0.02, 0.05, 0.08],
    lightness: [0.18, 0.2, 0.3],
  }),
};

/**
 * Get a color generator of a certain palette
 * @param {('light'|'regular'|'deep'|'dark')} palette
 * @returns {ColorHash} Color-Hash instance
 * @example
 * import {useColor} from '@gun-vue/composables'
 * const colorDeep = useColor('deep')
 * const color = colorDeep.hex('any text data')
 */

export function useColor(palette = "deep") {
  if (typeof palette == "object") {
    return new ColorHash(palette);
  }
  return color[palette];
}
