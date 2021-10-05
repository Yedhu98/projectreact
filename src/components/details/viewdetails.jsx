import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteDetails, getDetails, updateDetails } from "../../redux/action/action.bookdetails";
import { Table,Button } from "react-bootstrap";


class ViewDetails extends React.Component {
    
      
        constructor(props){
            super(props)
            this.props.getDetailsData()
        }
        editData=(id)=>{

            this.data=this.props.DetailsCollection[id]
    
            this.props.updateDetailsData(this.data)
    
            this.props.history.push('/adddetails')
    
        }
        deleteData=(id)=>{

            this.props.deleteDetails(id);
    
            this.props.getDetailsData()
    
            
    
        }
        render(){
                let { DetailsCollection} = this.props
               
                return (
                    <>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Book_Code</th>
                            <th>Book_Title</th>
                            <th>Category</th>
                            <th>Author</th>
                            <th>Language</th>
                            <th>Publisher</th>
                            <th>Book_Count</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            DetailsCollection.map((res,key)=>(
                                <tr>
                                <td>{res.BOOK_CODE}</td>
                                <td>{res.BOOK_TITLE}</td>
                                <td>{res.category}</td>
                                <td>{res.author}</td>
                                <td>{res.lang}</td>
                                <td>{res.publisher}</td>
                                <td>{res.remaining}</td>
                                <td><Button onClick={()=>this.editData(key)} variant="info">edit</Button></td>
                                <td><Button onClick={()=>this.deleteData(res.BOOK_CODE)} variant="danger">delete</Button></td>
                                </tr>
                            ) )}
                            </tbody>
                    </Table>
                        
                    </>)
            }
        }
        const mapStateToProps = (state) => {
            return {
                DetailsCollection: state.details.bookdetails
            }
        }
        const mapDispatchToProps = (dispatch) => {
            return {
                getDetailsData: bindActionCreators( getDetails, dispatch),
                updateDetailsData:bindActionCreators(updateDetails,dispatch),
                deleteDetails:bindActionCreators(deleteDetails,dispatch)
               
            
            
            }
        }
        

export default connect(mapStateToProps, mapDispatchToProps)(ViewDetails)