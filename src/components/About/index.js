import React from 'react';

function About() {

    return(
        <section className="container">
            <h2 class="top-title">Elyor Doniyorov</h2>
            <hr></hr>
            <div className="d-flex">
                <img class="mb-5" id="avatar" src="https://avatars.githubusercontent.com/u/67087664?v=4" alt="Michael Giddings" />
                <div>
                    <p>
                    Hello, Friends. I am Elyor a Full-stack Web Developer and student at Microverse. 
                    I love coding, travel, and reading books.
                    </p>
                    <p>
                    For more than 10 months, I've been developing my technical and non-technical skills 
                    working on Front and Back-end projects using Ruby, Ruby on Rails, React, JavaScript, 
                    and HTML/CSS as well as other frameworks to build real-world projects through pair-programming.
                    </p>
                    <p>
                    At the same time, I have developed and improved my professional skills as a communicator and listener, 
                    as an active team member, collaborator, and mentor. This has allowed me to gain experience and have 
                    the opportunity to work, contribute and learn remotely with programmers and teams around the world 
                    seamlessly thus making me a Global Citizen.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;
