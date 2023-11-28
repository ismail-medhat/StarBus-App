import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const SVGChecked = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Circle cx={10} cy={10} r={9.5} stroke="#F29100" />
    <Circle cx={10} cy={10} r={6.667} fill="#F29100" />
  </Svg>
);
export default SVGChecked;
