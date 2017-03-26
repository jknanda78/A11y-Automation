import React from "react";
import InputField from "../components/inputfield/";
import Button from "../components/button/";

const Signup = React.createClass({
  submitForm: function(e) {
    e.preventDefault();
  },
  render: function() {
    return (
      <div>
        <h2>Create Account</h2>
        <form noValidate role="form" onSubmit={this.submitForm} >
          <fieldset>
            <legend>Create Account</legend>
            <InputField id="email" ref="email" type="email" name="email" label="Email" placeholder="Enter email" />
            <InputField id="password" ref="password" type="password" name="password" label="Password" placeholder="Minimum 6 characters" />
            <InputField id="confirmPassword" ref="confirmPassword" type="password" name="confirmPassword" label="Confirm Password" placeholder="Same as password" />
            <InputField id="firstName" ref="firstName" type="text" name="firstName" label="First Name" placeholder="Your first name" />
            <InputField id="lastName" ref="lastName" type="text" name="lastName" label="Last Name" placeholder="Your last name" />
            <InputField id="birthDay" ref="birthDay" mask="date" type="text" name="birthDay" label="Birthday" placeholder="MM/DD/YYYY" />
            <Button type="submit" name="createaccount" id="createAccount" isPrimary={true} value="Create Account" onClick={this.submitForm} />
          </fieldset>
        </form>
      </div>
    );
  }
});

export default Signup;
