"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React, { useState } from 'react'

type Props = {}
type FormDataI={
  mobile:string,
  password:string
}
export default function Login({}: Props) {
  async function handleSubmit(event:React.SyntheticEvent) {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      mobile: { value: string };
      password: { value: string };
    };
    try {
        const response = await fetch("/api/auth/login",{
            method:"POST",
            headers:{
            },
            body:JSON.stringify({
                mobile:target.mobile.value,
                password:target.password.value,
            })
        })
        const data = await response.json()
        console.log(data)
        const userData = await fetch('/api/auth/me');
        const user = await userData.json();
        console.log(user)
        
    } catch (error) {
        console.log(error)
    }
  }
  console.log("rendred")
  return (
    <div className='flex flex-col justify-center '>
      <form onSubmit={handleSubmit} className='mx-4'>
      <h1 className="text-4xl font-bold text-pink-600 mb-2 font-Rubik mt-8">Login</h1>
      <Input
        className='my-3'
        name='mobile'
        type='text'
        placeholder='Enter Your Moble Number'
      />
      <Input
        className='my-3'
        name='password'
        type='password'        
        placeholder='Enter Your Moble Number'
      />
      <Button type='submit' variant={"default"} color='pink' className='my-3 bg-pink-500 w-full'>Login</Button>
      </form>
      <Link href={"/regester"} className='text-sm mx-4'> You do not have a Account ? <span className='text-pink-600'> Create a New Account</span> </Link>
    </div>

  )
}