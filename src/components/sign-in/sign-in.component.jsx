import React, { Component } from 'react'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-in.styles.scss'


class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  onSubmit = async (e) => {
    e.preventDefault()

    const { email, password} = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
  
      this.setState({
        email: '',
        password: ''
      })
    } catch (err) {
      console.log(err)
    }

    
    this.setState({
      email: '',
      password: ''
    })
  }

  handleChange = (e) => {
    e.preventDefault()
    const {name, value} = e.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.onSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            handleChange={this.handleChange}
            value={this.state.email} 
            label="email"
            required 
          />
          <FormInput 
            name="password" 
            type="password" 
            value={this.state.password} 
            handleChange={this.handleChange}
            label="password"
            required 
          />
          <div className="buttons">
            <CustomButton type="submit">
              Sign in
            </CustomButton>
            <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
              { ' ' }
              Sign in with Google{ ' ' }
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn