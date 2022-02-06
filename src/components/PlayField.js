import React, {Component} from 'react';
import {cards} from "../utils/constants";
import ResBlock from "./ResBlock";
import CardField from "./CardField";

class PlayField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            computer: {
                cards: [],
                currenCard: {
                    num: 0,
                    type: '...'
                },
                wins: 0
            },
            player: {
                cards: [],
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
        let descCard = cards.sort(() => Math.random() - 0.5)
        this.setState({
            ...this.state,
            computer: {...this.state.computer, cards :  descCard.slice(0, cards.length/2)},
            player: {...this.state.player, cards : cards.slice(cards.length/2, cards.length)}
        })
    }

    takeCard = () => {
        if (!this.state.computer.cards.length || !this.state.player.cards.length) {
            this.props.getWins(this.state.computer.wins, this.state.player.wins)
            return;
        }

        const currentCompCard = this.state.computer.cards[this.state.computer.cards.length - 1]
        const currentPlayerCard = this.state.player.cards[this.state.player.cards.length - 1]

        const newCompArray = this.state.computer.cards
        const newPlayerArray = this.state.player.cards

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
    }

    compare = (comp, player) => {
        return comp.num > player.num
    }

    render() {
        return (
            <div className='mainField'>
                <button onClick={this.takeCard} className='takeCard'><h3>NEXT CARD</h3></button>
                <CardField compCurrentNum={this.state.computer.currenCard.num} playerCurrentNum={this.state.player.currenCard.num}
                compCurrentType={this.state.computer.currenCard.type} playerCurrentType={this.state.player.currenCard.type}
                           name={this.props.name.toUpperCase()}
                />
                <ResBlock compWin={this.state.computer.wins} playersWin={this.state.player.wins}/>
            </div>
        );
    }
}

export default PlayField;