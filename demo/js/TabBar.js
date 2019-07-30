import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view';


class FacebookTabBar extends ScrollableTabBar {
    /*propTypes = {
        goToPage: React.PropTypes.func, // 跳转到对应tab的方法
        activeTab: React.PropTypes.number, // 当前被选中的tab下标
        tabs: React.PropTypes.array, // 所有tabs集合
        tabNames: React.PropTypes.array, // 保存Tab名称
    }*/

    tabNames = [];

    constructor(props) {
        super(props);
        this.tabNames = [];
    }

  render() {
    
    return(
        
        <LinearGradient 
            start={{x: 0, y: 1}} end={{x: 1, y: 0}} colors={['#5997FF', '#9D89FF']}
            style={styles.tabs}>
          <ScrollView
            ref={(scrollView) => { this._scrollView = scrollView; }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            directionalLockEnabled={true}
            bounces={false}
            scrollsToTop={false}
          >
            { this.props.tabs.map((tab, i) => {
                const size = this.props.activeTab == i?  18 : 14; 
                return (
                    <TouchableOpacity key={tab} 
                        onPress={() => this.props.goToPage(i)} style={styles.tab}>
                        <Text style={{fontSize: size,color:'#fff',alignSelf:'auto',marginLeft:20}}>
                            {this.props.tabNames[i]}
                        </Text>
                    </TouchableOpacity>
                ) ;
            })} 
            </ScrollView>
        </LinearGradient>
        
    ) 
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    //marginLeft: 18,
    flexWrap:'nowrap',
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    paddingHorizontal:4,
    flexWrap:'nowrap',
  },
});

export default FacebookTabBar;