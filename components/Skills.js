import html5 from "../public/html-5 (2).png";
import css from "../public/css-3.png";
import js from "../public/javascript.png";
import react from "../public/react.png";

import Image from "next/image";
function Skills() {
    return (
        <section className="p-14 h-screen ">
            <h1 className="text-center text-3xl font-bold">Skills</h1>
            <div className="grid sm:grid-cols-3 md:grid-cols-4 p-20 ">
                <div className="border-2 border-black flex justify-center rounded-full w-16 h-16">
                    <Image src={html5} alt="html5" style={{ border:"1px solid black" }}/>
                </div>
                <div className="border-2 border-black">
                    <Image src={css} alt="html5" style={{ border:"1px solid black" }}/>
                </div>
                <div className="border-2 border-black">
                    <Image src={js} alt="html5" style={{ border:"1px solid black" }}/>
                </div>

                <div className="border-2 border-black">
                    <Image src={react} alt="html5" style={{ border:"1px solid black" }}/>
                </div>
        </div>

        </section>
    )
}

export default Skills
