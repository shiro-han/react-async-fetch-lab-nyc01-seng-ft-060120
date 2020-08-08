import React from 'react';
const URL = 'http://api.open-notify.org/astros.json'

class App extends React.Component {

    state = {}

    componentDidMount(){
        fetch(URL)
        .then(resp => resp.json())
        .then(data => this.setState(data))
    }

    render() {
        return (<div>
            {this.state.number ?
            <div>
                <h1> There are {this.state.number} People in Space</h1>
                {this.state.people.map(person => <p>{person.name}</p>)}
            </div>
            : <h1>Loading</h1>}
        </div>)
    }
}

export default App;