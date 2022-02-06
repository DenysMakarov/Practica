import React from 'react';

class StartField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            message: 'Your name...'
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            name: e.currentTarget.value
        })

    }

    startGame = () => {
        (!this.state.name) ? this.setState({message: 'ERROR: Enter your name...'}) : this.props.goToPlay(this.state.name)
    }

    render() {
        return (
            <div className='field'>
                <h1 className='title'>READY FOR WAR</h1>
                <input className='inp' onChange={this.handleChange} value={this.name} type="text" id="name" name="name" placeholder={this.state.message}/>
                <button className='btn-start' onClick={() => this.startGame()}>START</button>
            </div>
        );
    }
};

export default StartField;