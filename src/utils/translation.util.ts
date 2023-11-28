import { useTranslation } from "react-i18next"
import ar from "../language/ar.json"

export type Words = typeof ar
export interface TranslationProps<Translation> {
  params?: {} | undefined
  _key?: string
}
export const translate = <Translation extends keyof Words>(
  word: Translation,
  props?: TranslationProps<Translation>
) => {
  const { t } = useTranslation()

  return props?._key !== undefined
    ? t(word, props.params)
    : t(word, props?.params)
}
