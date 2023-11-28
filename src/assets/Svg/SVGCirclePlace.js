import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const SVGCirclePlace = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={ 15 }
    height={ 14 }
    fill="none"
    { ...props }
  >
    <Circle cx={ 7.5 } cy={ 7 } r={ 7 } fill="#E7EEF6" />
    <Circle cx={ 7.5 } cy={ 7 } r={ 4 } fill="#787878" />
  </Svg>
);
export default SVGCirclePlace;
