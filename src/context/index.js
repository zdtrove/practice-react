import React, { Component } from 'react'
import ContextApi from './context-api';
import ContextApi02 from './context-api-02';
import ContextApiBookProject from './context-api-book-project';

export default class Main extends Component {
    render() {
        return (
            <ContextApiBookProject />
        )
    }
}
