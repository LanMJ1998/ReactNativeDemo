import React from 'react';
import App from './App';
import DisposeIndex from './DisposeIndex';
import ToolsIndex from './ToolsIndex';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MeIndex from './MeIndex';
import { createBottomTabNavigator,createStackNavigator,createMaterialTopTabNavigator  } from 'react-navigation';


//创建底部导航栏
const AppBottomTabNavigator=createBottomTabNavigator(
{
	Page1:{
		screen:App,
		navigationOptions:{
			tabBarLabel:"首页",
			tabBarIcon:({tintColor,focused})=>(
				<Ionicons
					name={'ios-home'}
					size={22}
					style={{color:tintColor}}
				/>
			)
		}
	},
	Page2:{
		screen:DisposeIndex,
		navigationOptions:{
			tabBarLabel:"待办",
			tabBarIcon:({tintColor,focused})=>(
				<Ionicons
					name={'ios-time'}
					size={22}
					style={{color:tintColor}}
				/>
			)
		}
	},
	Page3:{
		screen:ToolsIndex,
		navigationOptions:{
			tabBarLabel:"工具",
			tabBarIcon:({tintColor,focused})=>(
				<Ionicons
					name={'ios-hammer'}
					size={22}
					style={{color:tintColor}}
				/>
			)
		}

	},
	Page4:{
		screen:MeIndex,
		navigationOptions:{
			tabBarLabel:"我的",
			tabBarIcon:({tintColor,focused})=>(
				<Ionicons
					name={'ios-person'}
					size={22}
					style={{color:tintColor}}
				/>
			)
		}
	},
},{
	tabBarOptions:{
		activeTintColor:"#1890FF",
		inactiveTintColor: '#888888',
	}
});

//创建待办首页tab选项
const AppTopTabNavigator=createMaterialTopTabNavigator (
	{
		Page1:{
			screen:DisposeIndex,
			navigationOptions:{
				tabBarLabel:"故障工单",
				
			}
		},
		Page2:{
			screen:DisposeIndex,
			navigationOptions:{
				tabBarLabel:"请求支撑",
				
			}
		},
		Page3:{
			screen:DisposeIndex,
			navigationOptions:{
				tabBarLabel:"指挥任务",
				
			}
	
		},
		Page4:{
			screen:DisposeIndex,
			navigationOptions:{
				tabBarLabel:"现场验收",
				
			}
	
		},
		Page5:{
			screen:DisposeIndex,
			navigationOptions:{
				tabBarLabel:"现场配合",
				
			}
	
		},
		Page6:{
			screen:DisposeIndex,
			navigationOptions:{
				tabBarLabel:"业务开通",
				
			}
	
		},
		
	},{
		tabBarOptions:{
			upperCaseLabel:false,
			scrollEnabled:true,
			activeTintColor:"#ffffff",
			inactiveTintColor: '#ffffff',
			showIcon: false,
			style: {
                backgroundColor: '#5997FF',
                paddingBottom: 1,
                borderTopWidth: 0.2,
                paddingTop:1,
                borderTopColor: '#ccc',
			},
			labelStyle:{
				fontSize:14,
				marginBottom:5,
				marginTop:10,
			},
		}
	});
//注册页面
export const AppStackNavigator=createStackNavigator(
{
	Bottom:{
		screen:AppBottomTabNavigator,
		navigationOptions:{
            header:null
        }
	},
	Top:{
		screen:AppTopTabNavigator,
		navigationOptions:{
            header:null
        }
	},
	App:{
		screen:App,
		navigationOptions:{
            header:null
        }
	},
	DisposeIndex:{
		screen:DisposeIndex,
		navigationOptions:{
            header:null
        }
	},
	ToolsIndex:{
		screen:DisposeIndex,
		navigationOptions:{
            header:null
        }
	},
	MeIndex:{
		screen:MeIndex,
		navigationOptions:{
            header:null
		}
	}	
},{
	initialRouteName: "Bottom",

})