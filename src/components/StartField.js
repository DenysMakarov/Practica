import React from 'react';

class StartField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            player: '',
            message: 'Your name...'
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            player: e.currentTarget.value
        })
    }

    startGame = () => {
        (!this.state.player) ? this.setState({message: 'ERROR: Enter your name...'}) : this.props.goToPlay(this.state.player)
    }

    render() {
        return (
            <div className='field'>
                <h1>READY FOR WAR</h1>
                <label htmlFor="name">First Name</label>
                <input onChange={this.handleChange} value={this.player} type="text" id="name" name="name"
                       placeholder={this.state.message}/>
                <button onClick={this.startGame}>START</button>
            </div>
        );
    }
};

export default StartField;