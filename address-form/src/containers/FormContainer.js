import React, { Component } from 'react';
import TextField from '../components/TextField';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: {
        "first-name": '',
        "last-name": '',
        "address": '',
        "city": '',
        "state": '',
        "zip-code": '',
        "phone-number": '',
        "email": ''
      },
      errors: []
    };
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      payload: {
        "first-name": '',
        "last-name": '',
        "address": '',
        "city": '',
        "state": '',
        "zip-code": '',
        "phone-number": '',
        "email": ''
      },
      errors: []
    });
  }

  handleChange(event) {
    let oldPayload = this.state.payload;
    let newPayload = {};
    Object.keys(oldPayload).forEach(key => {
      if (key === event.target.id) {
        newPayload[key] = event.target.value;
      } else {
        newPayload[key] = oldPayload[key];
      }
    });
    this.setState({
      payload: newPayload
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="callout" id="shipping-address-form">
        <h1>Shipping Address</h1>
        <div>
          <label htmlFor="first-name">First Name:</label>
          <input type="text" id="first-name" name="firstName" />
        </div>

        <div>
          <label htmlFor="last-name">Last Name:</label>
          <input type="text" id="last-name" name="lastName" />
        </div>

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" />

        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" />
        </div>

        <div>
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" />
        </div>

        <div>
          <label htmlFor="zip-code">Zip Code:</label>
          <input type="text" id="zip-code" name="zipCode" />
        </div>

        <div>
          <label htmlFor="phone-number">Phone Number:</label>
          <input type="text" id="phone-number" name="phoneNumber" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
        </div>

        <input type="submit" className="button" value="Submit "/>
      </form>
    );
  }
}

export default FormContainer;
