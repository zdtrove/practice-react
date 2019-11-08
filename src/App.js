import React from 'react';
import './App.css';
import Parent from './components/parentToChild/parent';

class App extends React.Component {
    state = {
        title: 'My title'
    }

    changeTheWorld = (newTitle) => {
        this.setState({title: newTitle});
    }

    render() {
        return (
            <div className="App">
                <Parent 
                    changeTheWorldEvent={this.changeTheWorld.bind(this, 'new title')} 
                    keepTheWorldSameEvent={this.changeTheWorld.bind(this, 'same world')}
                    title={this.state.title} 
                />
                {/* <Child doSomething={() => this.changeTheWorld('new title')} title={this.state.title} /> */}
            </div>
        );
    };
}

export default App;
