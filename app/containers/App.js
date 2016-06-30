import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import store from '../store'
import EmojiContainer from './EmojiContainer'


export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <EmojiContainer />
      </Provider>
    )
  }
}
