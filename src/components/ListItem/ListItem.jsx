import './listItem.css'

export default function ListItem(props){
  return (
      <li className="list-item">
        <input
          type="checkbox"
          id="list-item__checkbox"
        />
        <span className="list-item-span">{props.title}</span>
        <button type="button" id="list-item__button" onClick={props.onClick}>
          <img
            src="../../../public/xBtn.svg"
            alt="xBtn"
            width="10px"
            height="10px"
          />
        </button>
      </li>
  )
}