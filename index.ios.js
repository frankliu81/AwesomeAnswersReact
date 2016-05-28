/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Question extends Component {
  render() {
    return <View>
              <Text>{this.props.question.title}</Text>
           </View>
  }
}

class AwesomeAnswers extends Component {
  constructor(props) {
    super(props);
    this.state = {questions: []};
  }

  componentDidMount(){
    fetch("http://localhost:3000/questions.json").
    then(function(response){
      return response.json();
    }).
    catch(function(){
      alert("problem loading questions");
    }).
    then ((json) => {
      console.log(json);
      console.log(this);
      this.setState({questions: json.questions});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Awesome Answers
        </Text>
        {console.log(this.state.questions)}
        {this.state.questions.map( (question, index) => <Question key={index} question={question}/>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeAnswers', () => AwesomeAnswers);
