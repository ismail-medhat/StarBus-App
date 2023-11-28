import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGRightArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={ 24 }
    height={ 24 }
    fill="none"
    { ...props }
  >
    <Path
      fill="#333"
      d="M10.74 16.28c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3-3-3-3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3.53 3.53c.29.29.29.77 0 1.06l-3.53 3.53c-.15.15-.34.22-.53.22Z"
    />
  </Svg>
);
export default SVGRightArrow;
