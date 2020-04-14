import React, { Component } from 'react'
import {Consumer} from './context'
//import uuid from 'react-uuid'
import TextInputGroup from './TextInputGroup'
import axios from 'axios'

export default class EditContact extends Component {
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
    async componentDidMount(){
        const {id} = this.props.match.params

        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

        const contact = response.data

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    }

    onSubmit = async (dispatch, e) => {
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
         const updateContact = {
             name,
             email,
             phone
         }

        const {id} = this.props.match.params

        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact)

        dispatch({type: 'UPDATE_CONTACT', payload:response.data})
        // clear state  
        this.setState({
            name: '',
            email: '',
            phone: ''
        })
        this.props.history.push('/')
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
                        <div className = 'card-header'>Update Contact <button onClick= {this.showAddContact} className = 'btn btn-sm btn-success'/></div>
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
                                <input type = 'submit' value = 'Update Contact' className = 'btn btn-block btn-light' />
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
