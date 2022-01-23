import React from 'react';
import Tab from './Tab';
import { faInbox,faTicketAlt,faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

const Leftbox2 = () => {
  return (
       <>
        <Tab icon={faInbox}
        title="Inbox"/>
        <Tab icon={faTicketAlt}
        title="Ticket"/>
        <Tab icon={faExternalLinkAlt}
        title="Extra"/>
       </>
  );
};

export default Leftbox2;