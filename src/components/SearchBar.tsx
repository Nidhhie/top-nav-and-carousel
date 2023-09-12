import searchIcon from '../assets/search.svg'

const SearchBar = () => {
    return(
        <div className='search-container'>
          <input type="search" placeholder='Search something' className='search-input'/> 
          <img src={searchIcon} alt="search on site"/>
          </div>
    )
}

export default SearchBar