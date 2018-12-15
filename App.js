import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, FlatList, Keyboard } from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";


const listItems = ['Development', 'Business', 'IT & Software', 'Office Productivity', 'Personal Development', 'Design', 'Marketing', 'LifeStyle', 'Photography', 'Health & Fitness', 'Teacher Training', 'Music']



export default class App extends Component {
     
  constructor() {
    super();

    this.state = {
      searchBarFocused: false
    }
  }

  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
    this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
  }

  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true })
  }

  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true })
  }

  keyboardWillHide = () => {
    this.setState({ searchBarFocused: false })
  }


  render() {
    return (
      <View style={styles.container}>
        <Animatable.View animation="slideInRight" duration={ 500 } style={styles.header}>
           <View style={{height: 50, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', padding: 5}}>
           
             <Animatable.View animation={this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"} duration={400}>
               <Icon name={this.state.searchBarFocused ? "md-arrow-back" : "search"} style={{ fontSize: 24 }} />
             </Animatable.View>

             <TextInput 
               placeholder="Search"
               style={{ fontSize: 16, marginLeft: 10 }}
               keyboardType="email-address"
               keyboardAppearance="dark"
               />
           </View>
        </Animatable.View>
        <FlatList
           style = {{ backgroundColor: this.state. searchBarFocused ? 'rgba(0,0,0, 0.3)' : 'white' }}
           data = { listItems }
           renderItem = {({ item }) => <Text style={{ padding: 20, fontSize: 20, }}>{ item }</Text>}
           keyExtractor = {(item, index ) => index.toString() }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: '#c45653',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
