import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/modal';
import FormContainer from './components/form';

class App extends Component {
    constructor() {
        super();
        this.state = {
            sidebarOpen: true,
            todos: []
        }
    }
    handleFormData = (data) => {
        this.setState({todos: [...this.state.todos, data]});
    }
    
    render() {
        return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <main>
                <div className="sidepanel">
                    <Modal triggerText="Open Modal" title="Modal Title">
                        <FormContainer formData={this.handleFormData}/>
                    </Modal>
                </div>
                <div className="main-body">
                    <div className="container-fluid">
                        <h3 className="">Current Items</h3>
                        <ul className="list-group">
                            <li className="list-group-item">
                                Item 1
                            </li>
                            <li className="list-group-item">
                                Item 2
                            </li>
                            <li className="list-group-item">
                                Item 3
                            </li>
                        </ul>
                    </div>
                </div>
            </main>  
        </div>
        );
    }
}

export default App;
