// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionList} = props
  const {suggestion} = suggestionList
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
          />
        </div>
      </div>
    </li>
  )
}

export default SuggestionItem
