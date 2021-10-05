import React from "react";

import { connect } from "react-redux";

import { bindActionCreators } from 'redux'
import { addDetails, editDetails, updateDetails } from "../../redux/action/action.bookdetails";
import { getCategory } from "../../redux/action/action.category";
import { getLanguage } from "../../redux/action/action.language";
import { getPublisher } from "../../redux/action/action.publisher";
import {Button} from "react-bootstrap"

import image from "./harry.png"

var sectionStyle = {
    backgroundImage: `url(${image})`,
    height:"1200px"
 }



class AddDetails extends React.Component {



    constructor(props) {

        super(props)

        this.state = {

            BOOK_CODE:this.props.editData.BOOK_CODE?this.props.editData.BOOK_CODE: "",

            BOOK_TITLE:this.props.editData.BOOK_TITLE?this.props.editData.BOOK_TITLE: "",
            category: this.props.editData.category_id?this.props.editData.category: "",
            author: this.props.editData.author?this.props.editData.author: "",
            language: this.props.editData.language?this.props.editData.language: "",
            publisher: this.props.editData.publisher?this.props.editData.publisher: "",
            remaining: this.props.editData.remaining?this.props.editData.remaining: null
          


        }
        this.props.getLanguage()
        this.props.getPublisher()
        this.props.getCategory()

    }



    saveData = () => {


        this.props.addDetailsData({ BOOK_CODE: this.state.BOOK_CODE, BOOK_TITLE: this.state.BOOK_TITLE,category_id:this.state.category, author: this.state.author, language_id: this.state.language,publisher_id: this.state.publisher, remaining: this.state.remaining })
    }
    editData = () => {

        this.props.editDetails({BOOK_CODE: this.state.BOOK_CODE, BOOK_TITLE: this.state.BOOK_TITLE,category_id:this.state.category, author: this.state.author, language_id: this.state.language,publisher_id: this.state.publisher, remaining: this.state.remaining }, this.props.editData.BOOK_CODE)
        console.log(this.state)

        this.props.updateDetails({})

        this.props.history.push('/viewdetails')

    }
    render() {
        let { editData } = this.props
        let { languageCollection } = this.props
        let { categoryCollection } = this.props
        let { publisherCollection } = this.props

        return (
            <div style={sectionStyle}>

            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>

            <div style={{color:"red",fontWeight:"bold"}}>      Book_code</div><input type="text" value={this.state.BOOK_CODE} onChange={(event) => this.setState({ BOOK_CODE: event.target.value })} /><br />

            <div style={{color:"red",fontWeight:"bold"}}>  Book_title</div> <input type="text" value={this.state.BOOK_TITLE} onChange={(event) => this.setState({ BOOK_TITLE: event.target.value })} /> <br />

            <div style={{color:"red",fontWeight:"bold"}}>    Category</div><select name="category" value={this.state.category} onChange={(event) => this.setState({ category: event.target.value })} >{
                   categoryCollection.map(res => (
                        <option value={res.category_id}  >{res.category}</option>
                    ))
                }
                </select>{this.state.category} <br />
                <div style={{color:"red",fontWeight:"bold"}}>   Author</div><input type="text" value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })} /> <br />
                <div style={{color:"red",fontWeight:"bold"}}>   Language</div><select name="lang" value={this.state.language} onChange={(event) => this.setState({ language: event.target.value })} >{
                   languageCollection.map(res => (
                        <option value={res.lang_id}  >{res.lang}</option>
                    ))
                }
                </select>{this.state.language}< br />

                <div style={{color:"red",fontWeight:"bold"}}>Publisher</div><select name="publisher" value={this.state.publisher} onChange={(event) => this.setState({ publisher: event.target.value })} >{
                  publisherCollection.map(res => (
                        <option value={res.publisher_id}  >{res.publisher}</option>
                    ))
                }
                </select>{this.state.publisher}<br />

                <div style={{color:"red",fontWeight:"bold"}}>   Book_Count</div><input type="text" value={this.state.remaining} onChange={(event) => this.setState({ remaining: event.target.value })} />
                {
                  editData.BOOK_CODE?<Button onClick={this.editData} variant="success">Update</Button>:<Button onClick={this.saveData} variant="warning">save</Button>

                }

</div>
            </div>

        )

    }

}



const mapDispatchToProps = (dispatch) => {

    return {

        addDetailsData: bindActionCreators(addDetails, dispatch),
        editDetails: bindActionCreators(editDetails, dispatch),
        updateDetails: bindActionCreators(updateDetails, dispatch),
        getLanguage: bindActionCreators(getLanguage, dispatch),
        getCategory: bindActionCreators(getCategory, dispatch),
        getPublisher: bindActionCreators(getPublisher, dispatch)



    }

}
const mapStateToProps = (state) => {
    return {
        editData: state.details.editData,
        languageCollection: state.language,
        categoryCollection: state.category,
        publisherCollection: state.publisher
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(AddDetails)