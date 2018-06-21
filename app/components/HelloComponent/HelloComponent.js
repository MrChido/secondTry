import React, {Component} from 'react';
import {StyleSheet, AppRegistry,Text,View, Button} from 'react-native';

export default class HelloComponent extends Component{
    constructor(){
        super();
        this.state={
            showFish: false
            
        }
    }
    displayFish(){
        this.setState({showFish:true});
    }
    
    static defaultProps={
      fish:'Bass'  
    }
    render(){
        let msg='';
        if(this.state.showFish){
           msg= 'Good Day, '+this.props.fish+'!';
           }else{
               msg= 'Good Day, Caleb!'
           }
        return (
        <View>
            <Text style={styles.intro}>{msg}</Text>
            <Button title="Incoming Message" onPress={this.displayFish.bind(this)}/>
            <Text style={styles.intro} > MegaMan 3 is the BEST MegaMan Game EVER on the NES!</Text>
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
    bTon1:{
        color:'rgb(203,65,84)',
    
    },
});