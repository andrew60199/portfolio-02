import React from 'react';
import Project from '../Project';

export default function Portfolio() {
  return (
    <section id="work">
        <div className="work">
            <h2>Work 💻</h2>

            <Project 
                name="Tech Blog"
                image="./assets/images/Tech-blog-01.gif"
                imageLink="https://github.com/andrew60199/tech-blog-01"
                content={[
                    "Putting my knowledge of MySQL, Express.js, Handlebars and Node I was asked to create a tech blog for one of the bootcamps assignments! I love how it turned out, the clean UI is held up by a strong backend. Together they make for a seamless experience when navigating though the app.", "I must have spent over 30 hours on it so be sure to check out the GitHub repository and see how it works for yourself." 
                ]}
            />

            <Project 
                name="Quiz Me"
                image="./assets/images/Quiz-me-03.gif"
                imageLink="https://github.com/andrew60199/Quiz-Me"
                content={[
                    "Combining the skills learned through the coding bootcamp we where asked to create a full stack application. My team and I brainstormed the idea of an app that was a mix between Wordle and Kahoot! An app you can log into everyday for a bit of entertainment.", "While the game is played independently there is potential for the app to be popular among friend groups. As people post their own questions for anyone on the application to enjoy.", "For the project I assumed the leadership position. Of which I learned a lot about how to manage getting a project completed. This highlighted the importance of testing the work you do and there being someone who can put all the pieces of the puzzle together." , "I am proud of the final product and can't thank Miles and Vivian enough for their hard work too."
                ]}
            />

            <Project 
                name="Cityspire"
                image="./assets/images/Cityspire.gif"
                imageLink="https://jpjp2328.github.io/Cityspire/"
                content={[
                    "I worked in a team of three to develop a city inspiration application. When you enter the site you are presented with three random cities which you can click to review. In addition to the search bar and featured destinations our goal was to allow users to find their dream location and read up on the place ahead of time.", "I was responsible for finalising the wireframe after every team member had their say in what the design could be. With my newly acquired Javascript skills I was able to link the Google Maps and Wikipedia API's seen after a location has been selected.", "These elements working together beautifully and allow the user to read the first 1200 characters of it's respective Wikipedia article while visualising it Google's powerful map.", "I wasn't able to achieve such a refined application on my own and everything else you see on the page was created by my wonderful team members Jeffery and Laura, who it was a pleasure working with."
                ]}
            />

            {/* <Project 
                name=""
                image=""
                imageLink=""
                content={[
                    "", ""
                ]}
            /> */}

            <div className="coming-soon">
                <h3 >Coming soon</h3>
                <p>There is some more projects in the works. Of which I will share with the world soon.</p>
            </div>        
        </div>
    </section>
  );
}