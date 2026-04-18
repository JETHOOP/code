import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref = useRef(null)
  const data = [
    {
      desc: "this is the description of this shit",
      filesize: "0.9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download now", tagColor: "green" },
    },
    {
      desc: "this is the description of this shit",
      filesize: "0.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "red" },
    },
    {
      desc: "this is the description of this shit",
      filesize: "0.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download now", tagColor: "green" },
    }
  ]
  return (
    <div ref ={ref} className="fixed h-full w-full top-0 left-0 z-[3] flex gap-10 flex-wrap p-5">
      { data.map((item,index)=>(
        <Card data={item} reference={ref}/>
      ))}
    </div>
  )
}

export default Foreground
