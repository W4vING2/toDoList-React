import './formSearch.css'

export default function FormSearch(props){

  return (
    <>
      <form id="form-search">
        <input onChange={(event) => props.onChange(event)} value={props.value} type="text" id="form-search__input" placeholder="Search task"/>
        <button type="button" id="form-search__btn" disabled={true}>
          <img
            src="../../../public/searchIcon.svg"
            alt="search-icon"
            width="16px"
            height="16px"
          />
        </button>
      </form>
    </>
  )
}