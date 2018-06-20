import React, {Component} from 'react';
import {AppRegistry,Text,View} from 'react-native';

export default class HelloComponent extends Component{
    render(){
        return (
        <View>
        <Text>Hello World!</Text>
            <Text> MegaMan 3 is the BEST MegaMan Game EVER on the NES!</Text>
        </View>
        )
    }
}

AppRegistry.registerComponent('HelloComponent', ()=> HelloComponent);