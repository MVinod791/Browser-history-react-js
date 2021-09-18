import {Component} from 'react'

import HistoryItem from '../HistoryItem'

import './index.css'

class SearchHistory extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchHistory = event => {
    this.setState({searchInput: event.target.value})
  }

  onUpdatedList = value => {
    this.setState({searchInput: value})
  }

  onDeleteHistory = () => {}

  render() {
    const {initialHistoryList} = this.props
    const {searchInput} = this.state
    const searchResult = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="search-history-nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
            className="history-name-img"
          />
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />

            <input
              value={searchInput}
              type="text"
              className="input-search"
              placeholder="Search History"
              onChange={this.onChangeSearchHistory}
            />
          </div>
        </div>
        <div className="search-history-container">
          <ul className="list-container">
            {searchResult.map(eachItem => (
              <HistoryItem
                initialHistoryList={eachItem}
                deletHistory={this.onDeleteHistory}
                updateList={this.onUpdatedList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SearchHistory
