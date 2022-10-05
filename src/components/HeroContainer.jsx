import React from 'react';
import { heroData } from '../utils/data';

const HeroContainer = () => {
	return (
		<section className='grid grid-col-1 md:grid-cols-2 gap-2 w-full' id='hero'>
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
			<div className='py-2 flex-1 items-center relative'>
				{/* <div classname="w-full flex item-center justify-center "></div></div> */}
				<img
					src='https://i.pinimg.com/originals/6a/8e/31/6a8e31278c5dfc6cb981bf310a41b78c.jpg'
					className='ml-auto h-370 lg:w-auto lg:h-685 rounded-full '
					alt='H'
				/>
				<div className='w-full h-full absolute top-0 left-0 flex items-center justify-center bg py-4 gap-2 flex-wrap lg:px-52 '>
					{/* <div className='w-190 bg-cardOverlay backdrop-blur-md rounded-3xl p-4 flex flex-col items-center justify-center'>
						<img alt='ice-cream' src={i1} className='w-40 -mt-20' />
						<p className='text-lg font-semibold text-textColor mt-4'>
							Ice Cream
						</p>
						<p className='text-sm text-lighttextGray font-semibold my-3'>
							Chocolate & vanilla
						</p>
						<p className='text-sm font-semibold text-headingColor'>
							<span className='text-xs text-red-600'>Rs.</span>330
						</p>
					</div> */}
					{heroData &&
						heroData.map((n) => (
							<div
								key={n.id}
								className='md:lg:w-190  bg-cardOverlay backdrop-blur-md rounded-3xl p-4 flex flex-col items-center justify-center drop-shadow-lg'
							>
								<img
									alt='ice-cream'
									src={n.imgSrc}
									className='w-20 lg:w-40 -mt-10 lg:-mt-20'
								/>
								<p className='text-base lg:text-lg font-semibold text-textColor mt-2 lg:mt-4'>
									{n.name}
								</p>
								<p className='tex-[10px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>
									{n.dsc}
								</p>
								<p className='text-sm font-semibold text-headingColor'>
									<span className='text-xs text-red-600'>Rs.</span>
									{n.price}
								</p>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default HeroContainer;
