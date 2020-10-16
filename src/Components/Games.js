import React from 'react';
import s from '../styles/Games.module.css';

class Games extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
        }
    }
    async getData() {
        let games = [];
        let response = [];
        const fetchGames = await fetch('https://57d10932-44d0-4d3a-98a9-6dda8c67bdd3.mock.pstmn.io?liveCasinoOnly=true',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
            }
        }
        );
        response = await fetchGames.json();
        if(this.props.category === 'all') {
            response.map((el, i) => games[i] = el.item_title);
            return games;
        }
        if(this.props.category === 'top') {
            response.map((el,i)=>{
                if(el.is_most_popular) {
                    games[i] = el.item_title;
                } else {
                    games[i] = null;
                }
            });
            games = games.filter(el => el !== null)
            return games;
        }
    }

    componentDidMount() {
        this.getData().then(response => this.setState({games: response}))
        console.log(this.state.games);
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.category !== prevProps.category) {
            this.getData().then(response => this.setState({games: response}));
        }
    }

    render() {
        console.log(this.state.games);
        if(this.state.games) {
            return (
                <div className={s.games}>
                    {this.state.games.map((el) => <img src={`https://aws-origin.image-tech-storage.com/gameRes/sq/250/${el}.jpg`} alt='game' />)}
                </div>
            )
        } else {
            return <div className={s.loading}><h3>Loading</h3></div>
        }
    }
}

export default Games;