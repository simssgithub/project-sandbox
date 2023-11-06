import React from 'react'

export default function <Pamagat>({classes, text}) {
  return (
    <div>
      <h1 className={!classes ? "text-center-success" :classes && "title"}>
        {!text ? "Title": text}</h1>
    </div>
  )
}
