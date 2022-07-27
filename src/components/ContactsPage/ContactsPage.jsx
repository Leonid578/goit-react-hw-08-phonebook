import {TellContainer} from '../GlobalStyled.styled'
import { Form } from '../Form/Form';
import Title from '../Title/Title';
import ContactList from '../contactList/ContactList';
import NotContacts from '../NotContacts/NotContacts';
import { useGetAllContactsQuery } from '../../server/fetchContacts';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactsPage = () =>{
    const { data: listContacts, error, isLoading } = useGetAllContactsQuery();
    return (  
        <>  
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
        </>)
}

export default ContactsPage;