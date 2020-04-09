import React, {Component} from 'react'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                phone: '234-888-888',
                email: 'john@gmail.com'
            },
            {
                id: 2,
                name: 'Jane Doe',
                phone: '234-999-999',
                email: 'jane@gmail.com'
            },
            {
                id: 3,
                name: 'Karen Smith',
                phone: '234-777-777',
                email: 'karen@gmail.com'
            } 
        ]       
    }
    render() {
        return (
        <Context.Provider value = {this.state}>{this.props.children}</Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer