import './search-box.styles.scss'

const SearchBox = ({onChangeHandler, searchField}) => {
  return(
    <div className='search-box-container'>
      <input
        className='search-input'
        type='search'
        onChange={onChangeHandler}
      />
      <label 
        className={ `${
            searchField.length ? 'shrink' : '' 
          } search-label` }
      > 
        Search contacts
      </label>
    </div>
  )
}


export default SearchBox;