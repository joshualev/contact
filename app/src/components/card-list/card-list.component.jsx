import Card from '../card/card.component'
import './card-list.styles.scss'

const CardList = ({contacts, onContactClick}) => {
  return(
    <div className='card-list-container'>
      {contacts.map((contact, index) => (
          <Card key={index} contact={contact} onContactClick={onContactClick}/>
        ))
      }    
    </div>
  )
}

export default CardList;