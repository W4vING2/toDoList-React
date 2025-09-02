import './index.css'
import FormAdd from './components/formAdd/FormAdd.jsx'
import FormSearch from './components/formSearch/FormSearch.jsx'
import ListItem from "./components/ListItem/ListItem.jsx";
import {useState} from "react";

export default function App() {

  function addItem(){
    const title = document.querySelector('#form-add__input').value
    if (!title) return
    setItemsArray(() => {
      const newArray = [...itemsArray, title]
      return newArray
    })
    setCount(() => {
      const numCount = Number(count)
      return numCount + 1
    })
    document.querySelector('#form-add__input').value = ''
  }

  function removeItem(event){
    const closestListItem = event.target.closest('li')
    closestListItem.remove()
    setCount(() => {
      const numCount = Number(count)
      return numCount - 1
    })
  }

  function removeAllItems(){
    setItemsArray(() => {
      const nullArray = []
      return nullArray
    })
    setCount('0')
  }

  function onChange(event){
    setValue(event.target.value)
  }

  const [value, setValue] = useState('')
  const [itemsArray, setItemsArray] = useState([])
  const [count, setCount] = useState('0')

  return (
    <>
      <h1 className="app-heading">To Do List</h1>
      <FormAdd onClick={addItem}/>
      <FormSearch onChange={onChange} value={value}/>
      <div className="app-actions">
        <span className="app-actions__span-total">Total tasks: <span>{count}</span></span>
        <button type='button' id="app-actions__btn" onClick={removeAllItems}>Delete All</button>
      </div>
      <ul className="list">
      </ul>
      {
        itemsArray.filter((element) => {
          if (element.includes(value)){
            return element
          }
        })
          .map((element, index) => {
            return <ListItem key={index} title={element} onClick={(event) => removeItem(event)}/>
        })
      }
    </>
  )
}
