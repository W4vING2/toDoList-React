import './formSearch.css'

export default function FormSearch(){
  return (
    <>
      <form id="form-search">
        <input type="text" id="form-search__input" placeholder="Search task"/>
        <button type="submit" id="form-search__btn">
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