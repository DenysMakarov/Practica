import React, {Component} from 'react';
import {cards} from "../utils/constants";


class PlayField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cards: cards.sort(() => Math.random() - 0.5),
            computer: {
                cards: cards.slice(0, cards.length / 2),
                currenCard: {
                    num: 0,
                    type: 'nothing'
                },
                wins: 0
            },
            player: {
                cards: cards.slice(cards.length / 2, cards.length),
                currenCard: {
                    num: 0,
                    type: 'nothing'
                },
                wins: 0
            },
            lightsOut: [],
            winner: 'noBody'
        }
    }

    componentDidMount() {
        let personCards = cards.slice(0, cards.length / 2)
        let compCards = cards.slice(cards.length / 2, cards.length)
        this.setState({
            ...this.state,
            computer: {...this.state.computer, cards: compCards},
            player: {...this.state.player, cards: personCards}
        })

        console.log(this.state.computer.cards)
        console.log(this.state.player.cards)
        console.log('====================')

    }


    takeCard = () => {

        // if (!this.state.computer.cards.length || !this.state.player.cards.length) {
        //     this.props.goToResult()
        // }

        const currentCompCard = this.state.computer.cards[this.state.computer.cards.length - 1]
        const currentPlayerCard = this.state.player.cards[this.state.player.cards.length - 1]

        let newCompArray = this.state.computer.cards
        let newPlayerArray = this.state.player.cards

        let temp = [currentCompCard, currentPlayerCard]

        newCompArray.pop()
        newPlayerArray.pop()


        this.setState({
            ...this.state,
            lightsOut: this.state.lightsOut.unshift(...temp)
        })
        // console.log(this.state)


        if (currentCompCard.num > currentPlayerCard.num) {
            newCompArray.unshift(...this.state.lightsOut)
            this.setState({
                ...this.state,
                lightsOut: this.state.lightsOut.length = 0
            })
        } else if (currentCompCard.num < currentPlayerCard.num) {
            newPlayerArray.unshift(...this.state.lightsOut)
            this.setState({
                ...this.state,
                lightsOut: this.state.lightsOut.length = 0
            })
        }

        console.log(this.state.lightsOut)

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


        console.log(this.state.computer.cards)
        console.log(this.state.player.cards)
        console.log('--------')
    }

    compare = (comp, player) => {
        return comp.num > player.num
    }

    // isEquals = (currentCompCard, currentPlayerCard, temp) => {
    //     if (currentCompCard == currentPlayerCard){
    //         console.log(true)
    //         temp.unshift(currentCompCard, currentPlayerCard)
    //         return this.isEquals(currentCompCard, currentPlayerCard, temp)
    //     } else {
    //         return
    //     }
    // }

    render() {
        // console.log(this.state.computer.cards)
        // console.log(this.state.player.cards)
        // console.log('-----------------------')
        return (
            <div>
                <h2>COMP</h2>
                <p className='winner'>{this.state.winner}</p>
                <div>
                    <div className='card compCard'>
                        <p>{`skill:  ${this.state.computer.currenCard.num}`}</p>
                        <p>{`type:  ${this.state.computer.currenCard.type}`}</p>
                        <p>{this.state.computer.cards.length}</p>
                    </div>
                    <div className='card yourCard'>
                        <p>{`skill:  ${this.state.player.currenCard.num}`}</p>
                        <p>{`type:  ${this.state.player.currenCard.type}`}</p>
                        <p>{this.state.player.cards.length}</p>
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