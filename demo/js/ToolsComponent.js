/**
 * 完成工具主页组件
 *
 */
import React, {
    Component,
  } from 'react';
  
  import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ImageBackground ,
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

  export  class WorkHelp extends Component {

    render() {
      return (
        <ImageBackground style={styles.hlep_bg}
          source={require('../img/onl_kno.png')}>
          <Text style={styles.hlep_bg_txt_title}>在线知识库</Text>
          <Text style={styles.hlep_bg_txt_detail}>专业名词解释、 常见问题</Text>

        </ImageBackground>
        
        
      );
    }
  };

  export  class ReportItem extends Component {

    render() {
      return (
        <View style={styles.report_item}>
          <Text style={styles.report_item_txt}>设备告警故障统计</Text>
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
        flexDirection:'column',
        justifyContent:"center",
        alignContent:'center',
        //backgroundColor:'#666666',
        marginRight:18,
        marginBottom:20,
        
      },
      tools_icon_pic:{
        marginBottom:5,
        alignSelf:'center',
        
      },
      tools_icon_txt:{
        fontSize:12,
        color:"#000000",
        opacity:0.65,
        textAlign:'center',
        textAlignVertical:'center',
      },
      hlep_bg:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:(Dimensions.get('window').width-38)/2,
        height:(Dimensions.get('window').width-38)/2*76/168,
        marginBottom:18,

      },
      hlep_bg_txt_title:{
        fontSize:14,
        color:'#ffffff',
        marginBottom:4,
      },
      hlep_bg_txt_detail:{
        fontSize:12,
        color:'#ffffff',
      },
      report_item:{
        flexDirection:'row',
        justifyContent:"center",
        alignContent:'center',
        backgroundColor:'#EDF7FF',
        width:100,
        //marginRight:(Dimensions.get('window').width-28-112*2)/2,
        marginRight:10,
        marginBottom:14,

      },
      report_item_txt:{
        color:'#1890FF',
        fontSize:12,
        marginTop:4,
        marginBottom:4,
      }
  })