import Image from "next/image";
import logo from "../public/logo.PNG";
import {InboxIcon, PhoneIcon} from "@heroicons/react/outline";

function Contact() {
    return (
        <section id="contact" className="w-full h-auto ">
            <div className="flex flex-col md:flex-row  p-8 md:p-0 w-full lg:w-4/5 h-auto m-auto  my-4 md:my-12">
            <div className="w-full  md:w-1/2 my-4 mt-12">
                {/* <div className="text-center mt-12 mb-6 border-2 border-black"> */}
                <h1 style={{fontFamily: 'Great Vibes, cursive'}} className="text-center drop-shadow-xl mt-12 mb-6 text-7xl font-extrabold">iGagan<span className="text-secondary">Deep95</span></h1>
   

                    {/* <Image src={logo} alt="logo" width={200} objectFit="contain" height={200}/> */}
                {/* </div> */}
                <div className="text-center md:text-left w-full md:w-2/3 lg:w-full xl:w-4/5 lg:p-4 flex flex-col justify-center m-auto text-gray-500 space-y-3">
                    <h1>Hi, I am a Front End Web Developer. striji. Lorem I-og stoljeća, kada je nepoznati tiskar uzeo tiskarsku galij</h1>
                    <h1 className=" font-bold lg:font-normal lg:text-xl">8 Shirebrook Crt, Brampton, ON, L6X 1Z2</h1>   
                    <h1 className="font-bold lg:text-2xl"><InboxIcon  className="w-8 h-7 inline-block" /> igagandeep95@gmail.com</h1>
                    <h1 className="xl:text-2xl  font-bold"><PhoneIcon  className="w-8 h-7 inline-block" /> +1 9052266334</h1>
                </div>
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-8">
                <div className="lg:w-full">
                <h1 className="font-extrabold text-3xl  text-center md:text-left mt-4 mb-8">Contact Me</h1>
                <div>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                    Username
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                        </div>
                        <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                    Email
                                </label>
                                <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Email" />
                        </div>

                        <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                    Message
                                </label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message"  placeholder="Username" />
                        </div>
                        <button className="bg-primary hover:bg-primary   text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Send Message
                        </button>
                    </form>
                    </div>
                </div>
            </div>
            </div>                        
        </section>
    )
}

export default Contact
