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
        <Text style={styles.title_txt}>{this.props.titleName}</Text>
      );
    }
  };

  export  class WorkHelp extends Component {
    render() {
      return (
        <ImageBackground style={styles.hlep_bg}
          source={this.props.pic}>
          <Text style={styles.hlep_bg_txt_title}>{this.props.name1}</Text>
          <Text style={styles.hlep_bg_txt_detail}>{this.props.name2}</Text>
        </ImageBackground>
      );
    }
  };

  export  class ReportItem extends Component {
    render() {
      return (
        <View style={styles.report_item}>
          <Text style={styles.report_item_txt}>{this.props.name}</Text>
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
    hlep_bg:{
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      width:(Dimensions.get('window').width-42)/2,
      height:(Dimensions.get('window').width-42)/2*76/168,
      marginBottom:18,
      marginRight:14,
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
      width:(Dimensions.get('window').width-48)/3,
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