import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioy: '',
      radion: '',
      cid: '',
      fname: '',
      mname: '',
      sname: '',
      dob: '',
      idtype: '',
      idnumber: '',
    };
    this.create2 = this.create2.bind(this);
  }

  create2(e) {
    // add entity - POST
    e.preventDefault();
    // creates entity
    fetch("https://uo0emj301l.execute-api.ap-south-1.amazonaws.com/dev/v1/adminsearch/upsert/S", {
      "method": "POST",
      "headers": {
        // "x-rapidapi-host": "fairestdb.p.rapidapi.com",
        "x-api-key": 'LWotbtXS4XajPBpAedzNY3kOCw9Q0d028AFgVEBj',
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
        "clientInfo": {
          "clientId": this.state.cid,
          "firstName": this.state.fname,
          "middleName": this.state.mname,
          "lastName": this.state.lname,
          "dateOfBirth": this.state.dob,
          "identityInfo": [
            {
              "idType": this.state.idtype,
              "idNumber": this.state.idnumber
            },
            {
              "idType": this.state.idtype,
              "idNumber": this.state.idnumber
            }
          ]
        }
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      });
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { radioy, radion, cid, fname, mname, sname, dob, idtype, idnumber } = this.state;
    // console.log(this.state)
    // console.log(JSON.stringify(this.state));
    const fileData = JSON.stringify(this.state);
    const blob = new Blob([fileData], { type: "json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'Data.json';
    link.href = url;
    link.click();
    this.create2(e);

  }


  render() {
    return (
      <div className="main">
        <div className="main2">
          <Form onSubmit={this.onSubmit}>
            <div key={`inline-radio`} className="mb-3">
              <p>Do you already have a Will & More Customer id?</p>
              <Form.Check inline label="Yes" type="radio" name='radioy' id={`inline-radio-1`} onChange={this.onChange} />
              <Form.Check inline label="No" type="radio" name='radion' id={`inline-radio-2`} onChange={this.onChange} />
            </div>
            <h3>Details of deceased:</h3>
            <Form.Group controlId="formGridClientid">
              <Form.Label>Client id (If in possession)</Form.Label>
              <Form.Control type="id" name='cid' onChange={this.onChange} />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridFname">
                <Form.Label>First name *</Form.Label>
                <Form.Control type="fname" name='fname' onChange={this.onChange} required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridMname">
                <Form.Label>Middle name</Form.Label>
                <Form.Control type="mname" name='mname' onChange={this.onChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSname">
                <Form.Label >Surname *</Form.Label>
                <Form.Control type="sname" name='sname' onChange={this.onChange} required />
              </Form.Group>
            </Form.Row>


            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Date of Birth *</Form.Label>
                <Form.Control type="date" name='dob' onChange={this.onChange} required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAadhaar">
                <Form.Label>Aadhaar/Passport/PAN *</Form.Label>
                <Form.Control as="select" name='idtype' onChange={this.onChange} required>
                  <option>Aadhaar</option>
                  <option>Passport</option>
                  <option>PAN</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridNumber">
                <Form.Label>Card ID</Form.Label>
                <Form.Control name='idnumber' onChange={this.onChange} required />
              </Form.Group>
            </Form.Row>



            <Button variant="primary" type="submit" >
              Save & Next
  </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Forms;