import './index.css'
import FormAdd from './components/formAdd/FormAdd.jsx'
import FormSearch from './components/formSearch/FormSearch.jsx'
import ListItem from "./components/ListItem/ListItem.jsx";
import {useState} from "react";

export default function App() {
  const [value, setValue] = useState('')
  const [itemsArray, setItemsArray] = useState([])
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  function addItem(){
    if (!inputValue) return
    setItemsArray(prevItems => [...prevItems, inputValue])
    setCount(prevCount => prevCount + 1)
    setInputValue('')
  }

  function removeItem(indexToRemove){ // Принимаем индекс вместо event
    setItemsArray(prevItems => prevItems.filter((_, index) => index !== indexToRemove))
    setCount(prevCount => prevCount - 1)
  }

  function removeAllItems(){
    setItemsArray([])
    setCount(0)
  }

  function onChange(event){
    setValue(event.target.value)
  }

  // Функция для обновления значения input в FormAdd
  function onInputChange(event) {
    setInputValue(event.target.value)
  }

  const filteredItems = itemsArray.filter(element =>
    element.toLowerCase().includes(value.toLowerCase())
  )

  return (
    <>
      <h1 className="app-heading">To Do List</h1>
      <FormAdd
        onClick={addItem}
        onInputChange={onInputChange}
        inputValue={inputValue}
      />
      <FormSearch onChange={onChange} value={value}/>
      <div className="app-actions">
        <span className="app-actions__span-total">
          Total tasks: <span>{count}</span>
        </span>
        <button type='button' id="app-actions__btn" onClick={removeAllItems}>
          Delete All
        </button>
      </div>
      <ul className="list">
        {filteredItems.map((element, index) => (
          <ListItem
            key={index}
            title={element}
            onClick={() => removeItem(index)}
          />
        ))}
      </ul>
    </>
  )
}
