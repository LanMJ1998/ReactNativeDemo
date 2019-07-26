/**
 * 完成我的主页组件
 *
 */
import React, {Component,} from 'react';
  
  import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    ImageBackground ,
  } from 'react-native';

  import {BoxShadow} from 'react-native-shadow';


  export  class MeBG extends Component {
    render() {
      return (
        <ImageBackground style={styles.me_bg} source={require('../img/me_bg.png')}>
            <View style={styles.me_bg_title}>
                <Text style={styles.me_bg_title_txt}>我的</Text>
                <ImageBackground style={styles.me_bg_title_notice} 
                                source={require('../img/me_notice.png')}>
                    <View style={styles.me_bg_title_circle}>
                        <Text style={styles.me_bg_title_circle_txt}>10</Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.me_bg_detail}>
                <Image style={styles.user_pic} source={require('../img/user_pic.png')}/>
                <View style={styles.me_bg_greeting}>
                    <Text style={styles.me_bg_greeting_txt}>早上好，张无忌！</Text>
                    <Text style={styles.me_bg_greeting_indentity}>地市管理员</Text>
                </View>
            </View>
        </ImageBackground>
      );
    }
  };

  export  class MeGeneralView extends Component {
    render() {
        const shadowOpt = {
            width:Dimensions.get('window').width-28,
            height:70,
            color:"#1890FF",
            border:10,
            radius:35,
            opacity:0.15,
            x:0,
            y:2,
            style:{
                marginTop:-35,
                marginLeft:14,
            }
  
        };
      return (
        <BoxShadow setting={shadowOpt}>
           <View style={styles.general_view}>
                <View style={styles.general_view_wrap}>
                    <Text style={styles.general_view_num}>472</Text>
                    <Text style={styles.general_view_txt}>本月处理故障数</Text>
                </View>
                <View style={styles.general_view_wrap}>
                    <Text style={styles.general_view_num}>472</Text>
                    <Text style={styles.general_view_txt}>本月处理故障数</Text>
                </View>
                <View style={styles.general_view_wrap}>
                    <Text style={styles.general_view_num}>472</Text>
                    <Text style={styles.general_view_txt}>本月处理故障数</Text>
                </View>
           </View>
                
                 
      </BoxShadow>
        
      );
    }
  };

  export  class Icon extends Component {
    render() {
      return (
        <View style={styles.me_bg_icon_wrap}>
            <Image
                source={require('../img/work_analyse.png')}
                style={styles.me_bg_icon_pic}/>
            <Text style={styles.me_bg_icon_txt}>工作分析</Text>
        </View>
        
      );
    }
  };

  export  class MeGeneralIcon extends Component {
    render() {
      return (
        <View style={styles.me_bg_icon}>
            <Icon/>
            <Icon/>
            <Icon/>
            <Icon/>
        </View>     
      );
    }
  };

  export  class MeOpListItem extends Component {
    render() {
      return (
        <View style={styles.op_list}>
            <Image source={require('../img/profile.png')} style={styles.op_list_icon}/>
            <Text style={styles.op_list_txt}>个人资料</Text>
            <Image source={require('../img/me_more.png')} style={styles.op_list_more}/>
        </View>     
      );
    }
  };

  export  class MeOpList extends Component {
    render() {
      return (
        <View>
            <MeOpListItem/>
            <Seperate/>
            <MeOpListItem/>
            <Seperate/>
            <MeOpListItem/>
            <Seperate/>
            <MeOpListItem/>
        </View>   
      );
    }
  };

  export  class Seperate extends Component {
    render() {
      return (
        <View style={styles.seperate}></View>   
      );
    }
  };

  export  class LogOut extends Component {
    render() {
      return (
        <View style={styles.logout}>
            <Text style={styles.logout_txt}>退出登录</Text>
        </View>   
      );
    }
  };

  

  const styles = StyleSheet.create({
    me_bg:{
        flexDirection:'column',
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').width*192/375,
    },
    me_bg_title:{
        width:Dimensions.get('window').width,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:20, 
    },
    me_bg_title_txt:{
        color:'#fff',
        fontSize:18,
        alignSelf:'auto',
    },
    me_bg_title_notice:{
        width:16,
        height:17,
        position:'absolute',
        right:14,
    },
    me_bg_title_circle:{
        backgroundColor:'#F5222D',
        borderRadius:6,
        position:'absolute',
        left:8,
        top:-4,
    },
    me_bg_title_circle_txt:{
        color:'#fff',
        fontSize:8,
        alignSelf:'center',
        marginLeft:2,
        marginRight:2,
        marginTop:1,
        marginBottom:1,
    },
    me_bg_detail:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:-34,
        position:'absolute',
        top:'50%',
      
    },
    user_pic:{
        width:68,
        height:68,
        marginLeft:12,
    },
    me_bg_greeting:{
        flexDirection:'column',
        justifyContent:'flex-start',
        marginLeft:14,
    },
    me_bg_greeting_txt:{
        fontSize:16,
        color:'#fff',
        marginBottom:6,
    },
    me_bg_greeting_indentity:{
        fontSize:12,
        color:'#fff',
    },
    general_view:{
        width:Dimensions.get('window').width-28,
        height:70,
        backgroundColor:'#fff',
        borderRadius:35,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20,
    },
    general_view_wrap:{
        flexDirection:'column',
        alignItems:'center',
    },
    general_view_num:{
        fontSize:18,
        color:'#000',
        opacity:0.85,
        marginBottom:5,
    },
    general_view_txt:{
        fontSize:12,
        color:'#888',
    
    },
    me_bg_icon:{
        width:Dimensions.get('window').width-56,
        marginLeft:28,
        marginTop:18,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:16,
    },
    me_bg_icon_wrap:{
        flexDirection:'column',
        justifyContent:"center",
        alignContent:'center',
    },
    me_bg_icon_pic:{
        marginBottom:5,
        alignSelf:'center',
    },
    me_bg_icon_txt:{
        fontSize:12,
        color:"#000000",
        opacity:0.65,
        textAlign:'center',
        textAlignVertical:'center',
    },
    seperate:{
        width:Dimensions.get('window').width,
        height:1,
        backgroundColor:'#E5E5E5',
    },
    op_list:{
        flexDirection:'row',
        width:Dimensions.get('window').width,
        alignItems:'center',
        paddingVertical:14,
        backgroundColor:'#fff'
    },
    op_list_icon:{
        //position:'absolute',
        marginLeft:24,
    },
    op_list_txt:{
        color:'#000',
        opacity:0.65,
        fontSize:16,
        marginLeft:10,
    },
    op_list_more:{
        position:'absolute',
        right:24,
    },
    logout:{
        width:Dimensions.get('window').width,
        backgroundColor:'#fff',
        paddingVertical:16,

    },
    logout_txt:{
        color:'#F5222D',
        fontSize:16,
        alignSelf:'center',
    }
  
  })
