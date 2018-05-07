import React, { Component } from 'react';
import { Content, Text , Body, Button,  } from 'native-base';
import { increment, decrement } from '../actions/index.js' ;
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Counter extends Component{
  render(){ 
    return( 
      
        <Content padder> 
              <Text>
                name: 
                
                {this.props.test}   
              </Text> 
          <Button dark bordered onPress= {() => this.props.increment()}>
            <Text>Increment</Text>
          </Button> 
          <Button dark bordered onPress= {() => this.props.decrement()}>
            <Text>Decrement</Text>
          </Button>
        </Content> 
    );
  }
}
  
function mapStateToProps(state, ownProps){
  return{
    test : state.count, 

  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({increment: increment, decrement: decrement}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Counter);