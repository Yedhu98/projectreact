import React from "react";

import { connect } from "react-redux";

import { bindActionCreators } from 'redux'
import { addBook, editBook, updateBook } from "../../redux/action/action.bookissue";
import {Button} from "react-bootstrap"
import image from "./image.jfif"

var sectionStyle = {
    backgroundImage: `url(${image})`,
    height:"1200px"
 }
 


class AddBook extends React.Component {



    constructor(props) {

        super(props)

        this.state = {

            BOOK_ISSUE_NO:this.props.editData.BOOK_ISSUE_NO?this.props.editData. BOOK_ISSUE_NO:  "",

            BOOK_CODE:this.props.editData.BOOK_CODE?this.props.editData.BOOK_CODE:"",

            MEMBER_ID:this.props.editData.MEMBER_ID?this.props.editData.MEMBER_ID:"",
            STARTDATE: this.props.editData.STARTDATE?this.props.editData.STARTDATE:null,
           END:null


        }

    }



    saveData = () => {


        this.props.addBookData({ BOOK_ISSUE_NO:this.state.BOOK_ISSUE_NO, BOOK_CODE:this.state.BOOK_CODE, MEMBER_ID:this.state.MEMBER_ID, STARTDATE:this.state.STARTDATE, END:this.state.END })
    }
    editData=()=>{

        this.props.editBook(this.state,this.props.editData.BOOK_ISSUE_NO)
        console.log(this.state)

        this.props.updateBook({})

        this.props.history.push('/viewbook')

    }

    render() {
            let {editData}=this.props
        return (
            <div style={sectionStyle}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>

            <div style={{color:"red",fontWeight:"bold"}}>     BOOK_ISSUE_NO</div><input type="text" value={this.state. BOOK_ISSUE_NO} onChange={(event) => this.setState({ BOOK_ISSUE_NO: event.target.value })} />{this.state.BOOK_ISSUE_NO} <br />

            <div style={{color:"red",fontWeight:"bold"}}>     BOOK_CODE  </div>  <input type="text" value={this.state.BOOK_CODE } onChange={(event) => this.setState({ BOOK_CODE: event.target.value })} />{this.state.BOOK_CODE} <br />

            <div style={{color:"red",fontWeight:"bold"}}>   MEMBER_ID </div>   <input type="text" value={this.state.MEMBER_ID} onChange={(event) => this.setState({ MEMBER_ID: event.target.value })} />{this.state.MEMBER_ID} <br />
            <div style={{color:"red",fontWeight:"bold"}}>      STARTDATE </div>   <input type="date"  value={this.state.STARTDATE } onChange={(event) => this.setState({ STARTDATE: event.target.value })} />{this.state.STARTDATE} <br />
            <div style={{color:"red",fontWeight:"bold"}}>    END DATE   </div>      <input type="date"  onChange={(event) => this.setState({ END: event.target.value })} />{this.state.END}< br />
                {
                editData.BOOK_ISSUE_NO?<Button onClick={this.editData} variant="success">Update</Button>:<Button onClick={this.saveData} variant="warning">save</Button>

}
</div>
            </div>

        )

    }

}



const mapDispatchToProps = (dispatch) => {

    return {

        addBookData: bindActionCreators(addBook, dispatch),
        editBook:bindActionCreators(editBook,dispatch),
        updateBook:bindActionCreators(updateBook,dispatch)


    }

}
const mapStateToProps = (state) => {
    return {
        editData : state.book.editData
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(AddBook)