import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ListView,
} from 'react-native'

import React, { Component } from 'react'

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  scroll: {
    flex: 1,
    flexDirection: 'row',
  },
  list: {
    flex: 1,
  },
})

export default class EmojiList extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    })

    const dataSource = this.transformEmojis(props.emojis)

    this.state = {
      dataSource: ds.cloneWithRows(dataSource),
      ds,
    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      dataSource: this.state.ds.cloneWithRows(this.transformEmojis(newProps.emojis)),
    })
  }


  transformEmojis (emojis) {
    return Object.keys(emojis).map((key) => {
      return {
        name: key,
        url: emojis[key],
      }
    })
  }

  renderRow (rowData) {
    return (
      <View>
        <Text>{rowData.name}</Text>
        <Image style={styles.icon} source={{ uri: rowData.url }} />
      </View>
    )
  }

  render () {
    return (
      <ScrollView style={styles.scroll}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          style={styles.list}
          enableEmptySections
        />
      </ScrollView>
    )
  }
}
