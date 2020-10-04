import React, {useState, useEffect} from 'react';
import { Cell, Grid } from 'react-mdl';
import {Button } from 'react-bootstrap';
import api from './api';

function Demo() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const[ grades, setGrades] = useState(null);

    useEffect(() => {

    });

    const getNextCard = () => {
        if (currentIndex == 5) {
            setCurrentIndex(1);
            setGrades(null);
        } else {
            setCurrentIndex(currentIndex+1);
            setGrades(null);
        }
    };

    function getGrades() {
        setIsLoading(true);
        api.get(`/${currentIndex}`).then(function (response) {
            setGrades(response.data);
            setIsLoading(false);
        }).catch(() => setIsLoading(false));


    }


    return (
        <div className="landing-grid" style={{width: '100%', margin: 'auto'}}>
            <Grid style={{position: 'absolute', width: '100%', height: '400px'}}>
                <Cell col={12}>
                    <div className="banner-text" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <img style={{width: '200px', margin: '30px'}} src={require(`./../assets/TestPictureLibrary/${currentIndex}/Front.jpg`)}></img>
                            <img style={{width: '200px', margin: '30px'}} src={require(`./../assets/TestPictureLibrary/${currentIndex}/Back.jpg`)}></img>
                        </div>
                        {grades != null ?
                        <div>
                            <h6>Corners: {grades.corners.toFixed(4)} Edges: {grades.edges.toFixed(4)} Centering: 
                            {grades.centering.toFixed(4)} Surface: {grades.surface.toFixed(4)}</h6>
                        </div>
                        : null}
                        <Button onClick={getNextCard} disabled={isLoading} style={{marginBottom: '30px'}}>
                            Next Card
                        </Button>
                        <Button onClick={getGrades} disabled={isLoading} style={{marginBottom: '30px'}}>
                            {isLoading ? 'Loading...' : 'Get Grades'}
                        </Button>
                        {isLoading ? <span  style={{marginBottom: '30px'}}>It may take a moment...</span> : null}

                    </div>
                </Cell>
            </Grid>
        </div>
    );
}

export default Demo;