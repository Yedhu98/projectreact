import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteBook, getBook, updateBook } from '../../redux/action/action.bookissue';
import { Table } from "react-bootstrap";
import {Button} from "react-bootstrap"

class Book extends React.Component {
    
      
        constructor(props){
            super(props)
            this.props.getBookData()
        }
        editData=(id)=>{

            this.data=this.props.bookCollection[id]
    
            this.props.updateBookData(this.data)
    
            this.props.history.push('/addbook')
    
        }
        deleteData=(id)=>{

            this.props.deleteBook(id);
    
            this.props.getBookData()
    
            
    
        }
        render(){
                let { bookCollection} = this.props  
                return (
              
                    <>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>BOOK_ISSUE_NO</th>
                            <th>BOOK</th>
                            <th>MEMBER</th>
                            <th>START-DATE</th>
                            <th>END-DATE</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            bookCollection.map((res,key)=>(
                                <tr>
                                <td>{res.BOOK_ISSUE_NO}</td>
                                <td>{res.BOOK_TITLE}</td>
                                <td>{res.MEMBER_NAME}</td>
                                <td>{res.STARTDATE}</td>
                                <td>{res.END}</td>
                                <td><Button  onClick={()=>this.editData(key)} variant="info">edit</Button></td>
                                <td><Button onClick={()=>this.deleteData(res.BOOK_ISSUE_NO)} variant="danger">delete</Button></td>
                           
                                </tr>
                               
                            ) )}
                            </tbody>
                    </Table>
                        
                    </>)
            }
        }
        const mapStateToProps = (state) => {
            return {
                bookCollection : state.book.bookissue
            }
        }
        const mapDispatchToProps = (dispatch) => {
            return {
                getBookData: bindActionCreators( getBook, dispatch),
                updateBookData:bindActionCreators(updateBook,dispatch),
                deleteBook:bindActionCreators(deleteBook,dispatch)
               
            }
        }
        

export default connect(mapStateToProps, mapDispatchToProps)(Book)