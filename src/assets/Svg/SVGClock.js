import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGClock = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={ 16 }
    height={ 15 }
    fill="none"
    { ...props }
  >
    <Path
      fill="#787878"
      d="M8 14.219A5.943 5.943 0 0 1 2.062 8.28 5.943 5.943 0 0 1 8 2.344a5.943 5.943 0 0 1 5.938 5.937A5.943 5.943 0 0 1 8 14.22ZM8 3.28c-2.756 0-5 2.244-5 5s2.244 5 5 5 5-2.244 5-5-2.244-5-5-5Z"
    />
    <Path
      fill="#787878"
      d="M8 8.594a.472.472 0 0 1-.469-.469V5c0-.256.213-.469.469-.469s.469.213.469.469v3.125A.472.472 0 0 1 8 8.594ZM9.875 1.719h-3.75a.472.472 0 0 1-.469-.469c0-.256.213-.469.469-.469h3.75c.256 0 .469.213.469.469a.472.472 0 0 1-.469.469Z"
    />
  </Svg>
);
export default SVGClock;
