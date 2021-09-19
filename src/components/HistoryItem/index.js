import './index.css'

const HistoryItem = props => {
  const {initialHistoryList} = props
  const {timeAccessed, logoUrl, title, domainUrl} = initialHistoryList

  const onDelete = () => {}

  return (
    <li className="list-item">
      <div className="space">
        <p className="time">{timeAccessed}</p>
        <div className="app-name-container">
          <img src={logoUrl} alt="domain logo" className="logo-icon" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <button
        type="button"
        className="delete-button"
        testId="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
