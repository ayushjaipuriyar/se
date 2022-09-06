import React from 'react';
import Logo from '../assets/img/logo.png';
import Avatar from '../assets/img/avatar.png';
import { FiShoppingCart } from 'react-icons/fi';
const Header = () => {
	return (
		<header className='fixed z-50 w-screen p-6 px-16'>
			{/* Desktop */}
			<div className='hidden md:flex w-full h-full items-center justify-between '>
				<div className='flex items-center gap-2'>
					<img src={Logo} className='w-10 object-cover' alt='Logo'></img>
					<p className='text-headingColor text-xl font-bold'> City</p>
				</div>
				<div className='flex items-center gap-8'>
					<ul className='flex items-center gap-8 '>
						<li className='text-base text-headingColor hover:text-headingColor duration-300 transition-all ease-in-out cursor-pointer'>
							Home
						</li>
						<li className='text-base text-headingColor hover:text-headingColor duration-300 transition-all ease-in-out cursor-pointer'>
							Menu
						</li>
						<li className='text-base text-headingColor hover:text-headingColor duration-300 transition-all ease-in-out cursor-pointer'>
							About Us{' '}
						</li>
						<li className='text-base text-headingColor hover:text-headingColor duration-300 transition-all ease-in-out cursor-pointer'>
							Service
						</li>
					</ul>
					<div className='relative flex items-center justify-center'>
						<FiShoppingCart className='text-textColor text-2xl cursor-pointer' />
						<div className='absolute -top-2 -right-4 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
							<p className='text-sm text-white font-semibold '>2</p>
						</div>
					</div>
					<img
						src={Avatar}
						className='w-15 min-w-[45px] h-10 min-h-[40px] drop-shadow-2xl'
						alt='avatar'
					/>
				</div>
			</div>
			{/* Mobile */}
			<div className='flex md:hidden w-full h-full '></div>
		</header>
	);
};

export default Header;
