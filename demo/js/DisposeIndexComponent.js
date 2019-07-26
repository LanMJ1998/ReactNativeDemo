/**
 * 完成待办主页组件
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


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';
import {BoxShadow
} from 'react-native-shadow';

export  class GeneralView extends Component {

  render() {
    return (
      <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#5997FF', '#9D89FF']} style={styles.general_view}>
        <View style={styles.fault_kind}>
          <Text style={styles.fault_sum_num}>272</Text>
          <Text style={styles.fault_sum_txt}>总故障工单</Text>
        </View>

        <View style={styles.fault_kind}>
          <Text style={styles.fault_sum_num}>68</Text>
          <View style={styles.fault_kind_txt}>
            <View style={styles.circle_red}></View>
            <Text style={styles.fault_sum_txt}>超时单</Text>
          </View>
        </View>

        <View style={styles.fault_kind}>
          <Text style={styles.fault_sum_num}>68</Text>
          <View style={styles.fault_kind_txt}>
            <View style={styles.circle_yellow}></View>
            <Text style={styles.fault_sum_txt}>预警单</Text>
          </View>
        </View>
        
        <View style={styles.fault_kind}>
          <Text style={styles.fault_sum_num}>68</Text>
          <View style={styles.fault_kind_txt}>
            <View style={styles.circle_green}></View>
            <Text style={styles.fault_sum_txt}>正常单</Text>
          </View>
        </View>
      </LinearGradient>
      
    )
  }
};

export  class GeneralViewIcon extends Component {

  render() {
    return (
      <View  style={styles.general_view_icon}>
        <View style={styles.tools_detail_wrap}>
            <Image
              source={require('../img/wait_signature.png')}
              style={styles.tools_detail_icon_pic}/>
            <Text style={styles.tools_detail_icon_txt}>待签单</Text>
        </View>

        <View style={styles.tools_detail_wrap}>
            <Image
              source={require('../img/wait_disposal.png')}
              style={styles.tools_detail_icon_pic}/>
            <Text style={styles.tools_detail_icon_txt}>待处理</Text>
        </View>    
      </View>
      
    );
  }
};

export  class Title extends Component {

  render() {
    return (
      <View style={styles.title_wrap}>
        <Text style={styles.title}>待签单</Text>
        <Text style={styles.more_txt}>更多</Text>
        <Image
          source={require('../img/more.png')}
          style={styles.more_img}/> 
      </View>
      
    );
  }
};

export  class FaultItem extends Component {

  render() {
    const shadow_overtime = {
      width:Dimensions.get('window').width-28,
      height:140,
      color:"#DDDDDD",
      border:6,
     
      opacity:0.5,
      x:0,
      y:1,
      style:{
        marginRight:14,
        marginLeft:14,
        marginTop:8,
      }

    };

    return (
      <BoxShadow setting={shadow_overtime}>

        <View style={styles.overtime_op_item}>
          <View style={styles.overtime_op_txt_wrap}>
            <Text style={styles.overtime_op_txt_title}>故障单号：</Text>
            <Text style={styles.overtime_op_txt_detail}>HB20180426-5133</Text>
          </View>

          <View style={styles.overtime_op_txt_wrap}>
            <Text style={styles.overtime_op_txt_title}>故障标题：</Text>
            <Text style={styles.overtime_op_txt_detail}>传输-保定华为DWDM-MOT_LOS</Text>
          </View>

          <View style={styles.overtime_op_txt_wrap}>
            <Text style={styles.overtime_op_txt_title}>管控级别：</Text>
            <Text style={styles.overtime_op_txt_detail}>事后管控</Text>
          </View>

          <View style={styles.overtime_op_txt_wrap}>
            <Text style={styles.overtime_op_txt_title}>时限：</Text>
            <Text style={styles.overtime_op_txt_detail}>240分</Text>
          </View>

          <View style={styles.overtime_op_time}>
            <Text style={styles.overtime_op_time_txt}>超时</Text>
          </View>

        </View>
      </BoxShadow>
      
    );
  }
};

const styles = StyleSheet.create({
  general_view:{
    width:Dimensions.get('window').width-28,
    height:80,
    borderRadius:4,
    //backgroundColor:"#91CBFF",
    flexDirection:'row',
    marginLeft:14,
    marginTop:16,
    marginBottom:18,
    marginRight:14,
  },
  
  fault_kind:{
    flex:1,
    flexDirection:'column',
    alignItems:"center",
    justifyContent:"center",
  
  },
  fault_sum_num:{
    fontSize:18,
    color:"#ffffff",
  },
  fault_sum_txt:{
    fontSize:12,
    color:"#ffffff",
    opacity:0.65,
  },
  fault_kind_txt:{
    flexDirection:'row',
    alignItems:"center",
  },
  circle_yellow:{
    backgroundColor:"#F5A623",
    width:5,
    height:5,
    borderRadius:2.5,
    marginRight:6,

  },
  circle_red:{
    backgroundColor:"#F5222D",
    width:5,
    height:5,
    borderRadius:2.5,
    marginRight:6,

  },
  circle_green:{
    backgroundColor:"#52C41A",
    width:5,
    height:5,
    borderRadius:2.5,
    marginRight:6,

  },
  general_view_icon:{
    width:Dimensions.get('window').width-160,
    marginLeft:60,
    marginBottom:16,
    marginRight:60,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"space-between",
    backgroundColor:"#ffffff"
  },
  tools_detail_wrap:{
    flexDirection:"column",
    justifyContent:"center",
    alignContent:'center',
  },

  tools_detail_icon_pic:{
    marginBottom:5,
    alignSelf:'center',
  },
  tools_detail_icon_txt:{
    fontSize:12,
    color:"#000000",
    opacity:0.65,
    alignSelf:'center',
  },
  title_wrap:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:16,
    marginBottom:8,
    width:Dimensions.get('window').width,
  },
  title:{
    fontSize:14,
    color:"#000000",
    opacity:0.85,
    marginLeft:14,
  
  },
  more_txt:{
    fontSize:14,
    color:"#888888",
    position:"absolute",
    right:26,
  },
  more_img:{
    position:"absolute",
    right:10,
  },
  overtime_op_item:{
    width:Dimensions.get('window').width-28,
    height:140,
    flexDirection:"column",
    backgroundColor:"#FFFFFF",
    paddingLeft:16,
    justifyContent:"space-between",
    paddingTop:20,
    paddingBottom:20,
  },
  overtime_op_txt_wrap:{
    marginBottom:2,
    flexDirection:"row",

  },
  overtime_op_txt_title:{
    fontSize:14,
    color:"#666666",
  },
  overtime_op_txt_detail:{
    fontSize:14,
    color:"#333333",
  },
  overtime_op_time:{
    position:"absolute",
    right:0,
    top:12,
    //width:90,
    //height:22,
    backgroundColor:"#F3575F",
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
  },
  overtime_op_time_txt:{
    fontSize:14,
    color:"#FFFFFF",
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    textAlignVertical:'center',
    margin:4,
    marginLeft:8,
  },

})

