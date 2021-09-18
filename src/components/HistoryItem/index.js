import './index.css'

const HistoryItem = props => {
  const {initialHistoryList} = props
  const {timeAccessed, logoUrl, title, domainUrl} = initialHistoryList

  const onDelete = () => {}

  return (
    <li className="list-item">
      <p>{timeAccessed}</p>
      <div className="app-name-container">
        <img src={logoUrl} alt="logo url" className="logo-icon" />
        <h1 className="title">{title}</h1>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button type="button" className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
