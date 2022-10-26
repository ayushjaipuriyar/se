import React, { useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
const RowContainer = ({ flag, data, scrollValue }) => {
	// console.log(data);
	const rowContainer = useRef();
	const [items, setItems] = useState([]);
	const [{ cartItems }, dispatch] = useStateValue();
	const addToCart = () => {
		dispatch({
			type: actionType.SET_CART_ITEMS,
			cartItems: items,
		});
		localStorage.setItem('cartItems', JSON.stringify(items));
	};
	useEffect(() => {
		rowContainer.current.scrollLeft += scrollValue;
	}, [scrollValue]);
	useEffect(() => {
		addToCart();
	}, [items]);
	return (
		<div
			ref={rowContainer}
			className={`w-full flex items-center my-12  gap-3  scroll-smooth ${
				flag
					? 'overflow-x-scroll scrollbar-none'
					: 'overflow-x-hidden flex-wrap justify-center'
			}`}
		>
			{data && data.length > 0 ? (
				data.map((item) => (
					<div
						key={item.id}
						className='w-300 min-w-[300px] md:w-340 md:min-w-[340px] h-auto shadow-md bg-cardOverlay rounded-lg p-2 backdrop-blur-lg my-12 hover:drop-shadow-lg flex flex-col items-center justify-between'
					>
						<div className='w-full flex items-center justify-between'>
							<motion.div
								whileHover={{ scale: 1.2 }}
								className='w-4- h-40 -mt-8 drop-shadow-2xl'
							>
								<img
									src={item.imageUrl}
									alt={item.title}
									className='w-full h-full object-contain'
								/>
							</motion.div>
							<motion.div
								whileTap={{ scale: 0.75 }}
								className='w-8 h-8 rounded-full bg-red-600 cursor-pointer flex items-center justify-center hover:shadow-md'
								onClick={() => setItems([...cartItems, item])}
							>
								<MdShoppingBasket className='text-white' />
							</motion.div>
						</div>
						<div className='w-full flex flex-col gap-4 items-end justify-end'>
							<p className='text-textColor font-semibold text-base md:text-lg'>
								{item.title}
							</p>
							<p className='mt-1 text-sm text-gray-500'>
								{item.calories}g Calories
							</p>
							<div className='flex items-center gap-8'>
								<p className='text-lg text-headingColor font-semibold'>
									<span className='text-sm text-red-500'>Rs.</span> {item.price}
								</p>
							</div>
						</div>
					</div>
				))
			) : (
				<div className='w-full flex flex-col items-center justify-center'>
					<img
						src='https://media.istockphoto.com/vectors/no-result-not-found-or-404-web-page-error-illustration-vector-id846795366?k=20&m=846795366&s=170667a&w=0&h=zxv1xZyZCeVhL9q_05UuxP_8F-Dmt-4NxS3DEGhkn6I='
						alt='Not Found'
						className='h-420'
					/>
					<p className='text-xl text-headingColor font-semibold my-2'>
						Items not available!
					</p>
				</div>
			)}
		</div>
	);
};

export default RowContainer;
