import React from 'react';
import { Cell, Grid } from 'react-mdl';
import { Card } from 'react-bootstrap';
import  meme_club_logo2 from './../images/meme_club_logo2.png';
import  StockReturns from './../images/StockReturns.png';

function Projects() {
    return (
        <div className="landing-grid" style={{width: '100%', margin: 'auto'}}>
            <Grid style={{position: 'absolute', width: '100%', height: '400px'}}>
                <Cell col={3}>
                    <Card bg="dark" className="">
                        <Card.Img variant='top' src={meme_club_logo2}/>
                        <Card.Body>
                            <Card.Title><span>MemeClub</span></Card.Title>
                            <Card.Text>A fully functioning social media for memes. 
                                Users can create their own memes, upload memes, follow users, 
                                like/comment on posts, create group chats/direct messages, and much more!
                                Developed with a stack of MySql, ASP.NET, Angular, and React Native. Deployed on AWS.</Card.Text>
                        </Card.Body>
                        <Card.Body style={{display: 'flex', justifyContent: 'space-around'}}>
                            <Card.Link target="_blank" href="https://memeclub.co">
                                Website
                            </Card.Link>
                            <Card.Link target="_blank" href="https://testflight.apple.com/join/yehUO9Kr">
                                App
                            </Card.Link>
                            <Card.Link style={{position: 'relative', top: '-17px'}}>
                                <i className="fa fa-github card-code-icon">
                                </i>
                                <span className="slash" style={{position: "relative", display: 'inline-block', left: '-17px', top: '1px', fontSize: '40px', color: 'gray'}}>|</span>
                                </Card.Link>
                        </Card.Body>
                    </Card>
                </Cell>
                <Cell col={6}>
                    <Card bg="dark" className="">
                        <Card.Img variant='top' src={StockReturns}/>
                        <Card.Body>
                            <Card.Title><span>Stock Trading Algorithm</span></Card.Title>
                            <Card.Text>A Stock Trading Algorithm that buys quality companies in an uptrend.
                                To find quality copmanies, I take the 50 companies with the best ROIC (Return on Invested Capital). 
                                I then find out which of those companies are in an uptrend by finding their percent change over the past 120 days. 
                                I buy the top 10 of those companies and rebalance the portfolio at the end of each month. 
                                The above image is the result from the backtest, I am currently forward testing it with fake money. 
                                Developed in Python, deployed on Heroku.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body style={{display: 'flex', justifyContent: 'space-around'}}>
                            <Card.Link target="_blank" href="https://github.com/maxknopping/algoTrader">
                                <i style={{color: 'white'}} className="fa fa-github card-code-icon">
                                </i>
                                </Card.Link>
                        </Card.Body>
                    </Card>
                </Cell>
                <Cell col={3}>
                    <Card bg="dark" className="">
                        <Card.Img variant='top' src={StockReturns}/>
                        <Card.Body>
                            <Card.Title><span>Sports Card Grading AI Algorithm</span></Card.Title>
                            <Card.Text>A Stock Trading Algorithm that buys quality companies in an uptrend.
                                To find quality copmanies, I take the 50 companies with the best ROIC. 
                                I then find out which of those companies are in an uptrend by finding their percent change over the past 120 days. 
                                I buy the top 10 of those companies and rebalance the portfolio at the end of each month. 
                                The above image arfe the results from the backtest, I am currently forward testing it with fake money. 
                                Developed in Python, deployed on Heroku.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body style={{display: 'flex', justifyContent: 'space-around'}}>
                            <Card.Link target="_blank" href="https://github.com/maxknopping/algoTrader">
                                <i style={{color: 'white'}} className="fa fa-github card-code-icon">
                                </i>
                                </Card.Link>
                        </Card.Body>
                    </Card>
                </Cell>
            </Grid>
        </div>
    );
}

export default Projects;