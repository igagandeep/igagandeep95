/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import dp from "../public/dp.jpg";

function About() {
    return (
        <section id="about" className=" grid sm:grid-cols-12  sm:gap-4  h-auto  py-8">
             <div className="flex justify-center p-14 sm:col-start-2 sm:col-end-6">
                <Image   src={dp}  alt="profilepic" className="object-contain"   />
             </div>
             <div className="sm:col-start-6 sm:col-end-12 px-16 sm:py-32 sm:px-20  pb-8  space-y-4" >
                 <h1 className="text-2xl text-secondary font-bold">Gagandeep Guru</h1>
                 <h3 className="font-bold">I' m a Passionate <span className="text-secondary">Web Developer</span></h3>
                 <p className="text-gray-500">From the moment I produced “Hello World” in the console of my first application, I knew I was hooked into the world of web development. But Web Development has never been “just a job” for me, it’s offered an engaging challenege to continually learn and improve my skills in creating high-quality softwares. What started with simple “Hello World” has become a full fledged passion that only gets more exciting as the years go by.</p>
                 <p className="text-gray-500">I have more than a year of experience in designing responsive web applications using web technologies like Javascript, React, HTML5, CSS3, Tailwind.</p>
                <p style={{fontFamily: 'Great Vibes, cursive'}}>Gagan Deep</p>
                <button className="bg-secondary my-3 p-2 text-white animate-pulse">View Portfolio</button>
                
             </div>   

        </section>
    )
}

export default About
