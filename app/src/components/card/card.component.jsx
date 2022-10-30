import './card.styles.scss'
const Card = ({contact, onContactClick}) => {
  const {name, email, id} = contact
  return(
    <div 
      className={`card-container ${id}`}
      type='button' 
      onClick={onContactClick}
    >
      <h3 className={id}>{name}</h3>
      <p className={id}>{email}</p>
    </div>
  )
}

export default Card;