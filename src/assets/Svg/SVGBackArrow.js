import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { width } from "utils";
const SVGBackArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={ props.width || width(24) }
    height={ props.height || width(24) }
    fill="none"
    { ...props }
  >
    <Path
      fill={ props.fill || "#333" }
      d="M9.57 18.82c-.19 0-.38-.07-.53-.22l-6.07-6.07a.754.754 0 0 1 0-1.06L9.04 5.4c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L4.56 12l5.54 5.54c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22Z"
    />
    <Path
      fill={ props.fill || "#333" }
      d="M20.5 12.75H3.67c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H20.5c.41 0 .75.34.75.75s-.34.75-.75.75Z"
    />
  </Svg>
);
export default SVGBackArrow;
