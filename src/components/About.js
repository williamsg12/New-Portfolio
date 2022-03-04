import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import {FaChevronDown} from 'react-icons/fa'


const About = () => {
    return (
			<div className='max-w-4xl mt-20 mx-auto'>

				<p className='text-2xl text-pink-300 md:text-4xl font-bold text-center'> 
                Hi!!</p>
                
				<p className='text-base text-pink-300 md:text-2xl font-bold  text-center'>		
					My name is Gary Williams Jr. I am a Software Developer with a deep
					passion for programming. In my youth I mananged to get into an
					engineering program for a charter school in my local area which
					ignited my passion. After Graduating Highschool I traveled outside of
					my home state of Georgia To Chicago,Illinois,where I was accepted for
					a web developement internship.
				</p>



                <ScrollIntoView>
                    <div className='mx-auto p-20'>
                        <FaChevronDown className='animate-pulse mx-auto text-2xl text-pink-300' />
                            
                        </div>
                </ScrollIntoView>
			</div>
		);
};

export default About;