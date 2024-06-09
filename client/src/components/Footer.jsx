import React from 'react'
import {Footer} from 'flowbite-react';
import {Link} from 'react-router-dom';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-emerald-500'>
    <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
            <div className='mt-5'>
            <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-700 rounded-lg text-white">
             Impact
             </span>Play
             </Link>
            </div>

            <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm: gap-6'>
                <div>
                <Footer.Title title= 'About'/>
                <Footer.LinkGroup col>
                    <Footer.Link href='#' target='-blank'>
                        Lorem ipsum
                    </Footer.Link>

                    <Footer.Link href='/about' target='-blank' rel='noopener noreferrer'>
                        About
                    </Footer.Link>

                </Footer.LinkGroup>
                </div>


                <div>
                <Footer.Title title= 'Follow us'/>
                <Footer.LinkGroup col>
                    <Footer.Link href='https://github.com/KalianaBueno' target='-blank' rel='noopener noreferrer'>
                        GitHub
                    </Footer.Link>

                    <Footer.Link href='#'>
                        Lorem ipsum
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>

                <div>
                <Footer.Title title= 'Legal'/>
                <Footer.LinkGroup col>
                    <Footer.Link href='#'>
                        Política de privacidade
                    </Footer.Link>

                    <Footer.Link href='#'>
                        Termos e condições
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
            </div>
        </div>

        
    </div>
</Footer>
  );
}
