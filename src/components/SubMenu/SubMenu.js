import React from 'react';
import classes from './SubMenu.css';


const SubMenu = (props) => {  
    const items = props.items;      
    const listItems = items.map((item) =>
            <li key={item.key}  >{item.text}</li>
  );
  const marginTop = {
    margin: '40px',
    
  };
  return  <div className="text-center" style={marginTop}>
            <h2>
                {props.title} - {items.length } מוצרים
                <hr/>
            </h2>
            <ul>{listItems}</ul>
      </div>;
}
export default SubMenu;