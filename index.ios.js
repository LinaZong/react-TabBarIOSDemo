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
  View,
  TabBarIOS

} from 'react-native';

var screnWidith = require('Dimensions').get('window').width;

var TabBarDemo = React.createClass({

  getInitialState(){
    return{
      selectedTabBarItem:'Home'
    }
  },
  render() {
    return (
        <View style={styles.container}>
          {/*头部*/}
          <View>
            <Text style={{marginTop: 20}}> TabBarDemo</Text>
          </View>

          {/*选项卡*/}
          <TabBarIOS barTintColor='black'
                     style={{width: screnWidith}}
          >
            {/*第一页面*/}
            <TabBarIOS.Item
                systemIcon='bookmarks'
                badge="3"
                selected= {this.state.selectedTabBarItem == "Home"}
                onPress={()=>{this.setState({selectedTabBarItem:'Home'})}}
            >


              <View style={[styles.conViewStyle, {backgroundColor: 'orange'}]}>
                <Text>首页</Text>
              </View>
            </TabBarIOS.Item>

            {/*第二页面*/}
            <TabBarIOS.Item
                systemIcon='more'
                badge="1"
                selected= {this.state.selectedTabBarItem == "second"}
                onPress={()=>{this.setState({selectedTabBarItem:'second'})}}
            >
              <View style={[styles.conViewStyle, {backgroundColor: 'red'}]}>
                <Text>第二页</Text>
              </View>
            </TabBarIOS.Item>
            {/*第三页面*/}
            <TabBarIOS.Item
                systemIcon='favorites'
                badge="2"
                selected= {this.state.selectedTabBarItem == "three"}
                onPress={()=>{this.setState({selectedTabBarItem:'three'})}}
            >
              <View style={[styles.conViewStyle, {backgroundColor: 'yellow'}]}>
                <Text>第三页</Text>
              </View>
            </TabBarIOS.Item>

            {/*第四页面*/}
            <TabBarIOS.Item
                systemIcon='downloads'
                badge="4"
                selected= {this.state.selectedTabBarItem == "four"}
                onPress={()=>{this.setState({selectedTabBarItem:'four'})}}
            >
              <View style={[styles.conViewStyle, {backgroundColor: 'green'}]}>
                <Text>第四页</Text>
              </View>
            </TabBarIOS.Item>
          </TabBarIOS>
        </View>
    );
  }
});


const styles = StyleSheet.create({
  container: {
   flex:1,
    alignItems: 'center',


  },

  conViewStyle: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  }

});

AppRegistry.registerComponent('TabBarDemo', () => TabBarDemo);
