import {TellContainer} from '../GlobalStyled.styled'
import Title from '../Title/Title';
// import ContactList from '../contactList/ContactList';
// import NotContacts from '../NotContacts/NotContacts';

const RegisterPage = () =>{
    return (  
        <>  
            <TellContainer>
              <Title text={'Full Name'} />

              <Title text={'Email Address'} />

              <Title text={'Password'} />
              
            </TellContainer>
        </>
    )
}

export default RegisterPage;