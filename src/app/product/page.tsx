"use client"
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

type Props = {

}
export default function ProductPage({}: Props) {
    const router = useRouter()
    const params = useParams()
    console.log(router)
  return (
    <div>page</div>
  )
}