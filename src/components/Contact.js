import React from "react";
import { LocalForm, Control, Errors } from "react-redux-form";
import { Label } from "reactstrap";

const required = (val) => val && val.length;
const maxLength = (val) => (len) => !val || val.length <= len;
const minLength = (val) => (len) => !val || val.length >= len;
const isNumber = (val) => !isNaN(+val);
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function Contact() {
  return (
    <div className="container">
      <div className="row row-content">
        <div className="col-12 mt-4">
          <h1>Send Us Your Feedback</h1>
          <hr />
        </div>
        <div className="col">
          <LocalForm>
            <div className="form-group row">
              <div className="col-md-2">
                <Label htmlfor="firstName">First Name</Label>
              </div>
              <div className="col-md-8">
                <Control.text
                  model=".firstName"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".firstName"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Required",
                    minLength: "Must be at least 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-2">
                <Label htmlfor="lastName">Last Name</Label>
              </div>
              <div className="col-md-8">
                <Control.text
                  model=".lastName"
                  id="lastName"
                  name="lastName"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".lastName"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Required",
                    minLength: "Must be at least 2 characters",
                    maxLength: "Must be 15 characters or less",
                  }}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-2">
                <Label htmlFor="telNum">Phone</Label>
              </div>
              <div className="col-md-8">
                <Control.text
                  model=".telNum"
                  id="telNum"
                  name="telNum"
                  className="form-control"
                  validators={{
                    required,
                    isNumber,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".telNum"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Required",
                    isNumber: "Must be a number",
                  }}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-2">
                <Label htmlFor="email">Email</Label>
              </div>
              <div className="col-md-8">
                <Control.text
                  model=".email"
                  id="email"
                  name="email"
                  className="form-control"
                  validators={{
                    required,
                    validEmail,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".email"
                  component="div"
                  show="touched"
                  messages={{
                    required: "Required",
                    validEmail: "Must be an email",
                  }}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-12 col-md-4 offset-md-2">
                <div className="form-check">
                  <Label check>
                    <Control.checkbox
                      model=".agree"
                      name="agree"
                      className="form-check-input"
                    />
                    <strong>May We Contact You?</strong>
                  </Label>
                </div>
              </div>
              <div className="col-md-4">
                <Control.select
                  name="contactType"
                  className="form-control"
                  model=".contactType"
                >
                  <option>By Phone</option>
                  <option>By Email</option>
                </Control.select>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-2">
                <Label htmlFor="feedback">Feedback</Label>
              </div>
              <div className="col-md-8">
                <Control.textarea
                  name="feedback"
                  model=".feedback"
                  id="feedback"
                  className="form-control"
                  rows="8"
                />
              </div>
            </div>
          </LocalForm>
        </div>
      </div>
    </div>
  );
}

export default Contact;
