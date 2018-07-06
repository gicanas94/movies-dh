import React, { Component } from 'react'
import './styles.css'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: ''
        }
    }

    //--------------------

    handleTitleOnChange = event => {
        event.preventDefault()

        this.setState({
            title: event.target.value
        })
    }

    //--------------------

    handleDescriptionOnChange = event => {
        event.preventDefault()

        this.setState({
            description: event.target.value
        })
    }

    //--------------------

    render() {
        const {movieToAdd, errors} = this.props

        return (
            <div className="form-wrapper">
                <h2>Add a movie to the list...</h2>
                <form onSubmit={event => movieToAdd(event, this.state)}>
                    <label>Name</label>
                    <input type="text" value={this.state.title} onChange={this.handleTitleOnChange}/>
                    <br/>
                    <label>Description</label>
                    <textarea rows="10" value={this.state.description} onChange={this.handleDescriptionOnChange}></textarea>
                    <br/>
                    <button>Add</button>
                </form>
                {errors && <div className="form-errors">{errors}</div>}
            </div>
        )
    }
}

export default Form
