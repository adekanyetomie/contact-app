import React, { Component } from 'react'

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

    render() {
        const {name, email, phone, showAddContactInfo} = this.state 

        return (
            <div className = 'card mb-3'>
                <div className = 'card-header'>Add Contact <button onClick= {this.showAddContact} className = 'btn btn-sm btn-success'/></div>
                {showAddContactInfo ? (
                    <div className = 'card-body'>
                    <form>
                        <div className = 'form-group'>
                            <label htmlFor = 'name'>Name</label>
                            <input className = 'form-control form-control-md' name = 'name' type = 'text' placeholder = 'Enter name ...' value = {name}/>
                        </div>
                        <div className = 'form-group'>   
                            <label htmlFor = 'email'>Email</label>
                            <input className = 'form-control form-control-md' name = 'email' type = 'email' placeholder = 'Enter email ...' value = {email}/>
                        </div>
                        <div className = 'form-group'>
                            <label htmlFor = 'phone'>Phone</label>
                            <input className = 'form-control form-control-md' name = 'phone' type = 'text' placeholder = 'Enter phone ...' value = {phone}/>                      
                        </div>
                        <input type = 'submit' value = 'Add Contact' className = 'btn btn-block btn-light' />
                    </form>    
                </div>
                 
            
                ): null}
            </div>    
                
        )
    }
}
