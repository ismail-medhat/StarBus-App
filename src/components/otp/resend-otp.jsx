import React, { useEffect, useRef, useState } from "react"
import { ActivityIndicator, TouchableOpacity, Text, View } from "react-native"
import { fontSize, height, translate, width } from "../../utils"
import { styles } from "./style"
import { Colors, Fonts } from "../../common"
import { useCurrentLangSelector } from "../../store/slices/authSlice"
import dayjs from "dayjs"
import { SvgFromXml } from "react-native-svg"

export const ResendOtp = (props) => {
  const { phone, loading } = props

  const [ allowResend, setAllowResend ] = useState(false)
  const otpTimeState = useRef(1)
  const intervalRef = useRef()
  const isRtl = useCurrentLangSelector() == "ar"


  //set timer in 3 cases 
  /** first try 1 min 
   *  second try  2 min  
   *  third try  4 min  
   * */
  const getTimer = () => {
    let time = 0
    switch (otpTimeState.current) {
      case 1:
        time = 61
        break
      case 2:
        time = 120
        break
      default:
        time = 240
        break
    }
    return time
  }
  //for the timer value
  const [ timer, setTimer ] = useState(dayjs.duration(getTimer(), "seconds"))

  //used to handle timer when user press resend (case 2,3)
  const [ startTimer, setStartTimer ] = useState(false)

  //for start timer again 
  const _subSecond = () => setStartTimer(true);

  //handle timer only works id startTimer==true 
  useEffect(() => {
    if (startTimer) {
      setStartTimer(false)
      let newDuration = timer
      newDuration = newDuration.subtract(1, "second")  //---> subtract  seconds - 1 
      setTimer(newDuration)
      if (newDuration.asSeconds() === 0) {   //---> if timer end clear Interval and enable resend button
        clearInterval(intervalRef.current)
        setAllowResend(true)
      }
    }
  }, [ timer, setTimer, startTimer, intervalRef ])


  //for first time only ** case 1 
  useEffect(() => {
    intervalRef.current = setInterval(_subSecond, 1000)
  }, [])

  const resend = () => {
    // if (loading   ) {
    //   return
    // }
    setAllowResend(false)
    otpTimeState.current++  // increase case to getTimer  
    setTimer(dayjs.duration(getTimer(), "seconds"))   // set timer with next case time 
    intervalRef.current = setInterval(_subSecond, 1000)   // start interval again

    //resend otp here
  }

  return (
    <>
      <View
        style={ {
          marginVertical: height(32),
          justifyContent: "center",
          alignItems: "center",
          flexDirection: isRtl ? "row" : "row-reverse",
        } }
      >
        <View
          style={ [
            styles.textContainer,
            { flexDirection: !isRtl ? "row" : "row-reverse" },
          ] }
        >
          <Text style={ [ styles.resend ] }>{ translate("Remaining time") }</Text>
          <View style={ styles.timerContainer }>
            <Text
              style={ [ styles.resend, { color: "#F53", fontFamily: Fonts.bold } ] }>
              { `${timer.format("mm:ss")} s` }
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        disabled={ !allowResend }
        onPress={ resend }
        style={ [
          styles.button,
          {
            flexDirection: isRtl ? "row" : "row-reverse",
            backgroundColor: allowResend ? Colors.primaryColor : "#ddd",
          },
        ] }
      >
        <Text
          style={ {
            fontSize: fontSize(14),
            color: "#fff",
            fontFamily: Fonts.regular,
          } }
        >
          { translate("resend code") }
        </Text>
        <SvgFromXml xml={ xml } height={ width(24) } width={ width(25) } />
      </TouchableOpacity>
    </>
  )
}

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
<path d="M12.5 22.7499C7.30002 22.7499 3.08002 18.5199 3.08002 13.3299C3.08002 11.4599 3.63002 9.64989 4.67002 8.08989C4.90002 7.74989 5.37002 7.64989 5.71002 7.87989C6.05002 8.10989 6.15002 8.57989 5.92002 8.91989C5.05002 10.2199 4.59002 11.7499 4.59002 13.3199C4.59002 17.6899 8.14002 21.2399 12.51 21.2399C16.88 21.2399 20.43 17.6899 20.43 13.3199C20.43 8.94989 16.87 5.39989 12.5 5.39989C11.58 5.39989 10.68 5.52989 9.83002 5.78989C9.43002 5.90989 9.01002 5.68989 8.89002 5.28989C8.77002 4.88989 8.99002 4.46989 9.39002 4.34989C10.39 4.04989 11.43 3.88989 12.5 3.88989C17.7 3.88989 21.92 8.11989 21.92 13.3099C21.92 18.4999 17.7 22.7499 12.5 22.7499Z" fill="white"/>
<path d="M8.36999 6.07012C8.19999 6.07012 8.01999 6.01012 7.87999 5.89012C7.55999 5.61012 7.52999 5.14012 7.79999 4.83012L10.69 1.51012C10.96 1.20012 11.44 1.16012 11.75 1.44012C12.06 1.71012 12.09 2.19012 11.82 2.50012L8.92999 5.81012C8.77999 5.98012 8.56999 6.07012 8.36999 6.07012Z" fill="white"/>
<path d="M11.74 8.52988C11.59 8.52988 11.43 8.47988 11.3 8.38988L7.92001 5.91988C7.59001 5.67988 7.52001 5.20988 7.76001 4.87988C8.00001 4.53988 8.47001 4.46988 8.81001 4.70988L12.18 7.16988C12.51 7.40988 12.59 7.87988 12.34 8.21988C12.2 8.42988 11.97 8.52988 11.74 8.52988Z" fill="white"/>
</svg>`
