// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import axios from "axios";

// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// // import CSRFToken from '../csrftoken';
// import DjangoCSRFToken from 'django-react-csrftoken'


// export default class CustomForm extends Component {
// 	constructor(props){
// 		super(props);
// 		this.dataChange = this.dataChange.bind(this);

// 		this.state = {
// 			name: '',
// 			loading: false,
// 			message:''
// 		}
// 	}

// 	dataChange(event){
// 		this.setState({
// 			// [event.target.name] : event.target.value
// 			name : event.target.value
// 		});
// 	}

// 	handleChange = event =>{
// 		this.setState({name: event.target.value});
// 	}

// 	postData = event => {
// 		event.preventDefault();

// 		const group = {
// 			name: this.state.name,
// 		};


// 		axios.
// 			post(`http://127.0.0.1:8000/add_group/`, { group_name: group.name} )
// 			.then(response => {
// 				// console.log(response);
// 				// console.log(response.data);
// 				alert('Group is created successfully  !!')
// 			});

// 		// this.setState({
//   //           name: ''
//   //       });
// 	}

//   render() {
//     return (
//     <div className="container">	
//       <Form onSubmit={this.postData}>

//         <FormGroup>
//         <DjangoCSRFToken/>
//           <Label for="name">Group Name</Label>
//           <Input type="text" name="name" onChange={this.dataChange} placeholder="Enter Group Name" />
//         </FormGroup>
                              


//                 <Button type="submit">Submit</Button>
//       </Form>
//      </div> 

//     )
//   }
// }


import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';

// import CSRFToken from '../csrftoken';
import DjangoCSRFToken from 'django-react-csrftoken'

import axios from "axios";

class Create_group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: null,
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.value);
    let name = event.target.name;
    let value = event.target.value;

    let data = {};
    data[name] = value;

    this.setState(data);
  }

  render() {
    return (
      <div className="container">
        <h4>Create Group Form</h4>
        <Form onSubmit={this.submit}>

          <FormGroup>
          	 <DjangoCSRFToken/>
          	  <Label for="name">Group Name</Label>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Please Enter Group name"
              onChange={this.handleChange}
            />
          </FormGroup>

          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }

  submit(e) {
    e.preventDefault();

    window.axios
      .post(`http://127.0.0.1:8000/add_group/`, {
        group_name: this.state.name,
      })
      .then(response => {
        console.log(response);
        alert('Group is created successfully  !!')
      });
  }
}

export default Create_group;

