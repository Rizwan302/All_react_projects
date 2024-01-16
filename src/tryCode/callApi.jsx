import React, { useContext } from 'react'
import TryCode from './page'

export default function CallApi({children}) {
    const Data = useContext(TryCode)
    console.log(Data.newData)
  return (
    <div>
      <h1>{children}</h1>
    </div>
  )
}
