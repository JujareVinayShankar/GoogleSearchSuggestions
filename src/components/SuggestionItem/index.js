// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionList, updateSuggestion} = props
  const {suggestion} = suggestionList
  const onClickArrow = () => {
    updateSuggestion(suggestion)
  }
  return (
    <li className="list-item">
      <div className="each-item">
        <div>
          <p className="suggestion">{suggestion}</p>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow-img"
            onClick={onClickArrow}
          />
        </div>
      </div>
    </li>
  )
}

export default SuggestionItem
