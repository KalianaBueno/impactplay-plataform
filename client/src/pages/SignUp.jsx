import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react'
import {Link} from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md: items-center gap-5'>

        {/* lado esquerdo */}
        <div className='flex-1'>
            <Link to="/" className= "font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-700 rounded-lg text-white">
              Impact
            </span>
            Play
            </Link>

            <p className='text-sm mt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, architecto. Nostrum quia repellendus aliquam nihil doloribus.
            </p>
        </div>

        {/* lado direito */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Username'/>
              <TextInput type='text' placeholder='Username' id='username'/>
            </div>

            <div>
              <Label value='Email'/>
              <TextInput type='text' placeholder='example@example.com' id='email'/>
            </div>

            <div>
              <Label value='Password'/>
              <TextInput type='text' placeholder='senha' id='password'/>
            </div>

            <Button gradientDuoTone='greenToBlue' outline type='submit'>
              Sign up
            </Button>
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Já tem uma conta?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>

        </div>

      </div>
    </div>
  )
}
