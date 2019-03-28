import React, { Component } from 'react'

class FormContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title: '',
            description: ''
        }
    }

    handleChange = (e) => {
        const { name, value } =  e.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.formData(this.state);

    }

    render() {
        return (
        <form id="modalForm" onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
        </form>
        )
    }
}

export default FormContainer;
