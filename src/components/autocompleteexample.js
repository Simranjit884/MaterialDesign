import React,{Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
import {connect} from 'react-redux';
import {getlist} from '../actions';
import logo from '../invock.svg';
//import {Link} from 'react-router-dom';

class AutoCompleteExampleFilters extends Component{
  constructor(){
    super();
    this.handlenewrequest=this.handlenewrequest.bind(this);
  }
  componentDidMount(){
    this.props.getlist();
  }
 /* onrequesthandle(chosenRequest,index){
    return console.log("Name:  "+chosenRequest,"id:  "+this.props.Companies[index].id);
  }*/

  handlenewrequest(name,id){
    this.props.history.push(`/companies/${id}`);
  }
  render(){
    const style={
      height:'24px',
      width:'24px',
      paddingLeft:'69px',
      paddingTop:'95px'
    };
    const temp=this.props.Companies.map(company=>company.aliasName);
      return <div>
      <img src={logo} style={style} alt="logo" />
      <MuiThemeProvider muiTheme={getMuiTheme()}> 
        <AutoComplete
            style={{paddingLeft:'15px',paddingTop:'95px'}}
            floatingLabelText="Name"
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={temp}
            onNewRequest={(chosenRequest,index)=>this.handlenewrequest(chosenRequest,this.props.Companies[index].id)}
        />
        </MuiThemeProvider>
        </div>
      }
    }
    function mapStateToProps(state){
      return {Companies:state.comp}
    }
export default connect(mapStateToProps,{getlist})(AutoCompleteExampleFilters);