import React, { Component } from 'react';
import {Col,Button,FormGroup,Form,Input,Container ,Row,Jumbotron} from 'reactstrap';
import ShowLists from './components/ShowLists/ShowLists';

 
 
class App extends Component {
  constructor(props){
    super(props);
    this.addItemHandler = this.addItemHandler.bind(this);
   
    this.state = {  
      types: ['ירקות ופירות','גבינות','מוצרי ניקיון','מאפים'],
      itemName : "",
      selectedType : -1,
      items : {
        0 : [{key:'0', text:'ענבים'},{key:'1', text:'עגבניות'}],
        1 :  [{key:'2', text:'קוטג'},{key:'3', text:'צהובה'}],
        2 :  [{key:'4', text:'סבון גוף'},{key:'5', text:'שמפו'}],
    },    
  };  
  }
onChangeItemName =(e) =>
{
  this.setState({itemName: e.target.value})
}
onChangeSelectedType =(e) =>
{ 
  this.setState({selectedType: e.target.value})
}

addItemHandler = (e) => {  
  e.preventDefault();

  if(this.state.selectedType === -1 || this.state.itemName === "")
  {
    alert('חובה למלא הפריט וסוגו !')
    return;
  }
if(this.state.items[this.state.selectedType] == null)
{
  this.state.items[this.state.selectedType] = [];
}
  this.setState({state:this.state.items[this.state.selectedType].push ({ key:Date.Now , text:this.state.itemName})});
  
};
  render() {
    const listItems = this.state.types.map((type,i) =>
    <option value={i}>{type}</option>
  );

    return (
      <Container fluid className="text-center" >          
           <Jumbotron>
              <h1 className="display-3">רשימת קניות</h1>         
           </Jumbotron>
         
          <Row className="row justify-content-center">
          <Col  md={{ size: 4 }}>

               <Form onSubmit={this.addItemHandler} className="form-inline">                                
                <Input id="itemName"  value={this.state.itemName}
                onChange={this.onChangeItemName.bind(this)} placeholder="הוסף מוצר"></Input>
                <Col sm="1"></Col>                                
                <FormGroup>
                <Input type="select"  name="selectType" id="selectType" onChange={this.onChangeSelectedType.bind(this)} >                                   
                        <option value="-1">בחר</option>
                        {listItems}   
                </Input>
                </FormGroup>

                <Col sm="1"></Col>
                <Button color="primary" type="submit">הוסף</Button>          
         </Form>
         </Col>
        </Row>   

        <ShowLists  items={this.state.items}  types={this.state.types} ></ShowLists>

      </Container>
    );
  }
}  


export default App;



import React, { Component } from 'react'


