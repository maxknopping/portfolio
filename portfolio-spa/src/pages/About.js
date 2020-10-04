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
                            Max Knopping is an aspiring software engineer/investor in software. 
                            He is currrently studying at the Wharton School of the University of Pennsylvania, intending to major in Business Analytics and minor in Computer Science.
                            He is currently seeking an internship in the Technology Industry for his sophomore summer.

                        </p>
                        <p style={{marginLeft: '20px', marginRight: '20px', textAlign: 'start'}}>
                            Max is fueled by his passion for building new software and taking on new projects, as well as the business implications of these projects. 
                            He loves learning new programming languages and frameworks and is curious about how he can use them practically for business.
                        </p>
                        <p style={{marginLeft: '20px', marginRight: '20px', textAlign: 'start'}}>
                            His hunger for knowledge and determination to turn ideas into action has contributed to his business ventures. 
                            Some of his ideas can be found in the Projects tab.
                        </p>
                    </div>

                </Cell>
            </Grid>
        </div>
    );
}

export default About;