import React, { useRef } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';

const navItems = ['Nexus' , 'Vault' ,'Prologue', 'About', 'Contact']

const Navbar = () => {

    const navContainerRef = useRef(null);

  return (
    <div ref = {navContainerRef} className='fixed inset-x-0 top-4 z-50 h-6 border-none transition-all duration-700 sm:inset-x6'>
        <header className='absolute top-1/2 w-full -traslate-y-1/2'>
            <nav className='flex size-full items-center justify-around p-4'>
                <div className='flex items-center gap-7'>
                    <img src='/img/logo.png' alt='logo' className='w-10' />
                
                <Button
                id="product-button"
                title = "Products"
                rightIcon={<TiLocationArrow/>}
                containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1" 
                />
                <div className='flex h-full items-center'>
                    <div className='hidden md:block'>
                        {navItems.map((item)=>(
                            <a key={item} href={`#${item.toLowerCase()}`} className='nav-hover-btn'>
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
                <button className='ml-10 flex items-center space-x-0.5'>/</button>
                </div>

            </nav>
        </header>
        
    </div>
  )
}

export default Navbar