import React from 'react';
import logo from '../Images/logo.png';
import {
	FaGithub,
	FaYoutube,
	FaRegEnvelope,
	FaInstagramSquare,
} from 'react-icons/fa';

const Cards = () => {
	return (
		<div className='w-full'>
			<div className='flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5'>
				<div className=''>
					<img
						className='mx-auto drop-shadow-sm'
						src={logo}
						alt='profile face'
					/>
				</div>
				<div className='text-center mt-5'>
					<div className='flex align-center justify-center mt-4'>
						<a
							className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-600 rounded-full hover:text-white transition-colors  ease-in delay-100 duration-300'
							href='https://github.com/williamsg12'>
							<FaGithub />
							<span class='sr-only'>Github</span>
						</a>
						<a
							className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors  ease-in delay-100 duration-300'
							href='https://www.youtube.com/channel/UCXC3BUIxo3QoloZ-Vl5c23g/featured'>
							<FaYoutube />
							<span class='sr-only'>YouTube</span>
						</a>

						<a
							className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-300 hover:bg-pink-300 rounded-full hover:text-white transition-colors ease-in delay-100 duration-300'
							href='mailto:williamsg1@outlook.com'>
							<FaRegEnvelope />
							<span class='sr-only'>Email</span>
						</a>
						<a
							className='text-xl m-1 p-1 sm:m-2 sm:p-2 text-black hover:bg-pink-300 
                        bg-gradient-to-r from-pink-300 rounded-full hover:text-white transition-colors ease-in delay-100 duration-300'
							href='https://www.instagram.com/just_giovonn/'>
							<FaInstagramSquare />
							<span class='sr-only'>Email</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
