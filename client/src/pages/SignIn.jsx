import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';

export default function SignIn() {
  
  const [formData, setFormData] = useState({});
  const {loading, error: errorMessage} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password){
      return dispatch(signInFailure('Campos obrigatórios'));
    }

    try {
        dispatch(signInStart());
        const res = await fetch('/api/auth/signin', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success === false) {
          dispatch(signInFailure(data.message));
        }
        
        if (res.ok){
          dispatch(signInSuccess(data));
          navigate('/')
        }
    } catch (error) {
      dispatch(signInFailure(errorMessage));
    }

  };


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
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>

            <div>
              <Label value='Email'/>
              <TextInput type='email' placeholder='example@example.com' id='email' onChange={handleChange}/>
            </div>

            <div>
              <Label value='Password'/>
              <TextInput type='password' placeholder='senha' id='password' onChange={handleChange}/>
            </div>

            <Button gradientDuoTone='greenToBlue' outline type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size='sm'/>
                  <span className='pl-3'>carregando...</span>
                  </>
                ) : ('Sign In')
              }
            </Button>
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Não tem uma conta?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Sign up
            </Link>
          </div>

          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }

        </div>

      </div>
    </div>
  )
}
