import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGDownArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={7}
    fill="none"
    {...props}
  >
    <Path
      fill="#374957"
      d="M12.728.286A.908.908 0 0 0 12.07 0a.908.908 0 0 0-.657.286L7.15 4.762a.925.925 0 0 1-.657.278c-.245 0-.48-.1-.657-.278L1.575.286A.906.906 0 0 0 .921.012a.908.908 0 0 0-.649.286C.1.478.002.723 0 .979c-.002.256.092.503.26.687l4.262 4.476c.26.272.566.488.905.635a2.673 2.673 0 0 0 2.134 0c.338-.147.646-.363.905-.635l4.262-4.476c.174-.183.272-.431.272-.69 0-.259-.098-.507-.272-.69Z"
    />
  </Svg>
);
export default SVGDownArrow;
