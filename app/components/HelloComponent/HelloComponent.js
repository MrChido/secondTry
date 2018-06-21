import React, {Component} from 'react';
import {StyleSheet, AppRegistry,Text,View} from 'react-native';

export default class HelloComponent extends Component{
    constructor(){
        super();
        this.state={
            showFish: true
            
        }
    }
    
    
    static defaultProps={
      fish:'Bass'  
    }
    render(){
        let msg='';
        if(this.state.showFish){
           msg= 'Good Day, '+this.props.fish;+'!';
           }else{
               msg= 'Good Day, Caleb!'
           }
        return (
        <View>
            <Text style={styles.intro}>{msg}</Text>
            <Text style={styles.intro}> MegaMan 3 is the BEST MegaMan Game EVER on the NES!</Text>
        </View>
        )
    }
}

AppRegistry.registerComponent('HelloComponent', ()=> HelloComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    intro:{
    fontSize: 20,
    textAlign: 'center',
    color: '#cc00cc'
    
    },
});