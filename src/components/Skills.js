import React from 'react';
import { FaReact, FaHtml5, FaCss3 ,} from 'react-icons/fa';
import {
	DiBootstrap,
	DiGitBranch,
	DiJavascript1,
	DiLinux,
	DiPython,
} from 'react-icons/di';
import { SiKotlin } from 'react-icons/si';
const Skills = () => {
	return (
		<div className='max-w-4xl mx-auto justify-center py-12' id='tech'>
			<p className='text-2xl text-black  md:text-4xl font-bold text-center pt-4'>
				My Skills
			</p>
			<div className='flex flex-wrap justify-center pt-2'>
				<div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
					<FaReact color='#2196f3' className='mx-auto text-4xl' />
					<p className='mt-6 text-xl font-semibold text-center'>ReactJS</p>
				</div>
				<div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
					<FaHtml5 color='#fc7303' className='mx-auto text-4xl' />
					<p className='mt-6 text-xl font-semibold text-center'>HTML</p>
				</div>
				<div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
					<FaCss3 color='#2196f3' className='mx-auto text-4xl' />
					<p className='mt-6 text-xl font-semibold text-center'>CSS</p>
				</div>
				<div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
					<DiBootstrap color='#452db3' className='mx-auto text-4xl' />
					<p className='mt-6 text-xl font-semibold text-center'>Bootstrap</p>
				</div>
				<div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
					<DiGitBranch color='#61615d' className='mx-auto text-4xl' />
					<p className='mt-6 text-xl font-semibold text-center'>Github</p>
				</div>
				<div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
					<DiJavascript1 color='#fcff2e' className='mx-auto text-4xl' />
					<p className='mt-6 text-xl font-semibold text-center'>Javascript</p>
				</div>
				<div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
					<DiLinux color='#21211f' className='mx-auto text-4xl' />
					<p className='mt-6 text-xl font-semibold text-center'>Linux</p>
				</div>
				<div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
					<DiPython color='#fcff2e' className='mx-auto text-4xl' />
					<p className='mt-6 text-xl font-semibold text-center'>Python</p>
				</div>
				<div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
					<SiKotlin color='#a832a4' className='mx-auto text-4xl' />
					<p className='mt-6 text-xl font-semibold text-center'>Some Kotlin</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
