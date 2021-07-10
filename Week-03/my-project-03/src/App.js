import logo from './logo.svg';
import './App.css';
import { HomePage } from './Components/HomePage';
import { messageService } from './Components/messageService';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };
    }

    componentDidMount() {
       
        this.subscription = messageService.getMessage().subscribe(message => {
            if (message) {
                
                this.setState({ messages: [...this.state.messages, message] });
            } else {
               
                this.setState({ messages: [] });
            }
        });
    }

    componentWillUnmount() {
       
        this.subscription.unsubscribe();
    }

    render() {
        const { messages } = this.state;
        return (
            <Router>
                <div>
                    <div className="jumbotron">
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-sm-8 offset-sm-2">
                                    {messages.map((message, index) =>
                                        <div key={index} className="alert alert-success">{message.text}</div>
                                    )}
                                   
                                    <Route exact path="/" Component={HomePage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
            
        );
    }
}

export default App;