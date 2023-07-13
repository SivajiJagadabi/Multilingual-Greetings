import './index.css'

const GreetMessage = props => {
  const {tabDetails, isActive} = props
  const {imageAltText, imageUrl} = tabDetails
  return (
    <div>
      {isActive && <img src={imageUrl} alt={imageAltText} className="image" />}
    </div>
  )
}

export default GreetMessage
