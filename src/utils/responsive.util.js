import { Dimensions, Platform } from "react-native"
const { height: screenHeight, width: screenWidth } = Dimensions.get("window")
// default size
const designWidth = 375
const designHeight = 812

//max width for scaling on big screens
const maxScreenWidth = screenWidth < 523 ? screenWidth : 523
const _scaleWidth = maxScreenWidth / designWidth
const _scaleHeight = screenHeight / designHeight
//_scaleText for  scaling font size
const _scaleText = _scaleWidth

/* example how to use responsive width / height :: 
if you want to add width or height 70 in your style
style = {
  width : width(70)
  height : height(70)
} 
width(number) --> the result is responsive width  
height(number) --> the result is responsive hight  
*/
const width = (value) => value * _scaleWidth
const height = (value) => value * _scaleHeight

/* example how to use responsive fontSize:: 
if you want to add fontSize : 14 in your text style
style = {
  fontSize : fontSize(14)
} 
fontSize(number) --> the result is responsive fontSize  
*/
const fontSize = (value) => value * _scaleText
export {
  width,
  height,
  fontSize,
}
