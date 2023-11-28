import React, { useEffect } from "react"
import { styles } from "./style"
import {
  CodeField,
  useClearByFocusCell,
  Cursor,
  useBlurOnFulfill,
} from "react-native-confirmation-code-field"
import { View, Text } from "react-native"
import { Colors, Fonts } from "../../common"
import { width } from "../../utils"
import { useCurrentLangSelector } from "store/slices/authSlice"

export const OtpInput = (props) => {
  const {
    value,
    setValue,
    CELL_COUNT = 4,
    error,
    noValidation,
    onSubmit,
    backEndError,
    clearError,
  } = props

  const lang = useCurrentLangSelector()

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT })
  const [ codeFieldProps, getCellOnLayout ] = useClearByFocusCell({
    value,
    setValue,
  })

  const { redColor, primaryColor } = Colors

  useEffect(() => {
    setTimeout(() => {
      ref?.current?.focus()
    }, 500)
  }, [ ref ])

  return (
    <>
      <CodeField
        ref={ ref }
        { ...codeFieldProps }
        cellCount={ CELL_COUNT }
        onBlur={ value?.length === CELL_COUNT ? onSubmit : undefined }
        onFocus={ () => {
          setValue("")
          setTimeout(() => {
            clearError()
          }, 100)
        } }
        value={ value }
        onChangeText={ setValue }
        rootStyle={ styles.cellRoot }
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={ ({ index, symbol, isFocused }) => (
          <View
            key={ index }
            style={ [ styles.cell,
            {
              borderWidth: error ? 1 : 0,
            },
            ] }
            onLayout={ getCellOnLayout(index) }
          >
            <>
              <Text style={ styles.cellText }>
                { symbol || (isFocused ? <Cursor /> : "") }
              </Text>
            </>
          </View>
        ) }
      />
      { error && (
        <Text style={ [ styles.error, { color: redColor } ] }>
          { error || backEndError || " " }
        </Text>
      ) }
    </>
  )
}
