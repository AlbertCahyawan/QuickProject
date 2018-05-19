import React, { Component } from 'react';
import { AppRegistry, Alert } from "react-native";
import { Container, Content, Header , Title, List, ListItem, Left, Body, Right, Button, Icon, Text} from "native-base"; 
 
let routes = [{ 
  Hdate : "Jan 10, 5.38 Pm",
  Hname : "Hanamasa", 
  Hprice :  300000,   
},
{ 
  Hdate : "Jan 6, 5.14 Pm",
  Hname : "Genki Sushi", 
  Hprice :  100000,   
},  
]; 
export default class HistoryScreen extends Component {  

  render() {
    return (     
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
            <Body>
              <Title>MyOrder</Title>
            </Body>
          <Right />
        </Header>

        <Content>
          <List contentContainerStyle={styles.list}
              dataArray={routes}
              renderRow={data => { 
                  return ( 
                    <ListItem style={styles.OrderContainer}
                            button onPress={() => this.props.navigation.navigate('Home', )} >
                     <Left>
                        <Body>
                          <Text>{data.Hdate}</Text>
                          <Text note>{data.Hname}</Text>
                        </Body>
                      </Left>
                      
                      <Right> 
                        <Text>IDR {data.Hprice}</Text> 
                      </Right>  
                    </ListItem>  
                  );
              }}        
            /> 

        </Content>
      </Container>
    );
  }
} 

const styles = { 
   
  OrderContainer:{
      backgroundColor:'white',  
      marginLeft: 5,  
      margin: 5,
    }, 

}; 
