import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const useStateParams = <TValue>(
  paramsString: string,
  initionalValue: TValue,
  serialize: (data: TValue) => string,
  deSerialize: (data: string) => TValue,
) => {
  const navagate = useNavigate()
  const search = new URLSearchParams(window.location.search)
  const existValue = search.get(paramsString)
  const [state, setState] = useState<TValue>(
    existValue ? deSerialize(existValue) : initionalValue
  )
  const onChange = (value: TValue) => {
    setState(value)
    search.set(paramsString, serialize(value))
    navagate({ search: search.toString() })
  }
  return [state, onChange] as [TValue, (data: TValue) => void]
}