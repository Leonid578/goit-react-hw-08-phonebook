import style from './Contact.module.css';
import propTypes from 'prop-types';
import { FiX } from 'react-icons/fi';
import NotContacts from '../NotContacts/NotContacts'
import { useDeletedContactMutation } from '../../server/contacts';

const Contact = ({ elem }) => {
  const [deleted, { isLoading: isDeleted }] = useDeletedContactMutation();
  return (
  
    <ul > 
    {isDeleted ? (
      <NotContacts text={'Wite we deleting'} />
    ) : (
      <li className={style.li}>
        {elem.name}: {elem.phone}
        <button onClick={() => deleted(elem.id)}>
          <FiX className={style.svgFix} />
        </button>
      </li>
    )}
  </ul>
  );
};

Contact.propTypes = {
  elem: propTypes.object,
};

export default Contact;
