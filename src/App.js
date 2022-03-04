import './App.css';
import  Cards from './components/Cards'
import About from './components/About';
import Footer from './components/Footer';
import Skills from './components/Skills';
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';

function App()


{
  useEffect(() =>
  {AOS.init({
    once: true,
  })}
  )
  return (
		<div className='min-h-screen py-10 px-3 sm: px-5 bg-blue-600'>
			<div
				data-aos='fade-down'
				data-aos-easing='linear'
				data-aos-duration='1500'>
				<Cards />
			</div>
			<div
				data-aos='fade-right'
				data-aos-offset='300'
				data-aos-easing='ease-in-sine'>
				<About />
			</div>
			<div
				data-aos='fade-down'
				data-aos-easing='linear'
				data-aos-duration='1500'>
				<Skills />
			</div>
			<div
				data-aos='fade-down'
				data-aos-easing='linear'
				data-aos-duration='1500'>
			<Footer />
          </div>
		</div>
	);
}

export default App;
