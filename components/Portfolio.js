import Image from "next/image";
import hulu from "../public/hulu2.png";
import eshopmobo from "../public/eshopmobo.PNG";
import eshop from "../public/eshop.PNG";
import igagandeep95 from "../public/igagandeep95.PNG";
import covid from "../public/covid19.png";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function Portfolio() {
    return (
        <section className=" py-8 h-auto ">
            <h1 className="text-center text-3xl font-bold py-5">MY WORK</h1>
            <div className="mt-8 grid grid-cols-12 shadow-md  h-auto">
            <div className="mt-8 flex  justify-center  order-2 col-span-12 md:col-span-5 md:order-1 ">
                    <div className="mt-12 w-96 space-y-6 p-4">
                        <h1 className="font-bold text-2xl">E-SHOP</h1>
                        <p className="">Amazon redesign with a modern UI, complete E-Commerce functionality including Payment Processing (Stripe API) and User Authentication (Firebase).</p>
                        <p className="bg-gray-100 p-2">Tech Stack: ReactJs, Axios, Single Page Application</p><br/>
                        <Link href="https://hulu-clone-two-eta.vercel.app/" ><a className="bg-secondary py-2 px-4 rounded-2xl text-white" target="_blank">View Portfolio</a></Link>
                        <Link href="https://github.com/igagandeep/hulu_clone"><a  className="mx-4 text-lg text-secondary" target="_blank" >View Code</a></Link>
                    </div>
                </div>

                <div className="mt-8 md:col-span-7 col-span-12 flex justify-center order-1 md:order-2 ">
                    <div className="w-4/5 h-full relative ">
                        <Image src={eshop}   objectFit="contain" alt="eshop"/>
                        {/* <div className="absolute border-4 border-black md:w-52 sm:w-40 w-36 md:-mt-64">
                            <Image src={eshopmobo}  />
                        </div>   */}
                    </div>
                </div>
            </div>
            <div className="bg-white p-8 mt-8 grid grid-cols-12   shadow-md h-auto">
            <div className="mt-8 flex  justify-center  order-2 col-span-12 md:col-span-5  ">
                    <div className="mt-12 w-96 space-y-6 p-4">
                        <h1 className="font-bold text-2xl">Hulu Clone</h1>
                        <p className="">A compact single page application to browse and search for your favorite Movies and TV Shows. API provided by themoviedb.org</p>
                        <p className="bg-gray-100 p-2">Tech Stack: ReactJs, Axios, Single Page Application</p><br/>
                        <Link href="https://hulu-clone-two-eta.vercel.app/" ><a className="bg-secondary py-2 px-4 rounded-2xl text-white" target="_blank">View Portfolio</a></Link>
                        <Link href="https://github.com/igagandeep/hulu_clone"><a  className="mx-4 text-lg text-secondary" target="_blank" >View Code</a></Link>
                    </div>
                </div>

                <div className="mt-8 md:col-span-7 col-span-12 flex justify-center ">
                    <div className="w-4/5 h-full relative">
                        <Image src={hulu}   objectFit="contain" alt="eshop"/>
                        {/* <div className="absolute border-4 border-black md:w-52 sm:w-40 w-36 md:-mt-64">
                            <Image src={eshopmobo}  />
                        </div>   */}
                    </div>
                </div>
            </div>

            <div className="mt-4 grid grid-cols-12 p-8 h-auto shadow-sm">
            <div className="mt-4 flex  justify-center  order-2 col-span-12 md:col-span-5 md:order-1  ">
                    <div className="mt-12 w-96 space-y-6 p-4">
                        <h1 className="font-bold text-2xl">Covid-19 Tracker</h1>
                        <p className="">Amazon redesign with a modern UI, complete E-Commerce functionality including Payment Processing (Stripe API) and User Authentication (Firebase).</p>
                        <p className="bg-gray-100 p-2">Tech Stack: ReactJs, Axios, Single Page Application</p><br/>
                        <Link href="https://hulu-clone-two-eta.vercel.app/" ><a className="bg-secondary py-2 px-4 rounded-2xl text-white" target="_blank">View Portfolio</a></Link>
                        <Link href="https://github.com/igagandeep/hulu_clone"><a  className="mx-4 text-lg text-secondary" target="_blank" >View Code</a></Link>
                    </div>
                </div>

                <div className="mt-4 md:col-span-7 col-span-12 flex justify-center order-1 md:order-2 ">
                    <div className="w-4/5 h-full relative ">
                        <Image src={covid}   objectFit="contain" alt="covid"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
