import React, { useEffect } from "react"
import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { Controller, useForm } from "react-hook-form"
import { fontSize, height, translate, width } from "../../utils"
import { OtpInput } from "./OtpInput"
import { ResendOtp } from "./resend-otp"
import { styles } from "./style"
import { Fonts, ScaleWidth } from "common"
import { useCurrentLangSelector } from "store/slices/authSlice"

export const OtpForm = ({ phone }) => {
  const isRtl = useCurrentLangSelector() == "ar"

  const { control, handleSubmit, watch, setError, clearErrors } = useForm({
    mode: "onTouched",
    defaultValues: { verificationCode: "" },
  })

  const onSubmit = () => {
    console.log("Submit OTP")
  }

  useEffect(() => {
    if (watch("verificationCode").length == 4) {
      handleSubmit(onSubmit)()
    }
  }, [ watch("verificationCode") ])

  return (
    <>
      <Text
        style={ styles.title }
      >
        { translate("otp title") }
      </Text>
      <Text
        style={ styles.hint }
      >
        { phone }
      </Text>

      <TouchableOpacity>
        <Text
          style={ styles.changeNumber }
        >
          { translate("Change Number") }
        </Text>
      </TouchableOpacity>
      <KeyboardAvoidingView>
        <Controller
          name="verificationCode"
          rules={ {
            validate: (value) => {
              if (!value.length) return translate("required")
              else return true
            },
          } }
          control={ control }
          render={ (props) => (
            <OtpInput
              clearError={ () => clearErrors("verificationCode") }
              backEndError={ "" }
              error={ props.fieldState.error?.message }
              value={ props.field.value }
              setValue={ props.field.onChange }
            />
          ) }
        />
      </KeyboardAvoidingView>
      <ResendOtp phone={ phone } loading={ false } />
    </>
  )
}
