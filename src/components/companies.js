import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getlist} from '../actions';


class Companies extends Component{
    componentDidMount(){
        this.props.getlist();
    }
    render(){
        if(!this.props.company) return <div>Loading...</div>
        const {id}=this.props.match.params;
        let name=this.props.company.filter(element=>element.id===id);
        return (
            <div>
                id is={id}         
            </div>
        );
    }   
}

function mapStateToProps({comp}){
    return {company:comp};
}
export default connect(mapStateToProps,{getlist})(Companies);