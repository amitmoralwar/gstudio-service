import React, { Component } from 'react';
import Header from './Header';

class Pages extends Component {
  render() {
    return (
      
    	<div id="content"> 
    	<Header/>
    		<div className="row">
    			<div className="col-md-8  contentcenter">
    				<div className="card ">
    					<div className="card-header">
    						Pages
    					</div>
    					<div className="card-body">
    			            <h2>Overview</h2>
{/*                            <p>Mauris sem velit, vehicula eget sodales vitae,
                            rhoncus eget sapiennnnn:</p>*/}
                            <form action="#">		
                                <label for="page_title">Page Title:</label>&emsp;
                                <input type="text"></input><br/><br/>
                                <label for="desc">Select Topics:</label>
                                
                                  <div class="dropdown">
                                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                      Select Topics
                                    </button>
                                    <div class="dropdown-menu">
                                      <a class="dropdown-item" href="#">Physics</a>
                                      <a class="dropdown-item active" href="#">Mathematics</a>
                                      <a class="dropdown-item disabled" href="#">Chemistry</a>
                                    </div>
                                  </div>

                                <br/>
                                <label for="desc">Description:</label>&emsp;
                                <textarea class="form-control" rows="5" id="comment"></textarea><br/><br/>
                                <button type="button" class="btn">Cancel</button>&emsp;&emsp;
                                <button type="button" class="btn btn-primary">Save and Continue</button>
                            </form>

    					</div> 
    					<div className="card-footer">
    						footer
    					</div>
    				</div>   
    			</div>
    			<div className="col-md-4 ">
    				<div className="card">
    					<div className="card-header">
    						Page Detail
    					</div>
    					<div className="card-body">
    					</div>
 
    					<div className="card-footer">
    						Footer
    					</div>
    				</div>	
		    	</div>
    		</div>
    	</div>
    );
  }
}

export default Pages;
