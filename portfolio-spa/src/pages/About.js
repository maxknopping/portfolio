import React from 'react';
import { Grid, Cell } from 'react-mdl';

function About() {
    return (
        <div className="landing-grid" style={{width: '100%', margin: 'auto'}}>
            <Grid style={{position: 'absolute', width: '100%', height: '400px', top: '20%'}}>
                <Cell style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}} col={12}>
                    <div className="banner-text">
                        <h2 style={{marginTop: '20px', fontWeight: 'normal'}}>My Story</h2>
                        <p style={{marginLeft: '20px', marginRight: '20px', textAlign: 'start'}}>
                            I have always had a passsion for building things and have always had an interest in technology. 
                            In high school, I took AP Computer Science, but I did not learn how to build any real software (i.e. websites or apps). 
                            Freshman year at the University of Pennsylvania, I took CIS 120 (Data Structures and Algorithms), where I expanded on the principles of AP Computer Science, 
                            but still did not know how to build any real software. 

                        </p>
                        <p style={{marginLeft: '20px', marginRight: '20px', textAlign: 'start'}}>
                            During the summer of my freshman year, I interned at ClassLink, Inc., an Ed-Tech company. It was here where I learned how to develop real software. 
                            After realizing this, my passion for software development was sparked. After my internship, I had the idea for MemeClub, a social media for memes. 
                            I loved this idea so much that I decided to pursue it seriously. 
                            I started by creating the website and back-end, and then took a course in React Native to create the App. I worked on it everyday for months, learning a great deal, and as a result,
                            fell in love with software development. I took on a few other projects, including an AI algorithm to grade sports cards and a stock trading algorithm.

                        </p>
                        <p style={{marginLeft: '20px', marginRight: '20px', textAlign: 'start'}}>
                            As a result of these academic and extracurricular experiences, I know that my future lies within the technology industry
                            whether it be investing in different tech startups, or developing my own software.
                        </p>
                    </div>

                </Cell>
            </Grid>
        </div>
    );
}

export default About;