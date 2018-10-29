import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// import CSRFToken from '../csrftoken';
import DjangoCSRFToken from 'django-react-csrftoken'


export default class EditGroup extends Component {
	constructor(props){
		super(props);
		this.dataChange = this.dataChange.bind(this);

		this.state = {
			name: '',
			loading: false,
			message:''
		}
	}

	dataChange(event){
		this.setState({
			// [event.target.name] : event.target.value
			name : event.target.value
		});
	}

	handleChange = event =>{
		this.setState({name: event.target.value});
	}

	postData = event => {
		event.preventDefault();

		const group = {
			name: this.state.name,
		};


		axios.
			get(`http://127.0.0.1:8000/update_group/`+this.props.match.group.name )
			.then(response => {
				console.log(response);
				console.log(response.data);
				this.setState({name:response.data.name})
			});

		// this.setState({
  //           name: ''
  //       });
	}

  render() {
    return (
    <div className="container">	
      <Form onSubmit={this.postData}>

        <FormGroup>
        <DjangoCSRFToken/>
          <Label for="name">Group Name</Label>
          <Input type="text" name="name" onChange={this.dataChange} placeholder="Enter Group Name" />
        </FormGroup>
                              


                <Button type="submit">Submit</Button>
      </Form>
     </div> 

    )
  }
}

