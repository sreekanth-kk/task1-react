import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends Component {
    
    constructor(props){  
        super(props);  
        this.state = {
            username: '',
            password: '',
            islogin: false
          }; 
          this.create = this.create.bind(this); 
          }


          create(e) {
            // add entity - POST
            e.preventDefault();
            // creates entity
            fetch("https://oij8kqktjl.execute-api.ap-south-1.amazonaws.com/dev/v1/adminlogin/upsert/I", {
              "method": "POST",
              "headers": {
                // "x-rapidapi-host": "fairestdb.p.rapidapi.com",
                "x-api-key": 'FrXKXBR6snan7ne7D2PZuagAz60eBteu8LEF67fH',
                "content-type": "application/json",
                "accept": "application/json"
              },
              "body": JSON.stringify({
                "userName" : this.state.username,
                "password" : this.state.password
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

    onEnter = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      onLogin = (e) => {
        e.preventDefault();
        if(this.state.username==='AdminOne' && this.state.password==='AdminPassword'){
            this.setState({islogin:true});
            this.create(e);
            // console.log(this.state);
        }
        else{
            this.setState({islogin:false});
        }
      }

    render() {
      return (
        <body>
            <div className='login-area'>
                LOGIN
            </div>
        <div className="main-login">
        <div className ="main2-login">
    <Form onSubmit={this.onLogin}>
      <Form.Group>
        <Form.Control type="username" name='username' placeholder='Username/Email' onChange={this.onEnter} required />
      </Form.Group>
      
      <Form.Group>
        <Form.Control type="password" name='password' placeholder='Password' onChange={this.onEnter} required />
      </Form.Group>
      
        <Button className="login-button" variant="primary" type="submit" size="lg" block  >
            LOGIN
        </Button>
        
    </Form>
        <Button variant="link">Forgot password ?</Button>
      </div>
      </div>
      
      </body>

      );
    }
  }
  
  export default Login;

