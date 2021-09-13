import Image from "next/image";
import hulu from "../public/hulu.PNG";
import eshop from "../public/eshop.PNG";
import igagandeep95 from "../public/igagandeep95.PNG";
import covid from "../public/covid.PNG";

function Portfolio() {
    return (
        <section className="bg-gray-100 py-8 ">
            <h1 className="text-center col-span-12 text-3xl font-bold py-5">PORTFOLIO</h1>
            <div className=" p-4 md:px-32 grid sm:grid-cols-2 md:grid-cols-3 gap-6 col-span-12 sm:col-span-6 md:col-start-3 md:col-end-6">
                <div className="my-4 p-4   group cursor-pointer  transition duration-500 ease-out transform sm:hover:-translate-y-6 hover:z-50 text-center bg-white shadow-lg">
                    <a href="https://eshop-c257f.web.app/" target="_blank" rel="noreferrer">
                    <Image  className="object-cover" src={eshop}  height={1100}   alt="sss"/>                   
                    </a>
                    <h1>E-Fashion</h1>
                </div>
                <div className="my-4 p-4 group cursor-pointer transition duration-500 ease-out transform sm:hover:-translate-y-6 hover:z-50 text-center  bg-white shadow-lg">
                    <a href="https://hulu-clone-two-eta.vercel.app/" target="_blank" rel="noreferrer">
                    <Image  src={hulu}  height={1100}   alt="sss"/>                   
                    </a>
                    <h1>Hulu</h1>
                </div>
                <div className="my-4 p-4 group cursor-pointer transition duration-500 ease-out transform sm:hover:-translate-y-6 hover:z-50 text-center  bg-white shadow-lg">
                    <a href="https://igagandeep95.vercel.app/" target="_blank" rel="noreferrer">
                    <Image  src={igagandeep95}  height={1100}   alt="sss"/>                   
                    </a>
                    <h1>Portfolio</h1>
                </div>

                <div className="my-4 p-4 group cursor-pointer transition duration-500 ease-out transform sm:hover:-translate-y-6 hover:z-50 text-center  bg-white shadow-lg">
                    <a href="https://covid19-trackerapp.netlify.app/" target="_blank" rel="noreferrer">
                    <Image  src={covid}  height={1100}   alt="covid19"/>                   
                    </a>
                    <h1>covid19 Tracker</h1>
                </div>
                
                
                
                
                
             
            </div>
        </section>
    )
}

export default Portfolio
