import React, { Component } from 'react';
import { formik } from 'formik';
import './style.css';
const re = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      role: 'FullStack',
      gender: '',
      terms: '',
      errors: {
        name: '',
        email: '',
        role: '',
        gender: '',
        terms: ''
      }
    };
  }

  handleChange = ({ target: { name, value, checked } }) => {
    if (name === 'terms') value = checked;

    switch (name) {
      case 'name': {
        if (!value) errors.name = 'Name is reauired';
      }
      case 'email': {
        if (!value) errors.name = 'Email is reauired';
      }
      case 'role': {
        if (!value) errors.name = 'Role is reauired';
      }
      case 'gender': {
        if (!value) errors.name = 'Gender is reauired';
      }
      case 'terms': {
        if (!value) errors.name = 'Terms is reauired';
      }
    }

    this.setState({ [name]: value });
  };

  validation = () => {
    const { name, email, role, gender, terms } = this.state;
    if (name && email && role && gender && terms) {
      if (re.test(email)) return true;
    }
    return false;
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.validation()) console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>Job Application</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Candidate name: </label>
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            {this.state.errors.name ? <p>{this.state.errors.name}</p> : ''}
          </div>
          <br />
          <div>
            <label>Candidate email: </label>
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {this.state.errors.email ? <p>{this.state.errors.email}</p> : ''}
          </div>
          <br />
          <div>
            <label>Role applied: </label>
            <select
              name="role"
              value={this.state.role}
              onChange={this.handleChange}
            >
              <option value="FullStack">Full Stack</option>
              <option value="JavaScript">JS</option>
              <option value="Python">Python</option>
            </select>
            {this.state.errors.role ? <p>{this.state.errors.role}</p> : ''}
          </div>
          <br />
          <div>
            <label>Gender</label>
            <input
              name="gender"
              type="radio"
              value="male"
              onChange={this.handleChange}
            />
            Male
            <input
              name="gender"
              type="radio"
              value="female"
              onChange={this.handleChange}
            />
            Female
            <input
              name="gender"
              type="radio"
              value="other"
              onChange={this.handleChange}
            />
            Other
            {this.state.errors.gender ? <p>{this.state.errors.gender}</p> : ''}
          </div>
          <br />
          <div>
            <input
              name="terms"
              type="checkbox"
              checked={this.state.terms}
              onChange={this.handleChange}
            />
            <label>T&C</label>
            {this.state.errors.terms ? <p>{this.state.errors.terms}</p> : ''}
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}
