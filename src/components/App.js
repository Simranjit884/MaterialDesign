import React,{Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom';

class App extends Component{
  render(){
    return(
      <Link to="/companies/list">
  <MuiThemeProvider muiTheme={getMuiTheme()}>
  <FlatButton
      label="+add Party Details"
      primary={true}
    />
  </MuiThemeProvider>
  </Link>
    );
  }
}
export default App;