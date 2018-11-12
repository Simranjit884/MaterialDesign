import React,{Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom';
//import blueIcon from '../invock_blue.svg';
import Accountcircle from 'material-ui/svg-icons/action/account-circle';

class App extends Component{
  render(){
    return(
      <div style={{height:'17px',paddingLeft:'69px',paddingTop:'120px'}}>
      <Link to="/companies/list">
  <MuiThemeProvider muiTheme={getMuiTheme()}>
  <FlatButton
      icon={<Accountcircle />}
      labelPosition="after"
      label="+add Party"
      primary={true}
    />
  </MuiThemeProvider>
  </Link>
  </div>
    );
  }
}
export default App;