import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';


import axios from 'axios';
import {Link} from 'react-router-dom';
import DjangoCSRFToken from 'django-react-csrftoken'

class GroupList extends Component {
  constructor(props){
    super(props);

    this.state = {
      name:'',
      groups: [],
      editMode: false
    };

    this.editGroup = this.editGroup.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    // console.log(event.target.value);
    let name = event.target.name;
    let value = event.target.value;

    let data = {};
    data[name] = value;

    this.setState(data);
  }
 

  componentDidMount() {
    fetch(`http://127.0.0.1:8000/get_groups`)
      .then(res =>  res.json())
      .then(
          (result) => {
            this.setState({
                groups: result.groups    
            });            
          },
      (error) => {
          this.setState({
            error
          });
      }
    )
  } 

 

  deleteGroup(name){
    console.log(name);      
    axios.post('http://127.0.0.1:8000/delete_group/', {group_name:name})
      .then(response =>{
        // this.props.history.push('/');
        console.log(response);
        this.componentDidMount();
      })
  }

  editGroup(name){

    console.log(name)
    this.setState({
      editMode:true
    })

     axios.put('http://127.0.0.1:8000/update_group/', {group_name:name})
      .then(response =>{
        // this.props.history.push('/');
        console.log(response);
        // this.componentDidMount();
      })

    let editingItem = this.state.groups.find(group=>{
      return group.name == name
    }) 

    this.setState({
      name: name
    })
  }

        

  render() {
    const groups = this.state;
    return (
      <div>
        <ListGroup>
          {this.state.groups.map(group => (
            <ListGroupItem key={group.name}>
              {group.name}

              <div className="float-right">
                <Button color="primary" size="sm" onClick={this.editGroup.bind(this, group.name)}>Edit</Button>{' '}
                <Button color="danger" size="sm" onClick={this.deleteGroup.bind(this, group.name)}>Delete</Button>{' '}
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>

         <div>
        <h4>Edit Group Form</h4>
        <Form>

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
      </div> 

      
    );
  }
}

export default GroupList; 