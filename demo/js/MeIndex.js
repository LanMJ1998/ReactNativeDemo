/**
 * 完成我的主页
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
import  {MeBG,MeGeneralView,MeGeneralIcon,MeOpList,LogOut}  from './MeComponent';

export default class ToolsIndex extends Component {

    render() {
      return (
        <SafeAreaView>   
            <ScrollView  contentInsetAdjustmentBehavior="automatic" style={styles.body}>
                <View style={styles.me_bg}>
                    <MeBG/>
                    <MeGeneralView/>
                    <MeGeneralIcon/>
                </View>
                <View style={styles.separate_line}></View>  
                <MeOpList/> 
                <View style={styles.separate_line}></View> 
                <LogOut/>
            </ScrollView>
        </SafeAreaView>
       
        
      );
    }
  };

  const styles = StyleSheet.create({
    me_bg:{
        backgroundColor:'#fff',
        flexDirection:'column',
    },
    separate_line:{
        height:10,
        backgroundColor:"#F5F5F9",
    },
    body:{
        backgroundColor:'#F5F5F9',
        minHeight:Dimensions.get('window').height,
    }
  })


