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
            player: ''
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

    render() {
        switch (this.state.page){
            case 'start':
                return(
                    <StartField goToPlay={this.goToPlay}/>
                )
            case 'play':
                return(
                    <PlayField playerName={this.state.player} goToResult={this.goToResult}/>
                )
            case 'result':
                return(
                    <Result/>
                )
            default:
                return (
                    <StartField handleClick={this.handleClick} player={this.player} goToPlay={this.goToPlay}/>
                )
        }

    }
}

export default App;
