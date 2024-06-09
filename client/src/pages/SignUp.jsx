import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({});

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password){
      return setErrorMessage('Campos obrigatórios');
    }

    try {
        setLoading(true);
        setErrorMessage(null);
        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success === false) {
          return setErrorMessage(data.message);
        }
        setLoading(false);
        if (res.ok){
          navigate('/sign-in')
        }
    } catch (error) {
      setErrorMessage(errorMessage);
      setLoading(false);
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
              <Label value='Username'/>
              <TextInput type='text' placeholder='Username' id='username' onChange={handleChange}/>
            </div>

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
                ) : ('Sign Up')
              }
            </Button>
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>Já tem uma conta?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
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
