import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/slice';

export const Contact = ({ contact }) => {
  const dispactch = useDispatch();
  return (
    <li>
      {contact.name} : {contact.number}
      <button
        type="button"
        onClick={() => {
          dispactch(deleteContact(contact.id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
