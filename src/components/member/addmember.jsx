import React from "react";

import { connect } from "react-redux";

import { bindActionCreators } from 'redux'
import { addMember, editMember, updateMember } from "../../redux/action/action.member";

import {Button} from "react-bootstrap"
import book from "./boook.jfif"

var sectionStyle = {
    backgroundImage: `url(${book})`,
    height:"900px"
 }
 

class AddMember extends React.Component {



    constructor(props) {

        super(props)

        this.state = {

            MEMBER_ID: this.props.editData.MEMBER_ID?this.props.editData.MEMBER_ID: "",

            MEMBER_NAME:this.props.editData.MEMBER_NAME?this.props.editData.MEMBER_NAME: "",
            CITY:this.props.editData.CITY?this.props.editData.CITY: "",
            PHONE_NO: this.props.editData.PHONE_NO?this.props.editData.PHONE_NO:null,
            BOOK_CODE:this.props.editData.BOOK_CODE?this.props.editData.BOOK_CODE: ""




        }


    }
    



    saveData = () => {
      console.log(this.state)

        this.props.addMemberData({MEMBER_ID:this.state.MEMBER_ID, MEMBER_NAME:this.state.MEMBER_NAME,CITY:this.state.CITY,  PHONE_NO:this.state.PHONE_NO,BOOK_CODE:this.state.BOOK_CODE})
    }
    editData=()=>{

        this.props.editMember(this.state,this.props.editData.MEMBER_ID)
        console.log(this.state)

        this.props.updateMember({})

        this.props.history.push('/viewmember')

    }
    render() {
        let {editData}=this.props
        return (
            <div style={sectionStyle}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>

             <div style={{color:"red",fontWeight:"bold"}}>   MEMBER_ID</div><input type="text"  value={this.state.MEMBER_ID} onChange={(event) => this.setState({ MEMBER_ID: event.target.value })} /><br />

             <div style={{color:"red",fontWeight:"bold"}}> MEMBER_NAME </div><input type="text"  value={this.state.MEMBER_NAME} onChange={(event) => this.setState({  MEMBER_NAME: event.target.value })} /> <br />

             <div style={{color:"red",fontWeight:"bold"}}> CITY</div><input type="text"  value={this.state.CITY} onChange={(event) => this.setState({ CITY: event.target.value })} /> <br />
             <div style={{color:"red",fontWeight:"bold"}}>  PHONE_NO</div><input type="text"  value={this.state.PHONE_NO} onChange={(event) => this.setState({ PHONE_NO: event.target.value })} /> <br />
             <div style={{color:"red",fontWeight:"bold"}}>  BOOK_CODE</div><input type="text"  value={this.state.BOOK_CODE} onChange={(event) => this.setState({BOOK_CODE: event.target.value })} /><br />

                {
                editData.MEMBER_ID?<Button onClick={this.editData} variant="success">Update</Button>:<Button onClick={this.saveData} variant="warning">save</Button>

}
            </div>
           </div>
        )

    }

}



const mapDispatchToProps = (dispatch) => {

    return {

        addMemberData: bindActionCreators(addMember, dispatch),
        editMember:bindActionCreators(editMember,dispatch),
        updateMember:bindActionCreators(updateMember,dispatch)



    }

}
const mapStateToProps = (state) => {
    return {
        editData : state.member.editData
    }
}






export default connect( mapStateToProps, mapDispatchToProps)(AddMember)