import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    changeSearchInput,
    onClearFilters,
  } = props

  const updateSearchInput = event => {
    changeSearchInput(event.target.value)
  }

  const onClickPrint = event => {
    console.log(event.target.value)
  }

  const clearFilters = () => {
    onClearFilters()
  }

  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      <input
        type="search"
        placeholder="Search"
        className="search-field"
        onChange={updateSearchInput}
      />
      <ul className="list-container">
        <h1 className="category-heading">Category</h1>
        {categoryOptions.map(eachCategory => (
          <li className="list-item">
            <button
              type="button"
              value={eachCategory.id}
              className="category-button"
              onClick={onClickPrint}
              key={eachCategory.id}
            >
              {eachCategory.name}
            </button>
          </li>
        ))}
      </ul>
      <ul className="list-container">
        <h1 className="category-heading">Rating</h1>
        {ratingsList.map(eachRating => (
          <li className="list-item">
            <button type="button" className="ratings-button">
              <img
                src={eachRating.imageUrl}
                alt={eachRating.id}
                className="rating"
              />{' '}
              & up
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="clear-filter-button"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
