/**
 * 完成工具主页组件
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
  import LinearGradient from 'react-native-linear-gradient';

  export  class TopBar extends Component {

    render() {
      return (
        <LinearGradient 
            start={{x: 0, y: 1}} end={{x: 1, y: 0}} 
            colors={['#9D89FF', '#5997FF']} style={styles.topbar_wrap}>
            <Text style={styles.topbar_title}>工具</Text>

        </LinearGradient>
        
      );
    }
  };

  export  class Title extends Component {

    render() {
      return (
        <Text style={styles.title_txt}>设备查询</Text>
        
        
      );
    }
  };

  export  class ToolsIcon extends Component {

    render() {
      return (
        <View style={styles.tools_icon_wrap}>
            <Image
                source={require('../img/tag_print.png')}
                style={styles.tools_icon_pic}/>
            <Text style={styles.tools_icon_txt}>标签打印</Text>
        </View>
        
      );
    }
  };

  const styles = StyleSheet.create({
    topbar_wrap:{
        width:Dimensions.get('window').width,
        height:64,
        justifyContent:'center',
        alignContent:'center',
    },
    topbar_title:{
        fontSize:18,
        textAlign:"center",
        textAlignVertical:'center',
        color:'#ffffff',
    },
    title_txt:{
        fontSize:14,
        marginTop:18,
        marginBottom:18,
        color:'#000000',
        opacity:0.85,
    },

    tools_icon_wrap:{
        flexDirection:"column",
        //justifyContent:"center",
        alignContent:'center',
        //paddingLeft:15,
        paddingRight:15,
        marginBottom:20,
      },
      tools_icon_pic:{
        marginBottom:5,
      },
      tools_icon_txt:{
        fontSize:12,
        color:"#000000",
        opacity:0.65,
        textAlign:'center',
        textAlignVertical:'center',
      },
  })