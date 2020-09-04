import React from "react";
import { LocalForm, Control, Errors } from "react-redux-form";
import { Label } from "reactstrap";

const required = (val) => val && val.length;
const maxLength = (val) => (len) => !val || val.length <= len;
const minLength = (val) => (len) => !val || val.length >= len;

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
              <div className="col-md-10">
                <Control.text
                  model=".firstName"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".firstName"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Required",
                  }}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-2">
                <Label htmlfor="lastName">Last Name</Label>
              </div>
              <div className="col-md-10">
                <Control.text
                  model=".lastName"
                  id="lastName"
                  name="lastName"
                  className="form-control"
                  validators={{
                    required,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".lastName"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Required",
                  }}
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
