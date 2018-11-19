import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Create_group from './components/groups/Create_group';
import List_groups from './components/groups/List_groups';
// import create_page from './components/pages/create_page';
// import list_pages from './components/pages/list_pages';
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
              <Route path='/List_groups' exact={true} component={ List_groups } />
              <Route  path='/Create_group' component={ Create_group } />
              
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;