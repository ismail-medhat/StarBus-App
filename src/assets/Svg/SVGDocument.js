import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SVGDocument = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={ 24 }
    height={ 24 }
    fill="none"
    { ...props }
  >
    <G
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={ 10 }
      strokeWidth={ 1.5 }
    >
      <Path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" />
      <Path d="M14.5 4.5v2c0 1.1.9 2 2 2h2M8 13h4M8 17h8" />
    </G>
  </Svg>
);
export default SVGDocument;
