import Image from "next/image";
import hulu from "../public/hulu.PNG";
import hulu_mobo from "../public/hulumobo.PNG";
import eshop from "../public/eshop.PNG";
import igagandeep95 from "../public/igagandeep95.PNG";
import covid from "../public/covid.PNG";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function Portfolio() {
    return (
        <section className="bg-gray-100 py-8 h-screen ">
            <h1 className="text-center text-3xl font-bold py-5">MY WORK</h1>
            <div className="grid grid-cols-12 border-2 gap-4 border-red-500 ">
                
                <div className="mt-4 col-span-12 space-y-6 p-8 order-2 md:order-1 md:col-start-2 md:col-end-6 border-red-500 border-2 ">
                    <h1 className="font-bold text-2xl">Hulu-Clone</h1>
                    <p className="">A compact single page application to browse and search for your favorite Movies and TV Shows. API provided by themoviedb.org</p>
                    <p className="bg-white p-2">Tech Stack: ReactJs, Axios, Single Page Application</p><br/>
                    <Link href="https://hulu-clone-two-eta.vercel.app/" ><a className="bg-secondary py-2 px-4 rounded-2xl text-white" target="_blank">View Portfolio</a></Link>
                    <Link href="https://github.com/igagandeep/hulu_clone"><a  className="mx-4 text-lg text-secondary" target="_blank" >View Code</a></Link>
                </div>
                <div className=" relative col-span-12 order-1 md:order-2 md:col-start-7  border-4 md:col-end-12 p-4 border-red-500   flex justify-center" >
                        <div className="relative  shadow-xl  border-2 rounded-xl h-96" >
                            <Image src={hulu}   height={1000} objectFit="fill"  alt="hulu" />
                            
                        <div className="absolute mt-16 ml-32 w-24 md:h-96  md:w-60 md:-mt-60 md:ml-64 border-solid shadow-borderShadow   border-gray-900 ">
                            <Image src={hulu_mobo}  height={0} objectFit="fill" alt="hulu" />
                        </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
