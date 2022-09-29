import React from 'react';

const HeroContainer = () => {
	return (
		<div className='grid grid-col-1 md:grid-cols-2 gap-2 w-full h-screen'>
			<div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
				<div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
					<p className='text-base text-orange-500 font-semibold'>
						Bike Delivery
					</p>
					<div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
						<img
							alt='Bike Delivery'
							src='https://img.freepik.com/free-vector/express-courier-scooter-shipping-order_74855-6447.jpg?w=1380&t=st=1664247841~exp=1664248441~hmac=36f311a1b018b031c88380679944170750d3ec3b1445e34e3a377abddd259915'
							className='w-full h-full object-contain'
						/>
					</div>
				</div>
				<p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>
					The Fastest Delivery in
					<span className='text-orange-600 text-[3rem] lg:text-[5rem]'>
						Your City
					</span>
				</p>
				<p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
					iusto obcaecati eum voluptas officiis eligendi? Harum maxime facere
					maiores voluptates sunt, suscipit, debitis quo, minima at excepturi
					commodi consectetur velit.
				</p>
				<button
					type='button'
					className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'
				>
					Order Now
				</button>
			</div>
			<div className='py-2 bg-blue-400 flex-1'></div>
		</div>
	);
};

export default HeroContainer;
