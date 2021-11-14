import React from "react";
import {motion} from "framer-motion";

const Socials = () =>{
    return(
        <div>
            <h1 className='socials-header'>Socials</h1>
            <motion.p initial={{y: -100, scale: 0.5, opacity: 0}} animate={{y: 0, scale: 1, opacity: 1}} style={{textAlign: 'center',
                       fontSize: '1.1vw' }}>Here are my socials, If you'll like a customized website; <br/> you can reach me at my linkedin,
                if you just want to take a look at my portfolio, you can check out my Github.
                <br/> You can also check out my Instagram!
                </motion.p>
            <motion.div initial={{y: -100, opacity: 0, scale: 0.7}} animate={{y: 0, opacity:1,scale:1}} className='socials-container'>
                <motion.div initial={{y: -100, scale: 0.5, opacity: 0}} animate={{y: 0, scale: 1, opacity: 1}} transition={{delay: .4}} className='github-container'>
                    <h2 className='github-header'>Github</h2>
                    <a target='_blank' href="https://github.com/oguzBatur"><i className="fab fa-github"/></a>
                </motion.div>
                <motion.div initial={{y: -100, scale: 0.5, opacity: 0}} animate={{y: 0, scale: 1, opacity: 1}} transition={{delay: .8}} className='linkedin-container'>
                    <h2 className='linkedin-header'>Linkedin</h2>
                    <a target='_blank' href="https://linkedin.com/in/oğuz-batur-sarıöz-a38b1b1b5"><i className="fab fa-linkedin"/></a>
                </motion.div>
                <motion.div  initial={{y: -100, scale: 0.5, opacity: 0}} animate={{y: 0, scale: 1, opacity: 1}} transition={{delay: 1.2}} className="instagram-container">
                    <h2 className="instagram-header">Instagram</h2>
                    <a target='_blank' href="https://www.instagram.com/batursarioz/"><i className="fab fa-instagram"/></a>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Socials;