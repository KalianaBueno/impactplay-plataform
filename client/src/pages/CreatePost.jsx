import { Button, FileInput, Select, TextInput } from 'flowbite-react';
import React from 'react'
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';



export default function CreatePost() {
  return <div className='p-3 max-w-3xl mx-auto min-h-screen'>
    <h1 className='text-center text-3xl my-7 font-semibold'>Criar um Post</h1>

    <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput type='text' placeholder='Título' required id='title' className='flex-1'/>
            <Select>
                <option value='uncategorized'>Selecione uma categoria</option>
                <option value='horta'>Cultivo de horta</option>
                <option value='lixo'>Separação de lixo</option>
                <option value='habitos'>Hábitos Alimentares</option>
                <option value='atividade'>Atividade Física</option>
                <option value='voluntariado'>Voluntariado</option>
            </Select>
        </div>

        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
            <FileInput type='file' accept='image/*'/>
            <Button type='button' gradientDuoTone='greenToBlue'size='sm' outline>Subir imagem</Button>
        </div>
        <ReactQuill theme='snow' placeholder='escreva seu post...' className='h-72 mb-12' required/>

        <Button type='submit' gradientDuoTone='greenToBlue'>Publicar</Button>


    </form>

    </div>;

}