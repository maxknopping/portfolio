import React from 'react';
import { Grid, Cell } from 'react-mdl';
import { Carousel } from 'react-bootstrap';
import KnoppingResume from './../images/KnoppingResume.pdf';

function Home() {

    return (
        <div className="landing-grid" style={{width: '100%', margin: 'auto'}}>
            <Grid style={{position: 'absolute', width: '100%', height: '400px', top: '20%'}}>
                <Cell style={{alignItems: 'center', display: 'flex', flexDirection: 'column'}} col={12}>
                    <div className="banner-text">
                        <h1 style={{marginTop: '20px', fontWeight: 'normal'}}>Max Knopping</h1>
                        <hr/>
                            <Carousel>
                                <Carousel.Item className="carousel-item-frontend">
                                    <h2>Front End</h2>
                                    <Carousel.Caption>
                                        <h4>TypeScript | JavaScript | HTML | CSS | JSX</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carousel-item-frontend">
                                    <h2>Back End</h2>
                                    <Carousel.Caption>
                                        <h4>C# | Python | MySql | Sqlite | SQL | Java</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carousel-item-frontend">
                                    <h2>Frameworks</h2>
                                    <Carousel.Caption>
                                        <h4>Angular | React Native | ASP.NET | React | Node.js | Expo | Entity Framework | Flask</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className="carousel-item-other">
                                    <h2>Other</h2>
                                    <Carousel.Caption>
                                        <h4>Git | Agile/Scrum | Visual Studio | VS Code | IIS Server | AWS EC2 {"\n"} | AWS Cloudfront | AWS Route 53 | AWS RDS</h4>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                            <hr></hr>
                            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingBottom: '20px', flexWrap: 'wrap'}}>
                                <a href="https://www.linkedin.com/in/max-knopping/" rel="noopener noreferrer" target="_blank"><i
                                    className="fa fa-linkedin-square social-icon"></i></a>
                                <a href="https://github.com/maxknopping/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github social-icon"></i>
                                </a>
                                <a href={KnoppingResume} className="resume-download" rel="noopener noreferrer" style={{display: 'flex'}} download>
                                    <i style={{textDecoration: 'none'}} className="fa fa-arrow-circle-down social-icon"></i>
                                    <span className="social-icon resume" style={{fontSize: '20px', alignSelf: 'flex-start', display: 'inline-block'}}>Resume</span>
                                </a>
                                <a style={{marginBottom: '30px'}} target="_blank" rel="noopener noreferrer" href="mailto:mknoppin@wharton.upenn.edu"><i className="fa fa-envelope social-icon"></i></a>
                            </div>
                    </div>

                </Cell>
            </Grid>
        </div>
    );

};

export default Home;