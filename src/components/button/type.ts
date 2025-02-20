import { ReactNode } from "react"
import { Colors } from "../../utils/types"

type ButtonTypes = 'button' | 'submit'

export type ButtonProps = {
  children: ReactNode,
  type: ButtonTypes,
  disabled: boolean,
  mainColor?: Colors,
  hoverColor?: Colors,
  activeColor?: Colors,
  textColor?: Colors,
  disabledColor?: Colors,
  onClick: () => void,
  margin?: string,
  padding?: string,
  className?: string,
}