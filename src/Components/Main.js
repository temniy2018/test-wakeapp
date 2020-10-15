import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import s from '../styles/Main.module.css';
import TreasureHeroes from '../img/TreasureHeroes.png'
import OzwinsJackpots from '../img/OzwinsJackpots.png';
import WildRobo from '../img/WildRobo.png';
import joker from '../img/joker.png';
import jokerHalf from '../img/jokerHalf.png';
import fastPayouts from '../img/fastPayouts.svg';
import ic_Support from '../img/ic_Support.svg';
import ic_games from '../img/ic_games.svg';
import ic_TopProviders from '../img/ic_TopProviders.svg';
import ic_allGAme from '../img/ic_allGame.svg';
import TopGames from '../img/TopGames.svg';
import LiveCasino from '../img/LiveCasino.svg';
import ic_slots from '../img/ic_slots.svg';
import ic_roulette from '../img/ic_roulette.svg';
import ic_TableGames from '../img/ic_TableGames.svg';
import ic_CardGames from '../img/ic_CardGames.svg';
import netent from '../img/Netent.png';
import PlayNGo from '../img/PlayNGo.png';
import Microgaming from '../img/Microgaming.png';
import ic_menu from '../img/ic_menu.svg';
import ic_promotions from '../img/ic_promotions.svg';
import ic_deposit from '../img/ic_deposit.svg';
import ic_chat from '../img/IC_Chat.svg';
import Games from './Games';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            gameCategory: 'all',
        }
    }

    newGameCategory(category) {
        this.setState({gameCategory: category});
    }

    render() {     
        
        return (
            <main>
                <div>
                    <img src={joker} alt="joker" className={s.main_bg}/>
                    <div className={s.main_signUp}>
                        <div className={s.main_signUp_action}>
                            <img src={jokerHalf} alt="joker" className={s.main_bgMobile}/>
                            <h1>SIGN UP <span>&#38;</span> GET WELCOME BONUS</h1>
                            <h3>&#8364; 100 <span>+</span> 55 FREE SPINS</h3>
                            <a  href="#" className={s.main__pc}>DEPOSIT NOW</a>
                            <a  href="#" className={s.main__mobile}>REGISTER NOW</a>
                            <p className={s.main_signUp_action_lastWinners}>LAST WINNERS</p>
                            <div className={s.main_signUp_games}>
                                <div>
                                    <img src={TreasureHeroes} alt="game" />
                                    <p className={s.main_signUp_games_win}>&#8364; 11.574.60</p>
                                    <p className={s.main_signUp_games_user}>Wild98 just won</p>
                                </div>
                                <div>
                                    <img src={OzwinsJackpots} alt="game" />
                                    <p className={s.main_signUp_games_win}>&#8364; 8.200.66</p>
                                    <p className={s.main_signUp_games_user}>Luiliana just won</p>
                                </div>
                                <div>
                                    <img src={WildRobo} alt="game" />
                                    <p className={s.main_signUp_games_win}>&#8364; 6.483.67</p>
                                    <p className={s.main_signUp_games_user}>Farisha just won</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.main_signUp_imgs}>
                            <div className={s.main_signUp_imgs_imgDiv}>
                                <img src={fastPayouts} alt="fast payouts"/>
                                <div>
                                    <span className={s.main_signUp_imgs_imgDiv_details}>&#8364;6.483.67</span>
                                    <span className={s.main_signUp_imgs_imgDiv_description}>FAST PAYOUTS</span>
                                </div>
                            </div>
                            <div className={s.main_signUp_imgs_imgDiv}>
                                <img src={ic_Support} alt="support"/>
                                <div>
                                    <span className={s.main_signUp_imgs_imgDiv_details}>24/7</span>
                                    <span className={s.main_signUp_imgs_imgDiv_description}>SUPPORT</span>
                                </div>
                            </div>
                            <div className={s.main_signUp_imgs_imgDiv}>
                                <img src={ic_games} alt="games"/>
                                <div>
                                    <span className={s.main_signUp_imgs_imgDiv_details}>250K</span>
                                    <span className={s.main_signUp_imgs_imgDiv_description}>GAMES</span>
                                </div>
                            </div>
                            <div className={s.main_signUp_imgs_imgDiv}>
                                <img src={ic_TopProviders} alt="top providers"/>
                                <div>
                                    <span className={s.main_signUp_imgs_imgDiv_details}>1250K</span>
                                    <span className={s.main_signUp_imgs_imgDiv_description}>TOP PROVIDERS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.main_menuMobile}>
                    <div>
                        <img src={ic_menu} alt="menu" />
                        <span>MENU</span>
                    </div>
                    <div>
                        <img src={ic_promotions} alt="promotions" />
                        <span>PROMOTIONS</span>
                    </div>
                    <div>
                        <img src={ic_deposit} alt="deposit" />
                        <span>DEPOSIT</span>
                    </div>
                    <div>
                        <img src={ic_chat} alt="chat" />
                        <span>CHAT</span>
                    </div>
                </div>
                <p className={s.main_signUp_action_lastWinnersMobile}>LAST WINNERS</p>
                <div className={s.main_signUp_gamesMobile}>
                    <div>
                        <img src={TreasureHeroes} alt="game" />
                        <p className={s.main_signUp_games_win}>&#8364; 11.574.60</p>
                        <p className={s.main_signUp_games_user}>Wild98 just won</p>
                    </div>
                    <div>
                        <img src={OzwinsJackpots} alt="game" />
                        <p className={s.main_signUp_games_win}>&#8364; 8.200.66</p>
                        <p className={s.main_signUp_games_user}>Luiliana just won</p>
                    </div>
                    <div>
                        <img src={WildRobo} alt="game" />
                        <p className={s.main_signUp_games_win}>&#8364; 6.483.67</p>
                        <p className={s.main_signUp_games_user}>Farisha just won</p>
                    </div>
                </div>
                <div className={s.main_categories}>
                    <div 
                        style={this.state.gameCategory === 'all' ? {borderBottom: 'solid 1px #f3b233'} : null}
                        onClick={() => this.newGameCategory('all')}
                    >
                        <img src={ic_allGAme} alt="games" />
                        <span>ALL GAMES</span>
                    </div>
                    <div 
                        style={this.state.gameCategory === 'top' ? {borderBottom: 'solid 1px #f3b233'} : null}
                        onClick={()=> this.newGameCategory('top')}
                    >
                        <img src={TopGames} alt="games"/>
                        <span>TOP GAMES</span>
                    </div>
                    <div 
                        style={this.state.gameCategory === 'casino' ? {borderBottom: 'solid 1px #f3b233'} : null}
                        onClick={()=> this.newGameCategory('casino')}    
                    >
                        <img src={LiveCasino} alt="games"/>
                        <span>LIVE CASINO</span>
                    </div>
                    <div 
                        style={this.state.gameCategory === 'slots' ? {borderBottom: 'solid 1px #f3b233'} : null}
                        onClick={()=> this.newGameCategory('slots')}    
                    >
                        <img src={ic_slots} alt="games"/>
                        <span>SLOTS GAMES</span>
                    </div>
                    <div
                        style={this.state.gameCategory === 'roulette' ? {borderBottom: 'solid 1px #f3b233'} : null}
                        onClick={()=> this.newGameCategory('roulette')}    
                    >
                        <img src={ic_roulette} alt="games"/>
                        <span>ROULETTE</span>
                    </div>
                    <div 
                        style={this.state.gameCategory === 'table' ? {borderBottom: 'solid 1px #f3b233'} : null}
                        onClick={()=> this.newGameCategory('table')}
                    >
                        <img src={ic_TableGames} alt="games"/>
                        <span>TABLE GAMES</span>
                    </div>
                    <div 
                        style={this.state.gameCategory === 'card' ? {borderBottom: 'solid 1px #f3b233'} : null}
                        onClick={()=> this.newGameCategory('card')}
                    >
                        <img src={ic_CardGames} alt="games"/>
                        <span>CARD GAMES</span>
                    </div>
                </div>
                <div className={s.main_providers}>
                    <div >
                        <span>ALL PROVIDERS</span>
                        <div>
                            <img src={netent} alt="netent"/>
                            <span>NETENT</span>
                        </div>
                        <div>
                            <img src={PlayNGo} alt="Play'N Go"/>
                            <span>PLAY'N GO</span>
                        </div>
                        <div>
                            <img src={Microgaming} alt="Microgaming"/>
                            <span>MICROGAMING</span>
                        </div>
                        <span style={{color: '#f3b233'}}>...</span>
                    </div>
                    <div>
                        <input type='text' id='search' placeholder="FIND THE GAME" />
                        <label htmlFor="search"><FontAwesomeIcon icon={faSearch} /></label>
                    </div>
                </div>
                <div className={s.main_searchMobile}>
                    <input type='text' id='search' placeholder="FIND THE GAME" />
                    <label htmlFor="search"><FontAwesomeIcon icon={faSearch} /></label>
                </div>
                <Games category={this.state.gameCategory}/>
            </main>
        );
    }
}

export default Main;