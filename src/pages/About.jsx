import { useState } from 'react'
import './About.css'

function About(){
    return(
        <>
            <h1>About Us</h1>
            <p id='about-para'>The IEEE PESU ECC Student Branch is not just a tech club, but a place to tinker, innovate, collaborate and connect with people 
                across various domains. From cybersecurity, IoT, and embedded systems to emerging fields, we encourage everyone to explore their interests 
                and turn ideas into meaningful projects.
                <br></br>
                <br></br>
                Through hackathons, workshops, guest lectures, seminars, and collaborative projects, there are several opportunities to learn beyond the classroom 
                and engage with real-world challenges. Our projects bring students together to work on practical, industry-relevant problems while developing 
                both technical and collaborative skills.
                <br></br>
                <br></br>
                Whether you are looking to grow in your chosen domain, explore a new area of technology, or simply connect with people who share your curiosity, 
                IEEE PESU ECC provides a platform to learn, build, and grow.
            </p>
        </>
    );
}

export default About