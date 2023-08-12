import {withRouter} from 'react-router-dom'

import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    clearFilter,
    filterCategoryId,
    filterRatingId,
    changeSearchInput,
  } = props

  const onClickCategory = event => {
    // filterCategoryId(event.target.value)
    const categoryId = event.currentTarget.getAttribute('data-category-id')
    filterCategoryId(categoryId)
    // console.log(categoryId)
  }

  const onClickRating = event => {
    // console.log(event.target.alt)
    // console.log(event.currentTarget.value)
    // filterRatingId(event.currentTarget.value)
    const ratingId = event.currentTarget.getAttribute('data-rating-id')
    filterRatingId(ratingId)
  }

  const onClickClearFilter = () => {
    clearFilter()
  }

  const onChangeInput = event => {
    // console.log(event.target.value)
    changeSearchInput(event.target.value)
  }

  return (
    <div className="filters-group-container">
      <div>
        <input type="search" onChange={onChangeInput} />
        <BsSearch />
      </div>
      <h1>Category</h1>
      <ul className="categories-container">
        {categoryOptions.map(eachCategory => (
          <li className="category-item" key={eachCategory.categoryId}>
            <button
              type="button"
              className="category-btn"
              onClick={onClickCategory}
              data-category-id={eachCategory.categoryId}
            >
              <p>{eachCategory.name}</p>
            </button>
          </li>
        ))}
      </ul>
      <h1>Rating</h1>
      <ul className="rating-list">
        {ratingsList.map(eachRating => (
          <li key={eachRating.ratingId}>
            <button
              type="button"
              className="rating-btn"
              onClick={onClickRating}
              data-rating-id={eachRating.ratingId}
            >
              <img
                src={eachRating.imageUrl}
                alt={`rating ${eachRating.ratingId}`}
                className="rating-img"
              />
              &up
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="clear-btn" onClick={onClickClearFilter}>
        Clear Filters
      </button>
    </div>
  )
}

export default withRouter(FiltersGroup)
