import { ListPersons } from './ContactList.module';
import Filter from '../Filter/Filter';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';


const ContactList = ({ contacts }) => {
  const filter = useSelector(state => state.filter);

  const findeByName = () => {
    return contacts.filter(
      elem =>
        elem.name.slice(0, filter.length).toLowerCase() === filter.toLowerCase()
    );
  };

  const nameContacts = findeByName();

  return (
    <>
      <Filter />
        <ListPersons>
          {nameContacts.map(el => (
            <Contact key={el.id} elem={el} />
          ))}
        </ListPersons>
    </>
  );
};

export default ContactList;
