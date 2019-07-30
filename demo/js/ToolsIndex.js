/**
 * 完成工具主页
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
    Image,
    Dimensions,
  } from 'react-native';


import  {TopBar,Title,WorkHelp,ReportItem,}  from './ToolsComponent';

export default class ToolsIndex extends Component {

    render() {
      let ToolIcons = [ {pic:require('../img/warn_check.png'), name:'告警确认'},
                        {pic:require('../img/dev_search.png'), name:'设备查询'},
                        {pic:require('../img/port_watt.png'), name:'端口光功率'},
                        {pic:require('../img/join_net_dev.png'), name:'接入网设备'},
                        {pic:require('../img/dev_list.png'), name:'设备列表'},
                        {pic:require('../img/wireless_dev.png'), name:'无线设备'},
                        {pic:require('../img/transmit_dev.png'), name:'传输设备'},
                        {pic:require('../img/move_dev.png'), name:'动环设备'}];
      let MaitainIcons = [{pic:require('../img/tag_print.png'), name:'标签打印'},
                          {pic:require('../img/fault_map.png'), name:'故障地图'},
                          {pic:require('../img/connect_app.png'), name:'外联应用'}];
      let WorkHelpIcon1 =  {pic:require('../img/onl_kno.png'), name1:'在线知识库', name2:'专业名词解释、 常见问题'};
      let WorkHelpIcon2 =  {pic:require('../img/op_handbook.png'), name1:'操作手册', name2:'互动操作、软件使用说明'};             
   

      return (
        <SafeAreaView>
            
            <ScrollView  contentInsetAdjustmentBehavior="automatic" >
                <TopBar/>
                <View style={styles.body_wrap}>
                    <Title titleName  = {'设备查询'}/>
                    <View style={styles.icon_wrap}>
                      { ToolIcons.map((icon, i) => {
                          return (
                            <View style={styles.tools_icon_wrap}>
                              <Image
                                source={icon.pic}
                                style={styles.tools_icon_pic}/>
                              
                              <Text style={styles.tools_icon_txt}>{icon.name}</Text>
                            </View>
                          ) ;
                        })} 
                    </View>
                </View> 
                <View style={styles.separate_line}>
                </View>  
                <View style={styles.body_wrap}>
                    <Title titleName = {'运维助手'}/>
                    <View style={styles.icon_wrap}>
                      { MaitainIcons.map((icon, i) => {
                          return (
                            <View style={styles.tools_icon_wrap}>
                              <Image
                                source={icon.pic}
                                style={styles.tools_icon_pic}/>
                              <Text style={styles.tools_icon_txt}>{icon.name}</Text>
                            </View>
                          ) ;
                        })} 
                    </View>
                </View>   
                <View style={styles.separate_line}>
                </View>   
                <View style={styles.body_wrap}>
                    <Title titleName = {'工作助手'}/>
                    <View style={styles.helper_wrap}>
                        <WorkHelp pic = {WorkHelpIcon1.pic} name1 = {WorkHelpIcon1.name1} name2 = {WorkHelpIcon1.name2}/>
                        <WorkHelp pic = {WorkHelpIcon2.pic} name1 = {WorkHelpIcon2.name1} name2 = {WorkHelpIcon2.name2}/>
                    </View>
                </View> 
                <View style={styles.separate_line}>
                </View>           
                <View style={styles.body_wrap}>
                    <Title titleName = {'我的报表'}/>
                    <View style={styles.report_wrap}>
                        <ReportItem name={'设备告警故障统计'}/>
                        <ReportItem name={'在途故障总量统计'}/>
                        <ReportItem name={'现场综合化视图'}/>
                        <ReportItem name={'故障趋势分析图'}/>
                        <ReportItem name={'故障专业占比图'}/>
                    </View>
                </View> 
                <View style={styles.separate_line}>
                </View> 
            </ScrollView>
        </SafeAreaView>
       
        
      );
    }
  };

  const styles = StyleSheet.create({
    body_wrap:{
        marginLeft:14,
        backgroundColor:'#ffffff',
        flexDirection:'column',
        justifyContent:'center',
    },
    icon_wrap:{
        flexDirection:'row',
        justifyContent:'flex-start',
        flexWrap:'wrap',
    },
    tools_icon_wrap:{
      flexDirection:'column',
      justifyContent:"center",
      alignContent:'center',
      marginRight:0,
      marginBottom:20,
      width:(Dimensions.get('window').width-28)/5,
      
    },
    tools_icon_pic:{
      marginBottom:5,
      alignSelf:'center',
      width:41,
      height:41,
      
      
    },
    tools_icon_txt:{
      fontSize:12,
      color:"#000000",
      opacity:0.65,
      textAlign:'center',
      textAlignVertical:'center',
    },
    separate_line:{
        height:10,
        backgroundColor:"#F5F5F9",
      },
      helper_wrap:{
        flexDirection:'row',
      },
      report_wrap:{
        flexDirection:'row',
        justifyContent:'flex-start',
        flexWrap:'wrap',
      },
  })