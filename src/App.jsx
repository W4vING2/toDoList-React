import './index.css'
import FormAdd from './components/formAdd/FormAdd.jsx'
import FormSearch from './components/formSearch/FormSearch.jsx'
import ListItem from "./components/ListItem/ListItem.jsx";
import {useState} from "react";

export default function App() {
  function handleClick(){
    const title = document.querySelector('#form-add__input').value
    setItemsArray(() => {
      const newArray = [...itemsArray, title]
      return newArray
    })
    document.querySelector('#form-add__input').value = ''
  }
  const [itemsArray, setItemsArray] = useState([])
  return (
    <>
      <h1 className="app-heading">To Do List</h1>
      <FormAdd onClick={handleClick}/>
      <FormSearch/>
      <div className="app-actions">
        <span className="app-actions__span-total">Total tasks: <span>0</span></span>
        <button type='button' id="app-actions__btn">Delete All</button>
      </div>
      <ul className="list">
      </ul>
      {
        itemsArray.map((element, index) => {
            return <ListItem key={index} title={element}/>
        })
      }
    </>
  )
}
