import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, updateTabItem} = props
  const {id, buttonText} = tabDetails

  const onClickTab = () => {
    updateTabItem(id)
  }

  const buttonClass = isActive ? `active-btn` : `btn`

  return (
    <>
      <li className="greeting-btn-container">
        <button type="button" className={buttonClass} onClick={onClickTab}>
          {buttonText}
        </button>
      </li>
    </>
  )
}

export default TabItem
