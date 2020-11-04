import React from "react";
import { useIncrementingNumber } from "./useIncrementingNumber";

const rainbowColors = [
  "hsl(262, 98%, 27%)",
  "hsl(266, 90%, 30%)",
  "hsl(244, 77%, 46%)",
  "hsl(192, 71%, 51%)",
];
const paletteSize = rainbowColors.length;

export const useRainbow = ({ intervalDelay = 500 } = {}) => {
  // Register all custom properties.
  // This only ever needs to be done once, so there are no dependencies.
  React.useEffect(() => {
    for (let i = 0; i < paletteSize; i++) {
      try {
        CSS.registerProperty({
          name: `--magic-rainbow-color-${i}`,
          initialValue: rainbowColors[i],
          syntax: "<color>",
          inherits: false,
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  // Get an ever-incrementing number from another custom hook*
  const intervalCount = useIncrementingNumber(intervalDelay);
  // Using that interval count, derive each current color value
  return {
    "--magic-rainbow-color-0": rainbowColors[(intervalCount + 1) % paletteSize],
    "--magic-rainbow-color-1": rainbowColors[(intervalCount + 2) % paletteSize],
    "--magic-rainbow-color-2": rainbowColors[(intervalCount + 3) % paletteSize],
    "--magic-rainbow-color-3": rainbowColors[(intervalCount + 4) % paletteSize],
  };
};
