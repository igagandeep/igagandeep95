import Image from "next/image";
import hulu from "../public/hulu2.png";
import eshopmobo from "../public/eshopmobo.PNG";
import eshop from "../public/eshop.PNG";
import igagandeep95 from "../public/igagandeep95.PNG";
import covid from "../public/covid19.png";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {projects_detail} from "../utils/projects_detail";

function Portfolio() {
    return (
        <section id="portfolio" className="py-8 h-auto  mb-6">
            <h1 className="text-center text-3xl font-bold py-5">MY WORK</h1>
            
            {/* Project Container */}
            <div className="bg-white p-8 mt-8 grid grid-cols-12    h-auto">
            <div className="mt-8 flex  justify-center  order-2 md:order-1 col-span-12 md:col-span-5  ">
                    <div className="mt-12 w-96 space-y-6 p-4">
                        <h1 className="font-bold text-2xl">E-shop</h1>
                        <p className="">Based on the e-commerce application, This application will allows you to buy products online. User can resgiter, add products to the shopping cart and purshase order</p>
                        <p className="bg-gray-100 p-2">Tech Stack: React, Axios, Redux, Stripe, Firebase</p><br/>
                        <Link href="https://eshop-c257f.web.app/" ><a className="bg-secondary py-2 px-4 rounded-2xl text-white" target="_blank">View Portfolio</a></Link>
                        <Link href="https://github.com/igagandeep/E-Fashion"><a  className="mx-4 text-lg text-secondary" target="_blank" >View Code</a></Link>
                    </div>
                </div>

                <div className="mt-8 md:col-span-7 col-span-12 order-1 md:order-2  flex justify-center ">
                    <div className="w-4/5 h-full relative">
                        <Image src={eshop}   objectFit="contain" alt="eshop"/>
                        
                 </div>
                </div>
            </div>



            <div className="bg-white p-8 mt-8 grid grid-cols-12   h-auto">
            <div className="mt-8 flex  justify-center  order-2 col-span-12 md:col-span-5  ">
                    <div className="mt-12 w-96 space-y-6 p-4">
                        <h1 className="font-bold text-2xl">Hulu Clone</h1>
                        <p className="">A compact single page application to browse and search for your favorite Movies and TV Shows. API provided by themoviedb.org</p>
                        <p className="bg-gray-100 p-2">Tech Stack: Next JS, Axios, Tailwind CSS, Flexbox</p><br/>
                        <Link href="https://hulu-clone-two-eta.vercel.app/" ><a className="bg-secondary py-2 px-4 rounded-2xl text-white" target="_blank">View Portfolio</a></Link>
                        <Link href="https://github.com/igagandeep/hulu_clone"><a  className="mx-4 text-lg text-secondary" target="_blank" >View Code</a></Link>
                    </div>
                </div>

                <div className="mt-8 md:col-span-7 col-span-12 flex justify-center ">
                    <div className="w-4/5 h-full relative">
                        <Image src={hulu}   objectFit="contain" alt="eshop"/>
                        
                 </div>
                </div>
            </div>

            <div className="mt-4 grid grid-cols-12 p-8 h-auto ">
            <div className="mt-4 flex  justify-center  order-2 col-span-12 md:col-span-5 md:order-1  ">
                    <div className="mt-12 w-96 space-y-6 p-4">
                        <h1 className="font-bold text-2xl">Covid-19 Tracker</h1>
                        <p className="">Based on the Covid 19 statistics. This application shows live data of the corona virus cases worldwide.</p>
                        <p className="bg-gray-100 p-2">Tech Stack: React, Axios, Single Page Application, Bootstrap, Chart.js</p><br/>
                        <Link href="https://covid19-trackerapp.netlify.app/" ><a className="bg-secondary py-2 px-4 rounded-2xl text-white" target="_blank">View Portfolio</a></Link>
                        <Link href="https://github.com/igagandeep/covid19tracker"><a  className="mx-4 text-lg text-secondary" target="_blank" >View Code</a></Link>
                    </div>
                </div>

                <div className="mt-4 md:col-span-7 col-span-12 flex justify-center order-1 md:order-2 ">
                    <div className="w-4/5 h-full relative ">
                        <Image src={covid}   objectFit="contain" alt="covid"/>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <Link href="#" >
                    <a  className="bg-primary rounded-sm p-2 text-white text-xl my-8">View More</a>
                </Link>
            </div> 
        </section>
    )
}

export default Portfolio
