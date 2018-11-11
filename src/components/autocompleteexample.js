import React,{Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
//import Companies from '../data.json';
import {connect} from 'react-redux';
import {getlist} from '../actions';
import {Link} from 'react-router-dom';

//const colors=Companies.map(company=>company.aliasName);
//const temp=Companies.map(function(company){return {id:company.id,name:company.aliasName};});
//console.log(temp);
class AutoCompleteExampleFilters extends Component{
  componentDidMount(){
    this.props.getlist();
    console.log("this is a getlist func:",this.props.getlist());
  }
  onrequesthandle(chosenRequest,index){
    return <Link to={"/companies/list"}>{chosenRequest}</Link>
  }
  render(){
    const temp=this.props.Companies.map(company=>company.aliasName);;
      return <MuiThemeProvider muiTheme={getMuiTheme()}> 
        <AutoComplete
            floatingLabelText="Name"
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={temp}
            onNewRequest={this.onrequesthandle.bind(this)}
        />
        </MuiThemeProvider>
      }
    }
    function mapStateToProps(state){
      return {Companies:state.comp}
    }
export default connect(mapStateToProps,{getlist})(AutoCompleteExampleFilters);