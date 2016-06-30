import { View, Text, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as emojiActions from '../actions/EmojiActions'
import { connect } from 'react-redux'
import EmojiList from '../components/EmojiList'

import Spinner from 'react-native-loading-spinner-overlay';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
  },
  loadingText: {
    marginBottom: 240,
  },
})

class EmojiContainer extends Component {
  constructor (props) {
    super(props)
    this.props.getEmojis()
  }

  render() {
    const loadingText = this.props.loading ? <Text style={styles.loadingText}>Loading emojis...</Text> : null
    return (
      <View style={styles.view}>
        <EmojiList emojis={this.props.emojis} />
        { loadingText }
        <Spinner color="#c86464" visible={this.props.loading} />
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    emojis: state.emojis.emojis,
    loading: state.emojis.loading,
    error: state.emojis.error,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ ...emojiActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EmojiContainer)
