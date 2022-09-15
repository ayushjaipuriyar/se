import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase.config';
import { motion } from 'framer-motion';
import Logo from '../assets/img/logo.png';
import Avatar from '../assets/img/avatar.png';
import { FiShoppingCart, FiLogOut, FiPlus } from 'react-icons/fi';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {
	const firebaseAuth = getAuth(app);
	const provider = new GoogleAuthProvider();
	const [{ user }, dispatch] = useStateValue();
	const [isMenu, setisMenu] = useState(false);
	const login = async () => {
		if (!user) {
			const {
				user: { refreshToken, providerData },
			} = await signInWithPopup(firebaseAuth, provider);
			dispatch({ type: actionType.SET_USER, user: providerData[0] });
			localStorage.setItem('user', JSON.stringify(providerData[0]));
		} else {
			setisMenu(!isMenu);
		}
	};
	return (
		<header className='fixed z-50 w-screen p-6 px-16'>
			{/* Desktop */}
			<div className='hidden md:flex w-full h-full items-center justify-between '>
				<Link to={'/'} className='flex items-center gap-2'>
					<img src={Logo} className='w-10 object-cover' alt='Logo'></img>
					<p className='text-headingColor text-xl font-bold'> City</p>
				</Link>
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
					<div className='relative'>
						<motion.img
							whileTap={{ scale: 0.6 }}
							src={user ? user.photoURL : Avatar}
							className='w-15 min-w-[45px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
							alt='avatar'
							onClick={login}
						/>
						{isMenu && (
							<motion.div
								initial={{ opacity: 0, scale: 0.6 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.6 }}
								className='w-40 bg-gray-50  shadow-sl rounded-lg absolute flex flex-col top-12 right-0'
							>
								{user && user.email === 'ayushjaipuriyar21@gmail.com' && (
									<Link to={'/createItem'}>
										<p className='px-4 py-2 flex items-center cursor-pointer gap-3 hover:bg-slate-100 transition-all duration-100 ease-out text-textColor text-base'>
											New Item <FiPlus />
										</p>
									</Link>
								)}

								<p className='px-4 py-2 flex items-center cursor-pointer gap-3 hover:bg-slate-100 transition-all duration-100 ease-out text-textColor text-base'>
									Logout
									<FiLogOut />
								</p>
							</motion.div>
						)}
					</div>
				</div>
			</div>
			{/* Mobile */}
			<div className='flex md:hidden w-full h-full '></div>
		</header>
	);
};

export default Header;
