import React from 'react';
import Tab from './Tab';
import { faTh,faIdCard,faClone,faLaptopCode} from '@fortawesome/free-solid-svg-icons';

const Leftbox3 = () => {
  return (
       <>
        <Tab icon={faTh}
        title="UI Elements"/>
        <Tab icon={faIdCard}
        title="Cards"/>
        <Tab icon={faClone}
        title="Components"/>
        <Tab icon={faLaptopCode}
        title="Widgets"/>
       </>
  );
};

export default Leftbox3;