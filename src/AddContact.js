import React, { Component } from 'react'
import {Consumer} from './context'
import uuid from 'react-uuid'
import TextInputGroup from './TextInputGroup'

export default class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        showAddContactInfo: false,
        errors: {},

    }
    showAddContact = e => {
        this.setState({showAddContactInfo: !this.state.showAddContactInfo})
    }
    onSubmit = (dispatch, e) => {
        e.preventDefault();
        
        const { name, email, phone,} = this.state
        
        //Check for errors
        if (name === '') {
            this.setState({errors: {name: 'Name is required'}})
            return
        }
        if (email === '') {
            this.setState({errors: {email: 'Email is required'}})
            return
        }
        if (phone === '') {
            this.setState({errors: {phone: 'Phone is required'}})
            return
        }


        const newContact = {
            id: uuid(),
            name,
            email,
            phone,
            errors: {}
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
        const {name, email, phone, showAddContactInfo, errors} = this.state 

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
                                <TextInputGroup 
                                label = 'Name' 
                                name = 'name'
                                placeholder = 'Enter name ...'
                                value = {name}
                                onChange = {this.onChange}
                                error = {errors.name}
                                />
                                <TextInputGroup 
                                label = 'Email' 
                                name = 'email'
                                placeholder = 'Enter email ...'
                                value = {email}
                                onChange = {this.onChange}
                                type = 'email'
                                error = {errors.email}
                                />
                                <TextInputGroup 
                                label = 'Phone' 
                                name = 'phone'
                                placeholder = 'Enter phone ...'
                                value = {phone}
                                onChange = {this.onChange}
                                error = {errors.phone}
                                />
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
