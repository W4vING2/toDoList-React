import './formAdd.css'
import ListItem from "../ListItem/ListItem.jsx";

export default function formAdd(props) {
  return (
    <form id="form-add">
      <input
        type="text"
        id="form-add__input"
        placeholder="New task title"
        value={props.inputValue}
        onChange={onInputChange}
      />
      <button
        type="button"
        id="form-add__btn"
        onClick={props.onClick}
      >Add
      </button>
    </form>
  )
}
