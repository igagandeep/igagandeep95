/* eslint-disable react/no-unescaped-entities */
import Navbar from "./Navbar";
import Image from 'next/image';
import dp from "../public/dp.jpg";
import Typical from 'react-rotating-text';
import ParticlesComponent from "./ParticlesComponent";



function Header() {
    return (
        <div id="home">
            <Navbar />
            <div className="relative bg-cover bg-center bg-hero-pattern w-full h-screen">
                <div className="bg-primary opacity-80 absolute w-full h-screen " >
                    <ParticlesComponent />
                </div>
                <div className="relative text-white   z-50 h-screen flex items-center">
                        <div className="mx-auto w-4/5 text-center  h-auto " >
                            <Image className="object-fill rounded-full " src={dp} width={200} height={200}    alt="dp"/>
                            <br/>
                            <h2 className="text-xl sm:text-3xl font-bold">I Am {' '} 
                            <Typical  style={{color:"#e54b4b"}} items={['Full-Stack Developer','Front-End Developer']} />   
                            </h2>
                            <p className="md:px-24 lg:px-72  text-gray-500 ">I 'm a Web Developer with over a year of experience with all stages of the development cycle for dynamic web projects.</p>    
                            <button className="bg-secondary my-3 p-2 rounded-lg">Download CV
                            </button>
                        </div>
                </div> 
            </div>
        </div>
    )
}

export default Header
