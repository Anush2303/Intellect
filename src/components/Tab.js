import React from 'react';
import '../css/Tab.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Tab = (props) => {
  return (
      <>
        <div className='tab'>
            <FontAwesomeIcon icon={props.icon} size="1x"/>
            <p className='title'>{props.title}</p>
            <FontAwesomeIcon className='right'icon={faChevronRight} size="1x"/>
        </div>
      </>
  )
};

export default Tab;
