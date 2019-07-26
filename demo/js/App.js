/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {
  Fragment
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

import {BoxShadow
} from 'react-native-shadow';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const shadowOpt = {
          width:320,
          height:70,
          color:"#1890FF",
          border:10,
          radius:42,
          opacity:0.15,
          x:0,
          y:2,
          style:{
            marginTop:-35,
          }

      };
  
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
            marginBottom:8,
          }

      };

  return (
     
    <Fragment >
      <StatusBar androidtranslucent ={true} />
      <SafeAreaView>
        <ScrollView  contentInsetAdjustmentBehavior="automatic" >
       
          <View style={styles.body}>
            <View style={styles.banner}>  
              <Image
                source={require('../img/banner_bg.png')}
                style={styles.banner_bg}/> 
              <View style={styles.banner_txt}>
                <Text style={styles.banner_greeting}>早上好，张无忌</Text>
                <View style={styles.banner_day}>
                  <Text style={styles.banner_date}>04-24</Text>
                  <Text style={styles.banner_week}>周四</Text>
                </View>
              </View>
              <Image
                source={require('../img/scan.png')}
                style={styles.banner_scan}/> 
            </View>

            <BoxShadow setting={shadowOpt}>
              <View style={styles.general_view}>
                <View style={styles.fault_sum}>
                  <Text style={styles.fault_sum_num}>424</Text>
                  <Text style={styles.fault_sum_txt}>故障总数</Text>
                </View>

                <View style={styles.fault_kind}>
                  <Text style={styles.fault_sum_num}>68</Text>
                  <View style={styles.fault_kind_txt}>
                    <View style={styles.circle_red}></View>
                    <Text style={styles.fault_sum_txt}>超时</Text>
                  </View>
                </View>

                <View style={styles.fault_kind}>
                  <Text style={styles.fault_sum_num}>68</Text>
                  <View style={styles.fault_kind_txt}>
                    <View style={styles.circle_yellow}></View>
                    <Text style={styles.fault_sum_txt}>预警</Text>
                  </View>
                </View>
                
                <View style={styles.fault_kind}>
                  <Text style={styles.fault_sum_num}>68</Text>
                  <View style={styles.fault_kind_txt}>
                    <View style={styles.circle_green}></View>
                    <Text style={styles.fault_sum_txt}>正常</Text>
                  </View>
                </View>
              </View>
            </BoxShadow>
            
            <View style={styles.notice}>
              <View style={styles.notice_title}>
                <Text style={styles.notice_title_txt}>通知</Text>
                <Text style={styles.notice_title_txt}>公告</Text>
              </View>
              <View style={styles.notice_line}>
              </View>
              <View style={styles.notice_detail}>
                <View style={styles.notice_new}>
                  <Text style={styles.notice_detail_txt}>2019-04-05 10:00系统进行升级，请提前做...</Text>
                  <Image
                    source={require('../img/new.png')}
                    style={styles.notice_new_img}/>
                </View>
                
                <Text style={styles.notice_detail_txt}>2019-04-05 10:00系统进行升级，请提前做好准备。</Text>
              </View>
            </View>
          </View>

          <View style={styles.separate_line}>
          </View>

          <View style={styles.tools}>
            <View style={styles.tools_title_wrap}>
              <Text style={styles.tools_title}>工作处理</Text>
              <Text style={styles.tools_more_txt}>全部</Text>
              <Image
                source={require('../img/more.png')}
                style={styles.tools_more_img}/> 
            </View>
            <View style={styles.tools_detail}>
              <View style={styles.tools_detail_wrap}>
                  <Image
                    source={require('../img/fault_list.png')}
                    style={styles.tools_detail_icon_pic}/>
                  <Text style={styles.tools_detail_icon_txt}>故障工单</Text>
              </View>
              <View style={styles.tools_detail_wrap}>
                  <Image
                    source={require('../img/help.png')}
                    style={styles.tools_detail_icon_pic}/>
                  <Text style={styles.tools_detail_icon_txt}>请求支撑</Text>
              </View>
              <View style={styles.tools_detail_wrap}>
                  <Image
                    source={require('../img/task_control.png')}
                    style={styles.tools_detail_icon_pic}/>
                  <Text style={styles.tools_detail_icon_txt}>指挥任务</Text>
              </View>
              <View style={styles.tools_detail_wrap}>
                  <Image
                    source={require('../img/spot_check.png')}
                    style={styles.tools_detail_icon_pic}/>
                  <Text style={styles.tools_detail_icon_txt}>现场验收</Text>
              </View>
              <View style={styles.tools_detail_wrap}>
                  <Image
                    source={require('../img/risk_op.png')}
                    style={styles.tools_detail_icon_pic}/>
                  <Text style={styles.tools_detail_icon_txt}>风险操作</Text>
              </View>
              
            </View>
            <View style={styles.tools_detail}>
              <View style={styles.tools_detail_wrap}>
                  <Image
                    source={require('../img/spot_cooperate.png')}
                    style={styles.tools_detail_icon_pic}/>
                  <Text style={styles.tools_detail_icon_txt}>现场配合</Text>
              </View>
              <View style={styles.tools_detail_wrap}>
                  <Image
                    source={require('../img/task_start.png')}
                    style={styles.tools_detail_icon_pic}/>
                  <Text style={styles.tools_detail_icon_txt}>业务开通</Text>
              </View>
              <View style={styles.tools_detail_wrap}>
                  <Image
                    source={require('../img/res_change.png')}
                    style={styles.tools_detail_icon_pic}/>
                  <Text style={styles.tools_detail_icon_txt}>资源变更</Text>
              </View>
              <View style={styles.tools_detail_wrap}>
                  <Image
                    source={require('../img/fault_search.png')}
                    style={styles.tools_detail_icon_pic}/>
                  <Text style={styles.tools_detail_icon_txt}>故障查询</Text>
              </View>
              <View style={styles.tools_detail_wrap}>
                  <Image
                    source={require('../img/task_plan.png')}
                    style={styles.tools_detail_icon_pic}/>
                  <Text style={styles.tools_detail_icon_txt}>作业计划</Text>
              </View>
              
            </View>
          </View>

          <View style={styles.separate_line}>
          </View>

          <View style={styles.tools}>
            <View style={styles.tools_title_wrap}>
              <Text style={styles.tools_title}>工具</Text>
              <Text style={styles.tools_more_txt}>全部</Text>
              <Image
                source={require('../img/more.png')}
                style={styles.tools_more_img}/> 
            </View>
            <View style={styles.tools_detail}>
              <View style={styles.tools_detail_wrap}>
                  <Image
                    source={require('../img/tag_print.png')}
                    style={styles.tools_detail_icon_pic}/>
                  <Text style={styles.tools_detail_icon_txt}>标签打印</Text>
              </View>
              <View style={styles.tools_detail_wrap}>
                  <Image
                    source={require('../img/fault_map.png')}
                    style={styles.tools_detail_icon_pic}/>
                  <Text style={styles.tools_detail_icon_txt}>故障地图</Text>
              </View>
              <View style={styles.tools_detail_wrap}>
                  <Image
                    source={require('../img/connect_app.png')}
                    style={styles.tools_detail_icon_pic}/>
                  <Text style={styles.tools_detail_icon_txt}>外联应用</Text>
              </View>
              <View style={styles.tools_detail_wrap}>
                  <Image
                    source={require('../img/online_kno.png')}
                    style={styles.tools_detail_icon_pic}/>
                  <Text style={styles.tools_detail_icon_txt}>在线知识</Text>
              </View>
              <View style={styles.tools_detail_wrap}>
                  <Image
                    source={require('../img/op_manual.png')}
                    style={styles.tools_detail_icon_pic}/>
                  <Text style={styles.tools_detail_icon_txt}>操作手册</Text>
              </View>
              
            </View>
          </View>

          <View style={styles.separate_line}>
          </View>

          <View style={styles.overtime_op}>

            <View style={styles.overtime_op_title}>
              <Text style={styles.tools_title}>超时处理</Text>
            </View>

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
                  <Text style={styles.overtime_op_time_txt}>超时100分</Text>
                </View>

              </View>
            </BoxShadow>

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
                  <Text style={styles.overtime_op_time_txt}>超时100分</Text>
                </View>
              </View>
            </BoxShadow>

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
                  <Text style={styles.overtime_op_time_txt}>超时100分</Text>
                </View>
              </View>
            </BoxShadow>

          </View>

          <View style={styles.separate_line}>
          </View>
                         
        </ScrollView>

  
      </SafeAreaView> 
    </Fragment>
  );
};

const styles = StyleSheet.create({

  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    flex:1,
    flexDirection:'column',
    alignItems:"center",

  },
  banner:{
    flex:1,
  },
  banner_bg:{
    flex:1,
   
  },
  banner_greeting:{
    fontSize:18,
    marginTop:35,
    marginLeft:24,
    color:"#FFFFFF",
  },
  banner_txt:{
    position:'absolute',
  },
  banner_day:{
    flex:1,
    flexDirection:'row',
    marginTop:6,
    fontSize:14,
  },
  banner_date:{
    position:'relative',
    marginLeft:24,
    color:"#FFFFFF",
  },
  banner_week:{
    position:'relative',
    marginLeft:10,
    color:"#FFFFFF",
  },
  banner_scan:{
    position:'absolute',
    right:20,
    top:20,

  },
  general_view:{
 
    width:320,
    height:70,
    borderRadius:42,
    backgroundColor:"white",
    position:'relative',
    //marginTop:-35,
    flexDirection:'row',
    justifyContent:"center",
    shadowColor: "#1890FF",
    shadowOpacity: 0.15,
    shadowRadius: 42,
    shadowOffset: {
      height: 0,
      width: 2,
    },
    overflow:'hidden',
    
  },
  
  fault_sum:{
    flex:1.5,
    flexDirection:'column',
    alignItems:"center",
    justifyContent:"center",
  },
  fault_kind:{
    flex:1,
    flexDirection:'column',
    alignItems:"center",
    justifyContent:"center",
  
  },
  fault_sum_num:{
    fontSize:18,
    color:"#000000",
  },
  fault_sum_txt:{
    fontSize:12,
    color:"#000000",
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
  notice:{
    marginTop:20,
    marginBottom:20,
    flex:1,
    flexDirection:'row',
    backgroundColor:"white",
    alignItems:"center",
  
  },
  notice_line:{
    width:1,
    height:34,
    backgroundColor:"#E7E7E7",
    marginLeft:14,
  },
  notice_title:{
    
  },
  notice_detail:{
    marginLeft:14,
    flexDirection:"column",
    justifyContent:"flex-start",
  },
  notice_title_txt:{
    fontSize:12,
    color:"#1890FF",
    fontWeight:"bold",

  },
  notice_detail_txt:{
    fontSize:12,
    color:"#888888",
    marginBottom:4,
  },
  notice_new:{
    flexDirection:'row',
    alignItems:"center",

  },
  notice_new_img:{
    marginLeft:4,
    marginBottom:4,
  },
  separate_line:{
    height:10,
    backgroundColor:"#F5F5F9",
  },
  tools:{
    flexDirection:"column",
    backgroundColor:"#FFFFFF",
    justifyContent:"center",
  },
  tools_title_wrap:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:18,
    marginBottom:18,
  },
  tools_title:{
    fontSize:14,
    color:"#000000",
    opacity:0.85,
    marginLeft:14,
  },
  tools_more_txt:{
    fontSize:14,
    color:"#888888",
    position:"absolute",
    right:26,
  },
  tools_more_img:{
    position:"absolute",
    right:10,
  },
  tools_detail:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:18,
    justifyContent:"space-between",
    marginLeft:18,
    marginRight:18,
  },
  tools_detail_wrap:{
    flexDirection:"column",
    justifyContent:"center",
  },
  tools_detail_icon_pic:{
    marginBottom:5,
    alignSelf:'center',
  },
  tools_detail_icon_txt:{
    fontSize:12,
    color:"#000000",
    opacity:0.65,
  },
  overtime_op:{
    flexDirection:"column",
    backgroundColor:"#FFFFFF",

  },
  overtime_op_title:{
    marginTop:18,
    marginBottom:18,
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
    width:90,
    height:22,
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
  },


});

export default App;