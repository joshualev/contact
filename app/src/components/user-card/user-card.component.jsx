import {BsFillXCircleFill} from 'react-icons/bs'

import ContactPhoto from '../../assets/contact-photo.svg'
import './user-card.styles.scss'

const UserCard = ({selectedContact, onCloseContactClick}) => {
  const contact = selectedContact[0]
  console.log('selected Contact = ', contact)
  return(
    <div className='user-card-container'>
    {contact &&
    <>
      <header>
        <BsFillXCircleFill 
          className={`close ${selectedContact ? 'hidden' : null}`}
          onClick={onCloseContactClick}
        />
        <div className='img-boundary'>
          <img className='contact-image' src={ContactPhoto} alt='profile'/>
        </div>
        <div className='contact-name'>{contact.name}</div>
      </header>

      <main>
        <div className='contact-details'>
          <div className='contact-info'>
            <p className='key'>PHONE</p>        
            <p className='value'>{contact.phone}</p>
          </div>
          <div className='contact-info'>
            <p className='key'>EMAIL</p>    
            <p className='value'>{contact.email}</p>
          </div>
          <div className='contact-info'>
            <p className='key'>CITY</p>    
            <p className='value'>{contact.address.city}</p>
          </div>
          <div className='contact-info'>
            <p className='key'>COMPANY</p>    
            <p className='value'>{contact.company.name}</p>
          </div>
        </div>
      </main>
     </>
    }
    </div>
 
  )
}

export default UserCard