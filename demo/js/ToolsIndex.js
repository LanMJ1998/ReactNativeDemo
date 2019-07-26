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
    StatusBar,
    Image,
    Dimensions,
  } from 'react-native';


import  {TopBar,Title,ToolsIcon,WorkHelp,ReportItem}  from './ToolsComponent';

export default class ToolsIndex extends Component {

    render() {
      return (
        <SafeAreaView>
            
            <ScrollView  contentInsetAdjustmentBehavior="automatic" >
                <TopBar/>
                <View style={styles.body_wrap}>
                    <Title/>
                    <View style={styles.icon_wrap}>
                        <ToolsIcon/>
                        <ToolsIcon/>
                        <ToolsIcon/>
                        <ToolsIcon/>
                        <ToolsIcon/>
                        <ToolsIcon/>
                        <ToolsIcon/>
                        <ToolsIcon/>
                    </View>
                </View> 
                <View style={styles.separate_line}>
                </View>  
                <View style={styles.body_wrap}>
                    <Title/>
                    <View style={styles.icon_wrap}>
                        <ToolsIcon/>
                        <ToolsIcon/>
                        <ToolsIcon/>
                    </View>
                </View>   
                <View style={styles.separate_line}>
                </View>   
                <View style={styles.body_wrap}>
                    <Title/>
                    <View style={styles.helper_wrap}>
                        <WorkHelp/>
                        <WorkHelp/>
                    </View>
                </View> 
                <View style={styles.separate_line}>
                </View>           
                <View style={styles.body_wrap}>
                    <Title/>
                    <View style={styles.report_wrap}>
                        <ReportItem/>
                        <ReportItem/>
                        <ReportItem/>
                        <ReportItem/>
                        <ReportItem/>
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
        marginRight:14,
        backgroundColor:'#ffffff',
        flexDirection:'column',
        justifyContent:'center',
    },
    icon_wrap:{
        flexDirection:'row',
        justifyContent:'flex-start',
        flexWrap:'wrap',
    },
    separate_line:{
        height:10,
        backgroundColor:"#F5F5F9",
      },
      helper_wrap:{
        flexDirection:'row',
        justifyContent:'space-between',
      
      },
      report_wrap:{
        flexDirection:'row',
        justifyContent:'flex-start',
        flexWrap:'wrap',
      },
  })