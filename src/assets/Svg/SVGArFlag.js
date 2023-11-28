import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SVGArFlag = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#CE1126"
        d="M19.003.003H4.996A5.25 5.25 0 0 0 0 5.247v2.752h24V5.247A5.25 5.25 0 0 0 19.003.003Z"
      />
      <Path
        fill="#000"
        d="M0 18.747c0 2.9 2.35 5.25 5.25 5.25h13.5c2.9 0 5.25-2.35 5.25-5.25v-2.752H0v2.752Z"
      />
      <Path fill="#F5F5F5" d="M24 8H0v7.995h24V8Z" />
      <Path
        fill="#C09300"
        d="M13.771 10.902c0-.276-.27-.47-.53-.383l-.49.164-.12-.72a.883.883 0 0 0-.873-.74h-.46l-.479.59h.635l-.178.879-.517-.173a.403.403 0 0 0-.53.383v2.983l.714-.714-.337 1.01h-.377v.59h3.542v-.59h-.377l-.337-1.01.714.714v-2.983Zm-2.066 3.278h-.476l.327-.874.149.19v.684Zm.59 0v-.684l.149-.19.327.874h-.476ZM12 13.11s-.913-.618-.877-1.771c0 0 .563-.093.877-.59.314.497.877.59.877.59.036 1.153-.877 1.771-.877 1.771Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGArFlag;
