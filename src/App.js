import React from 'react';
import './App.css';
import StartField from "./components/StartField";
import PlayField from "./components/PlayField";
import Result from "./components/Result";
import Main from "./components/Main";
import {page} from "./utils/constants";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: page.start,
            name: '',
            copmWins: 0,
            playerWins: 0
        }
    }


    goToPlay = (name) => {
        this.setState({
            ...this.state,
            name: name,
            page: page.play
        })
    }

    tryAgain = () => {
        this.setState({
            ...this.state,
            page: page.play
        })
    }



    getWins = (comp, player) => {
        if (comp > player) {
            this.setState({
                ...this.state,
                copmWins: this.state.copmWins += 1,
                page: 'result'
            })
        } else {
            this.setState({
                ...this.state,
                playerWins: this.state.playerWins += 1,
                page: 'result'
            })
        }
    }

    render() {
        switch (this.state.page) {
            case 'start':
                return (
                    <StartField goToPlay={this.goToPlay}/>
                )
            case 'play':
                return (
                    <PlayField getWins={this.getWins} name={this.state.name}/>
                )
            case 'result':
                return (
                    <Result tryAgain={this.tryAgain} lose={this.state.copmWins} win={this.state.playerWins} />
                )
            default:
                return (
                    <StartField goToPlay={this.goToPlay}/>
                )
        }
    }
}

export default App;
