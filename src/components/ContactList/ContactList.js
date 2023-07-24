import React from 'react';
import styles from './ContactList.module.css'; // Импорт стилей

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.contactItem}>
          <span className={styles.contactName}>{contact.name}</span>
          <span>{contact.number}</span>
          <button
            onClick={() => onDeleteContact(contact.id)}
            className={styles.deleteButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
