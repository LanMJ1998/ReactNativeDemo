/**
 * 完成待办主页
 *
 */
import React, {
    Component,
  } from 'react';

  import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Dimensions,
  } from 'react-native';


import  {GeneralView,GeneralViewIcon,Title,FaultItem}  from './DisposeIndexComponent';

export default class DisposeIndex extends Component {

    render() {
      return (
        <SafeAreaView>
            <ScrollView  contentInsetAdjustmentBehavior="automatic" >
                <View style={styles.general_view_wrap}>
                    <GeneralView />
                    <GeneralViewIcon/>
                </View>
                <View style={styles.separate_line}>
                </View>
                <View style={styles.detail_wrap}>
                    <Title/>
                    <FaultItem/>
                    <FaultItem/>
                    <Title/>
                    <FaultItem/>
                    <FaultItem/>
                </View>
                
            </ScrollView>
        </SafeAreaView>
       
        
      );
    }
  };

  

  const styles = StyleSheet.create({
    general_view_wrap: {
        backgroundColor:'#ffffff',
        alignItems: 'center',
        justifyContent:"center",
        flexDirection: 'column',
      },
    separate_line:{
      height:10,
      backgroundColor:"#F5F5F9",
    },
    detail_wrap:{
        paddingBottom:20,
    }
});

