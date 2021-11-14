import {useEffect} from "react";
import {motion} from "framer-motion";

const About = () => {

    useEffect(() => {
        console.log('About is mounted!')
    },[])
    return(

            <div className='general-about-container'>
                    <h2 className='about-header'>
                        About
                    </h2 >        
                <motion.div initial={{y: -100, opacity:0, scale: 0.8}} animate={{y: 0, opacity:1,scale:1}}  className='about-container'>
                    <p className='about-text'>Covid Tracker
                        is made by one developer to achieve a simple goal, make a responsive, friendly UI
                        to navigate Covid statistics without any problems along the way.
                        This Website Uses an API to get Covid data and puts it to the website via a server.
                        I also made this website in order to define my skills even more.
                        The data you see on the webpage is actually supposed to be the real covid 19 data!
                     </p>
                </motion.div>
            </div>
    )

}

export default About;