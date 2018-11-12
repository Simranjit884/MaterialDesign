import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getlist} from '../actions';
//import CompaniesBalance from '../data1.json';

class Companies extends Component{
    componentDidMount(){
        this.props.getlist();
    }
    render(){
        if(this.props.company[0]===undefined){ 
            return <div>Loading...</div>
        }
        const {id}=this.props.match.params;
        let name=this.props.company.filter(element=>element.id===id);
        console.log(name[0].aliasName);
        //const bal=CompaniesBalance.filter(element=>element.id===id);
        return (
            <div>
                <p>id is={id}</p> 
                <p>name is={name[0].aliasName}</p>
            </div>
        );
    }   
}

function mapStateToProps({comp}){
    return {company:comp};
}
export default connect(mapStateToProps,{getlist})(Companies);