import React, { Component } from 'react';
import { AppRegistry, Alert } from "react-native";
import { Container, Content, Header , Title, List, ListItem, Left, Body, Right, Button, Icon, Text} from "native-base"; 
 
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
          <List>

            <ListItem style={styles.OrderContainer}
                    button onPress={() => this.props.navigation.navigate('Home', )} >
 
                    <Left>
                      <Body>
                        <Text>Jan 10, 5.38 Pm</Text>
                        <Text note>Hanamasa</Text>
                      </Body>
                    </Left>
                
                    <Right> 
                      <Text>IDR 300000</Text> 
                    </Right>
                    
                     
            </ListItem>  

            <ListItem style={styles.OrderContainer}
                    button onPress={() => this.props.navigation.navigate('Home', )} >
 
                    <Left>
                      <Body>
                        <Text>Jan 6, 5.14 Pm</Text>
                        <Text note>Genki Sushi</Text>
                      </Body>
                    </Left>
                
                    <Right> 
                      <Text>IDR 100000</Text> 
                    </Right>
                    
                     
            </ListItem>  
            
          </List>   
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
