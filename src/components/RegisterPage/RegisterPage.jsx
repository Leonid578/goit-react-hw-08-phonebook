import {TellContainer} from '../GlobalStyled.styled'
import { Form } from '../Form/Form';
import Title from '../Title/Title';
// import ContactList from '../contactList/ContactList';
// import NotContacts from '../NotContacts/NotContacts';

const RegisterPage = () =>{
    return (  
        <>  
            <TellContainer>
            <Title text={'Sign up'} />
            <Form />
    
            {/* <Title text={'Contacts'} />
            {error ? ( 
              <NotContacts text={'Wite loading now...'} />
            ) : (
              <ContactList contacts={listContacts} />
            )} */}
            </TellContainer>
        </>
    )
}

export default RegisterPage;