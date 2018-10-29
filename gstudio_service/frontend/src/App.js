// import React, { Component } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import logo from './logo.svg';
// import axios from 'axios';

// import './App.css';

// class App extends Component {

//   constructor(props){
//     super(props)
//     this.state = {
//       groups: []
//     }
//   }

//   render() {
//       return (
//       <div class="container">
//         Gstudio-Service Testing APIS
//         <button type="button" onClick={this.onClick}>Send GET /products </button>
//       </div>
//       );
//   }

//   onClick(ev) {
//       console.log("Sending a GET API Call !!!");
//       axios.get('http://127.0.0.1:8000/get_groups/')
//       .then(res => console.log(res.data))
//   }  

// }

// export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create_group from './components/groups/Create_group';
import List_groups from './components/groups/List_groups';
import create_page from './components/pages/create_page';
import list_pages from './components/pages/list_pages';
import DjangoCSRFToken from 'django-react-csrftoken'


class App extends Component {
  render() { 
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Gstudio-Service </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link to={'/Create_group'} className="nav-link">Create Group</Link></li>
                <li className="nav-item"><Link to={'/List_groups'} className="nav-link">List Groups</Link></li>
              </ul>
              <hr />
            </div>
          </nav> <br />
          <Switch>
              <Route exact path='/Create_group' component={ Create_group } />
              <Route path='/List_groups' component={ List_groups } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;