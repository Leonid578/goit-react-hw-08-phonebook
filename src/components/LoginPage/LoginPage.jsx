import {TellContainer} from '../GlobalStyled.styled'
import { Form } from '../Form/Form';
import Title from '../Title/Title';
// import ContactList from '../contactList/ContactList';
// import NotContacts from '../NotContacts/NotContacts';

 const LoginPage = () =>{
    return (  
        <>  
            <TellContainer>
            <Title text={'Sign in'} />
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

export default LoginPage;