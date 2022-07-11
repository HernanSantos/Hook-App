import { memo } from "react"


export const Small = memo(({value}) => {

    console.log("me imprimi")

  return (
    <small>{value}</small>
  )
})
