import React, {Component} from 'react';
import {cards} from "../utils/constants";
import ResBlock from "./ResBlock";


class PlayField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: cards.sort(() => Math.random() - 0.5),
            computer: {
                cards: cards.slice(0, cards.length / 2),
                currenCard: {
                    num: 0,
                    type: '...'
                },
                wins: 0
            },
            player: {
                cards: cards.slice(cards.length / 2, cards.length),
                currenCard: {
                    num: 0,
                    type: '...'
                },
                wins: 0
            },
            name: '',
        }
    }

    componentDidMount() {
        // let personCards = cards.slice(0, cards.length / 2)
        // let compCards = cards.slice(cards.length / 2, cards.length)
        //
        // this.setState({
        //     ...this.state,
        //     // computer: {...this.state.computer, cards: compCards},
        //     // player: {...this.state.player, cards: personCards},
        //     // name: this.props.name
        // })
        console.log("name " + this.props.name)
    }


    takeCard = () => {
        if (!this.state.computer.cards.length || !this.state.player.cards.length) {
            this.props.getWins(this.state.computer.wins, this.state.player.wins)
            return;
        }

        const currentCompCard = this.state.computer.cards[this.state.computer.cards.length - 1]
        const currentPlayerCard = this.state.player.cards[this.state.player.cards.length - 1]

        let newCompArray = this.state.computer.cards
        let newPlayerArray = this.state.player.cards
        let temp = [currentCompCard, currentPlayerCard]

        newCompArray.pop()
        newPlayerArray.pop()

        this.setState({
            ...this.state,
            computer: {
                ...this.state.computer,
                cards: newCompArray,
                currenCard: currentCompCard,
                wins: !(this.compare(currentCompCard, currentPlayerCard)) ? this.state.computer.wins : this.state.computer.wins += 1
            },
            player: {
                ...this.state.player,
                cards: newPlayerArray,
                currenCard: currentPlayerCard,
                wins: !(this.compare(currentPlayerCard, currentCompCard)) ? this.state.player.wins : this.state.player.wins += 1
            }
        })
        //

        // console.log(this.state.computer.cards)
        // console.log(this.state.name.cards)
        // console.log('--------')
    }

    compare = (comp, player) => {
        return comp.num > player.num
    }

    render() {
        // console.log(this.state.computer.cards)
        // console.log(this.state.name.cards)
        // console.log('-----------------------')
        return (
            <div className='mainField'>
                <button onClick={this.takeCard} className='takeCard'><h3>TAKE CARD</h3></button>

                <div className='cards-field'>
                    <h2 className='gamer'>COMP</h2>
                    <div className='card compCard'>
                        <p>{this.state.computer.currenCard.num}</p>
                        <p>{this.state.computer.currenCard.type}</p>
                    </div>

                    <div className='card yourCard'>
                        <p>{this.state.player.currenCard.type}</p>
                        <p>{this.state.player.currenCard.num}</p>
                    </div>
                    <h2 className='gamer'>{this.props.name.toUpperCase()}</h2>
                </div>

                <ResBlock compWin={this.state.computer.wins} playersWin={this.state.player.wins}/>

                {/*<h2>{this.props.name}</h2>*/}
                <button className='btn-wins' onClick={this.props.goToResult}>next</button>
            </div>
        );
    }
}

export default PlayField;