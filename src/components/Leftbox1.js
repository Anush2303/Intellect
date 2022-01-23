import React from 'react';
import Tab from './Tab';
import { faThLarge,faChartBar,faClone} from '@fortawesome/free-solid-svg-icons';

const Leftbox1 = () => {
  return (
       <>
        <Tab icon={faThLarge}
        title="Dashboard"/>
        <Tab icon={faChartBar}
        title="Sidebar Type"/>
        <Tab icon={faClone}
        title="Page Layouts"/>
       </>
  );
};

export default Leftbox1;
