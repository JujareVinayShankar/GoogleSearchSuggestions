// Write your code here
import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: ' ',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const value = searchInput.toLowerCase()
    const finalResults = suggestionsList.filter(eachUser =>
      eachUser.suggestion.includes(value),
    )

    return (
      <div className="bg-container">
        <div className="google-img-container">
          <img
            className="google-img"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
        </div>
        <div className="total-search-box">
          <div className="search-box-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
            </div>
            <div className="input-container">
              <input
                className="search-box"
                type="search"
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <div className="suggestions-container">
            <ul className="unordered-list">
              {finalResults.map(eachSuggestion => (
                <SuggestionItem
                  suggestionList={eachSuggestion}
                  key={eachSuggestion.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
