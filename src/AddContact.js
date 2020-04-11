import React, { Component } from 'react'
import {Consumer} from './context'
import uuid from 'react-uuid'

export default class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        showAddContactInfo: false,
    }
    showAddContact = e => {
        this.setState({showAddContactInfo: !this.state.showAddContactInfo})
    }
    onSubmit = (dispatch, e) => {
        e.preventDefault();
        
        const { name, email, phone} = this.state

        const newContact = {
            id: uuid(),
            name,
            email,
            phone 
        }
        dispatch({type: 'ADD_CONTACT', payload: newContact})
        
        // clear state 
        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    }
    onChange = e => this.setState({[e.target.name]: e.target.value })
   
    render() {
        const {name, email, phone, showAddContactInfo} = this.state 

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value
                    return (
                        <div className = 'card mb-3'>
                        <div className = 'card-header'>Add Contact <button onClick= {this.showAddContact} className = 'btn btn-sm btn-success'/></div>
                        {showAddContactInfo ? (
                            <div className = 'card-body'>
                            <form onSubmit = {this.onSubmit.bind(this, dispatch)}>
                                <div className = 'form-group'>
                                    <label htmlFor = 'name'>Name</label>
                                    <input className = 'form-control form-control-md' onChange = {this.onChange} name = 'name' type = 'text' placeholder = 'Enter name ...' value = {name}/>
                                </div>
                                <div className = 'form-group'>   
                                    <label htmlFor = 'email'>Email</label>
                                    <input className = 'form-control form-control-md' onChange = {this.onChange} name = 'email' type = 'email' placeholder = 'Enter email ...' value = {email}/>
                                </div>
                                <div className = 'form-group'>
                                    <label htmlFor = 'phone'>Phone</label>
                                    <input className = 'form-control form-control-md' onChange = {this.onChange} name = 'phone' type = 'text' placeholder = 'Enter phone ...' value = {phone}/>                      
                                </div>
                                <input type = 'submit' value = 'Add Contact' className = 'btn btn-block btn-light' />
                            </form>    
                        </div>
                        
                    
                        ): null}
                    </div>    
                    )
                }}
               
            </Consumer>    
        )
    }
}
