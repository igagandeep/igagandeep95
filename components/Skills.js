import {useState} from "react";

function Skills() {
    const [html, setHtml] = useState('HTML5');
    const [css, setCss] = useState('CSS3');
    const [js, setJs] = useState('JS');
    const [react, setReact] = useState('React');
    const [next, setNext] = useState('Next');
    const [redux, setRedux] = useState('Redux');
    const [git, setGit] = useState('Git');
    const [node, setNode] = useState('Node');
    const [tailwind, setTailwind] = useState('Tailwind');
    const [firebase, setFirebase] = useState('Firebase');

    return (
        <section className="p-4 h-auto  bg-primary ">
            <h1 className="text-center text-white text-3xl font-bold mt-9">SKILLS</h1>
            <div className="flex flex-wrap  justify-center p-0 md:p-20 w-full md:w-3/4 m-auto   gap-8 md:gap-12">
                <div onMouseOver={() => {setHtml('80%')}} onMouseLeave={() => {setHtml('HTML5')}} className="animate-pulse hover:transition-transform hover:duration-700 hover:delay-500 hover:ease-out  border-white text-xl shadow-lg bg-html text-white rounded-full w-32 h-32 ">
                    <h2 className="text-center mt-12 " >{html}</h2>
                </div>
                <div onMouseOver={() => {setCss('90%')}} onMouseLeave={() => {setCss('CSS3')}} className=" hover:transition-transform hover:duration-700 hover:delay-500 hover:ease-out  border-white text-xl shadow-lg bg-css text-white rounded-full w-32 h-32 ">
                    <h2 className="text-center mt-12" >{css}</h2>
                </div>

                <div onMouseOver={() => {setJs('80%')}} onMouseLeave={() => {setJs('JS')}} className="animate-pulse hover:transition-transform hover:duration-700 hover:delay-500 hover:ease-out  border-white text-xl shadow-lg bg-js text-white rounded-full w-32 h-32 ">
                    <h2 className="text-center mt-12" >{js}</h2>
                </div>
                <div onMouseOver={() => {setReact('80%')}} onMouseLeave={() => {setReact('React')}} className=" hover:transition-transform hover:duration-700 hover:delay-500 hover:ease-out  border-white text-xl shadow-lg bg-react text-white rounded-full w-32 h-32 ">
                    <h2 className="text-center mt-12" >{react}</h2>
                </div>
                <div onMouseOver={() => {setNext('70%')}} onMouseLeave={() => {setNext('Next')}} className="animate-pulse hover:transition-transform hover:duration-700 hover:delay-500 hover:ease-out  border-white text-xl shadow-lg bg-next text-white rounded-full w-32 h-32 ">
                    <h2 className="text-center mt-12" >{next}</h2>
                </div>
                <div onMouseOver={() => {setRedux('60%')}} onMouseLeave={() => {setRedux('Redux')}} className=" hover:transition-transform hover:duration-700 hover:delay-500 hover:ease-out  border-white text-xl shadow-lg bg-redux text-white rounded-full w-32 h-32 ">
                    <h2 className="text-center mt-12" >{redux}</h2>
                </div>
                <div onMouseOver={() => {setGit('90%')}} onMouseLeave={() => {setGit('Git')}} className="animate-pulse hover:transition-transform hover:duration-700 hover:delay-500 hover:ease-out  border-white text-xl shadow-lg bg-git text-white rounded-full w-32 h-32 ">
                    <h2 className="text-center mt-12" >{git}</h2>
                </div>

                <div onMouseOver={() => {setNode('40%')}} onMouseLeave={() => {setNode('Node')}} className=" hover:transition-transform hover:duration-700 hover:delay-500 hover:ease-out  border-white text-xl shadow-lg bg-node text-white rounded-full w-32 h-32 ">
                    <h2 className="text-center mt-12" >{node}</h2>
                </div>
                <div onMouseOver={() => {setTailwind('90%')}} onMouseLeave={() => {setTailwind('Tailwind')}} className="animate-pulse hover:transition-transform hover:duration-700 hover:delay-500 hover:ease-out  border-white text-xl shadow-lg bg-tailwind text-white rounded-full w-32 h-32 ">
                    <h2 className="text-center mt-12" >{tailwind}</h2>
                </div>
                <div onMouseOver={() => {setFirebase('70%')}} onMouseLeave={() => {setFirebase('Firebase')}} className=" hover:transition-transform hover:duration-700 hover:delay-500 hover:ease-out  border-white text-xl shadow-lg bg-firebase text-white rounded-full w-32 h-32 ">
                    <h2 className="text-center mt-12" >{firebase}</h2>
                </div>


            </div>


        </section>
    )
}

export default Skills
