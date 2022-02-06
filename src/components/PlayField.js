import React, {Component} from 'react';
import {cards} from "../utils/constants";


class PlayField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: cards.sort(() => Math.random() - 0.5),
            computer: {
                cards: [cards.slice(0, 26)],
                currenCard: {
                    num: 0,
                    type: 'nothing'
                },
                wins: 0
            },
            player: {
                cards: [cards.slice(26, 52)],
                currenCard: {
                    num: 0,
                    type: 'nothing'
                },
                wins: 0
            },
            winner: 'noBody'
        }
    }

    componentDidMount() {
        let personCards = cards.slice(0, 26)
        let compCards = cards.slice(26, 52)
        this.setState({
            ...this.state,
            computer: {...this.state.computer , cards: compCards},
            player: {...this.state.player, cards: personCards}
        })
    }


    takeCard = () => {
        const currentCompCard = this.state.computer.cards[this.state.computer.cards.length - 1]
        const currentPlayerCard = this.state.player.cards[this.state.player.cards.length - 1]

        let newCompArray = this.state.computer.cards
        let newPlayerArray = this.state.player.cards

        newCompArray.pop()
        newPlayerArray.pop()


        this.setState({
            ...this.state,
            computer: {
                ...this.state.computer,
                cards: newPlayerArray,
                currenCard: currentCompCard,
                wins: (this.compare(currentCompCard, currentPlayerCard)) ? this.state.computer.wins+=1 : this.state.computer.wins
            },
            player: {
                ...this.state.player,
                cards: newCompArray,
                currenCard: currentPlayerCard,
                wins: (this.compare(currentPlayerCard, currentCompCard)) ? this.state.player.wins+=1 : this.state.player.wins
            }

        })

        // this.compare(currentCompCard, currentPlayerCard)

    }
    compare = (comp, player) => {
        return comp.num > player.num
    }


    // isCurrentCard(){
    //    return (this.state.computer.currenCard.num==undefined) ? 'take card' : `skill:  ${this.state.computer.currenCard.num}`
    // }

    render() {
        console.log(this.state.computer.wins)
        console.log(this.state.player.wins)
        return (
            <div>
                <h2>COMP</h2>
                <p className='winner'>{this.state.winner}</p>
                <div>
                    <div className='card compCard'>
                        <p>{`skill:  ${this.state.computer.currenCard.num}`}</p>
                        <p>{`type:  ${this.state.computer.currenCard.type}`}</p>
                    </div>
                    <div className='card yourCard'>
                        <p>{`skill:  ${this.state.player.currenCard.num}`}</p>
                        <p>{`type:  ${this.state.player.currenCard.type}`}</p>
                    </div>
                </div>
                <div className='result'>
                    <p>{this.state.computer.wins}</p>
                    <p>---------------------------</p>
                    <p>{this.state.player.wins}</p>
                </div>
                <button onClick={this.takeCard} className='takeCard'>TAKE CARD</button>

                <h2>{this.props.playerName}</h2>
                <button onClick={this.props.goToResult}>next</button>
            </div>
        );
    }
}

export default PlayField;