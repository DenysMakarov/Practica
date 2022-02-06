import React, {Component} from 'react';

class Result extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {lose, win, goToPlay} = this.props
        return (
            <div>
                <h1>Lose : {lose}</h1>
                <h1>Wins: {win}</h1>
                <button onClick={goToPlay}>Click</button>
            </div>
        );
    }
}

export default Result;