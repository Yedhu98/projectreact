import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { deleteMember, getMember, updateMember } from "../../redux/action/action.member";
import { Table,Button } from "react-bootstrap";



class Member extends React.Component {
    
    constructor(props){
        super(props)
        this.props.getMemberData()
    }
    editData=(id)=>{

        this.data=this.props.memberCollection[id]

        this.props.updateMemberData(this.data)

        this.props.history.push('/addmember')

    }
    deleteData=(id)=>{

        this.props.deleteMember(id);

        this.props.getMemberData()

        

    }
    render(){
            let { memberCollection} = this.props  
            return (
          
                <>
               <Table striped bordered hover variant="dark">
                        <thead>
                    <tr>
                        <th>MEMBER_ID</th>
                        <th>MEMBER_NAME</th>
                        <th>CITY</th>
                        <th>PHONE_NO</th>
                        <th>BOOK_CODE</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {
                        memberCollection.map((res,key)=>(
                            <tr>
                            <td>{res.MEMBER_ID}</td>
                            <td>{res.MEMBER_NAME}</td>
                            <td>{res.CITY}</td>
                            <td>{res.PHONE_NO}</td>
                            <td>{res.BOOK_CODE}</td>
                            <td><Button onClick={()=>this.editData(key)} variant="info">edit</Button></td>
                            <td><Button onClick={()=>this.deleteData(res.MEMBER_ID)} variant="danger">delete</Button></td>

                            
                            </tr>
                        ) )}
                        </tbody>
                </Table>
                    
                </>)
        }
    }
    const mapStateToProps = (state) => {
        return {
            memberCollection :state.member.memberdetails
        }
    }
    const mapDispatchToProps = (dispatch) => {
        return {
            getMemberData: bindActionCreators( getMember, dispatch),
            updateMemberData:bindActionCreators(updateMember,dispatch),
            deleteMember:bindActionCreators(deleteMember,dispatch)
        } 
        
                   
        

        
}    

export default connect(mapStateToProps, mapDispatchToProps) (Member)