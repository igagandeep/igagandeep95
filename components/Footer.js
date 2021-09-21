import {SocialIcon} from "react-social-icons";
function Footer() {
    return (
        <footer className="bg-gray-100  font-semibold   md:text-xl p-4">
            <div className="flex flex-col md:flex-row justify-between  w-full md:w-4/5  m-auto">
            <div className="text-center">
                <p>&copy; 2021 igagandeep95, All rights reserved.</p>
            </div>
            <div className="">
            <div className="space-x-1  my-2 md:my-0 flex justify-center ">
                    <SocialIcon  style={{width:"30px", height:"30px"}} url="https://facebook.com" /> 
                    <SocialIcon  style={{width:"30px", height:"30px"}} url="https://linkedin.com" /> 
                    <SocialIcon  style={{width:"30px", height:"30px"}} url="https://twitter.com" />   
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer
