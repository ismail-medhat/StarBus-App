import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGActiveTicket = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#F29100"
      d="M22.5 10.75c.41 0 .75-.34.75-.75V9c0-4.41-1.34-5.75-5.75-5.75h-6.25V5.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3.25H7.5C3.09 3.25 1.75 4.59 1.75 9v.5c0 .41.34.75.75.75.96 0 1.75.79 1.75 1.75s-.79 1.75-1.75 1.75c-.41 0-.75.34-.75.75v.5c0 4.41 1.34 5.75 5.75 5.75h2.25V18.5c0-.41.34-.75.75-.75s.75.34.75.75v2.25h6.25c4.41 0 5.75-1.34 5.75-5.75 0-.41-.34-.75-.75-.75-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75Zm-11.25 3.42c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.83c0-.41.34-.75.75-.75s.75.34.75.75v4.34Z"
    />
  </Svg>
);
export default SVGActiveTicket;
