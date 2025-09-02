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
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L1 11M1 1L11 11" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </li>
  )
}