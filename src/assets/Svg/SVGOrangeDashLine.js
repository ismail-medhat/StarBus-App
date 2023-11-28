import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGOrangeDashLine = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={ 148 }
    height={ 1 }
    fill="none"
    { ...props }
  >
    <Path stroke="#F29100" strokeDasharray="5 5" d="M.5.5h147" />
  </Svg>
);
export default SVGOrangeDashLine;
