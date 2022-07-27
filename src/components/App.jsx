import { Form } from './Form/Form';
import Title from './Title/Title';
import ContactList from './contactList/ContactList';
import NotContacts from './NotContacts/NotContacts';
import { useGetAllContactsQuery } from '../server/fetchContacts';
import {TellContainer} from './GlobalStyled.styled'

import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './AppBar/Header'

const App = () => {
  const { data: listContacts, error, isLoading } = useGetAllContactsQuery();
  return (
      <>
        <AppBar />
        <TellContainer>
        <Title text={'Phonebook'} />
        <Form />

        <Title text={'Contacts'} />
        {error ? (
          <NotContacts text={`Data contacts ${error.data}`} />
        ) : isLoading ? (
          <NotContacts text={'Wite loading now...'} />
        ) : (
          <ContactList contacts={listContacts} />
        )}
        </TellContainer>
      </>
      
    
  );
};

export default App;
