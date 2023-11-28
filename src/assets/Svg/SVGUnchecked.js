import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const SVGUnchecked = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Circle cx={10} cy={10} r={9.5} stroke="#999" />
  </Svg>
);
export default SVGUnchecked;
