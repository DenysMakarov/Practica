import React from 'react';
import './App.css';
import StartField from "./components/StartField";
import PlayField from "./components/PlayField";
import Result from "./components/Result";
import Main from "./components/Main";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 'start',
            name: '',
            copmWins: 0,
            playerWins: 0
        }
    }


    goToPlay = (name) => {
        this.setState({
            player: name,
            page: 'play'
        })
    }

    goToResult = (a) => {
        this.setState({
            page: 'result'
        })
    }

    getWins = (comp, player) => {
        if (comp > player){
            this.setState({
                copmWins: this.state.copmWins+=1,
                playerWins: this.state.playerWins,
                page: 'result'
            })
        } else {
            this.setState({
                copmWins: this.state.copmWins,
                playerWins:  this.state.playerWins+=1,
                page: 'result'
            })
        }

    }

    render() {
        switch (this.state.page){
            case 'start':
                return(
                    <StartField goToPlay={this.goToPlay}/>
                )
            case 'play':
                return(
                    <PlayField getWins={this.getWins} playerName={this.state.name} goToResult={this.goToResult}/>
                )
            case 'result':
                return(
                    <Result lose={this.state.copmWins} win={this.state.playerWins} goToPlay={this.goToPlay}/>
                )
            default:
                return (
                    <StartField handleClick={this.handleClick} player={this.name} goToPlay={this.goToPlay}/>
                )
        }

    }
}

export default App;
