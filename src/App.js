import {Users} from "./data/Users";
import {logDOM} from "@testing-library/react";
import './App.scss';
import './component/index.css'
import List from "./component/List";
export default function App() {
    const newObjIf = Users.map(props => (
        <List key={props.id} img={props.img} name={props.name} age={props.age}/>
    ))
    return (
        <div className="container">
            <ul className="list">
                {newObjIf}
            </ul>
        </div>
    );
}
