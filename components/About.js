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
                 <p className="text-gray-500">Obviously I'm a Web Designer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English.
                 </p>
                 <p className="text-gray-500">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                 {/* <Image src={signature} className="border-2" alt="signature" /><br/>    */}
                <p style={{fontFamily: 'Great Vibes, cursive'}}>Gagan Deep</p>
                <button className="bg-secondary my-3 p-2 text-white">View Portfolio</button>
                
             </div>   

        </section>
    )
}

export default About
