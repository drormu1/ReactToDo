import React from 'react';

import SubMenu from '../SubMenu/SubMenu';
import {Col,Container ,Row} from 'reactstrap';

const ShowLists = (props) => {  


return  <Container fluid>                             
        <Row className="rtl subMenus">            
            {props.types.map((type,i) => {
                return (<Col className=" ">
                <SubMenu   items={props.items[i] == null ?  [] :props.items[i]  }  type={i} title={type}></SubMenu>            
              </Col>)
            })}
                     
            </Row>
          </Container>
}
export default ShowLists;