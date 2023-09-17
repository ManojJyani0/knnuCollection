import React from 'react'

type Props = {}
const category:string[] = [
    "Shoots",
    "Shari",
    "Langa",
    "Poshak"
]
export default function Category({}: Props) {
  return (
    <div>
        <ul className='flex justify-between items-center flex-nowrap  space-x-3'>
            {category.map(item=><li key={item}>{item}</li>)}
        </ul>
    </div>
  )
}