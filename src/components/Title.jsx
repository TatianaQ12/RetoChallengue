import React from 'react'

function Title({text}){
  return (
    <div className="flex ...">
    <div className="flex-none w-1 h-14 ..."></div>
    <div className="grow text-left ">
      {text}
    </div>
    <div className="flex-none w-14 h-14 ..."></div>
  </div>
  )
}
export default Title;