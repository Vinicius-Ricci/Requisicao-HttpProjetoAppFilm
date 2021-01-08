import React, {Component} from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator,Image } from 'react-native';
import api from './src/services/api';
import Filmes from './src/Filmes/index';

export default class App extends Component{

constructor(props){
  super(props);
  this.state = { 
    filmes: [],
    loading: true

  };
}


  async componentDidMount(){
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      filmes: response.data,
      loading: false
    });
  }

  render(){

    if(this.state.loading){

      return(
        <View style={styles.conatinerLoading}>
          <Image source={require('./src/img/logo-prime-video-256.png')} style={{width: 250, height: 250}}/>
          <ActivityIndicator color='#4682b4' size={40}/>
        </View>
      );

    }else{

      return(
  
        <View style={styles.container}>
  
          <FlatList 
            data={this.state.filmes}
            keyExtractor={item => item.id.toString()}
            renderItem={ ({item}) => <Filmes data={item}/> }  
          />
  
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({

  conatiner:{
    flex: 1
  },
  conatinerLoading:{
    flex: 1,
    backgroundColor: '#262a2d',
    alignItems: 'center',
    justifyContent: 'center'
  }
});   