import { useState, useEffect } from 'react';

import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import UserCard from './components/user-card/user-card.component';

import './App.styles.scss';

function App() {
  const [searchField, setSearchField] = useState('')
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState(contacts)
  const [selectedContact, setSelectedContact] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setContacts(data)
    ); 
  }, []);

  useEffect(() => {
    const newFilteredContacts = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(searchField)
    }); 

    setFilteredContacts(newFilteredContacts);
  }, [contacts, selectedContact, searchField]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLowerCase())
  }

  const onContactClick = (event) => {
    const contactClass = (event.target.className)
      const newContactClass = contactClass.split(' ')
 
      if (newContactClass.length > 1 ){
        setSelectedContact(contacts.filter((contact) => 
          contact.id === Number(newContactClass[1])
        ))
      } else {
        setSelectedContact(contacts.filter((contact) => 
        contact.id === Number(newContactClass[0])))
      }
    }

  const onCloseContactClick = () => {
    setSelectedContact([])
  }

  return (
    <div className="app-container">
        <SearchBox 
          onChangeHandler={onSearchChange}
          searchField={searchField}
        />

        <CardList 
          contacts={filteredContacts} 
          onContactClick={onContactClick}
          searchField={searchField}
          onChangeHandler={onSearchChange}
        /> 

        <UserCard 
          selectedContact={selectedContact}
          onCloseContactClick={onCloseContactClick}
        />
    </div>
  );
}

export default App;
