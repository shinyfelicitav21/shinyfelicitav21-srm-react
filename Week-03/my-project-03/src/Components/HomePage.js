import React, { Component } from 'react'

import { messageService } from './Components/messageService';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class HomePage extends React.Component {
    sendMessage() {
       
        messageService.sendMessage('Message from Home Page Component to App Component!');
    }

    clearMessages() {
      
        messageService.clearMessages();
    }

    render() {
        return (
            <div>
                <h2>React + RxJS Component Communication</h2>
                <button onClick={this.sendMessage} className="btn btn-primary">Send Message</button>
                <button onClick={this.clearMessages} className="btn btn-secondary">Clear Message</button>                
            </div>
        );
    }
}

export { HomePage };