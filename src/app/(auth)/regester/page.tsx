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
export default function Regester({}: Props) {
  async function handleSubmit(event:React.SyntheticEvent) {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      confirmPassword:{value:string};
      username:{value:string};
      mobile: { value: string };
      password: { value: string };
    };
    try {
        const response = await fetch("/api/auth/regester",{
            method:"POST",
            headers:{
            },
            body:JSON.stringify({
                mobile:target.mobile.value,
                username:target.username.value,
                password:target.password.value,
                confirmPassword:target.confirmPassword.value,
            })
        })
        const data = await response.json()
        console.log(data)
        
    } catch (error) {
        console.log(error)
    }
  }
  console.log("rendred")
  return (
    <div className='flex flex-col justify-center '>
      <form onSubmit={handleSubmit} className='mx-4'>
      <h1 className="text-4xl font-bold text-pink-600 mb-2 font-Rubik mt-8">Regester</h1>
      <Input
        className='my-3'
        name='username'
        type='text'
        placeholder='Enter Full Name'
    
      />
      <Input
        className='my-3'
        name='mobile'
        type='number'
        placeholder='Enter Your Moble Number'
      />
      <Input
        className='my-3'
        name='password'
        type='password'        
        placeholder='Enter Your Password'
      />
      <Input
        className='my-3'
        name='confirmPassword'
        type='password'        
        placeholder='Enter Confirm Password'
      />
      <Button type='submit' variant={"default"} color='pink' className='my-3 bg-pink-500 w-full'>Create Account</Button>
      </form>
      <Link href={"/login"} className='text-sm mx-4'> Allredy have a Account? <span className='text-pink-600'>Login</span> </Link>
    </div>

  )
}