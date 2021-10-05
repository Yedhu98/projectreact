import { combineReducers } from "redux";
import { DetailsReducer } from "./bookdetailsreducer";
import {BookReducer} from "./bookissuereducer"
import { categoryReducer } from "./categoryreducer";
import { languageReducer } from "./languagereducer";
import { MemberReducer } from "./memberreducer";
import { publisherReducer } from "./publisherreducer";


export const rootReducer=combineReducers({
    book:BookReducer,
     details:DetailsReducer,
    member:MemberReducer,
    language:languageReducer,
    category:categoryReducer,
    publisher:publisherReducer
})
    