/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  TextInput,
  TabBarIOS,
  ScrollView,
  TouchableHighlight,
  Text,
  View,
  Image,
  RadioButtons,
} = React;

var heidong = React.createClass({
    getInitialState: function() {
        return {
            dataSource: [{key:1,title:'为你推荐'},{key:2,title:'国际大牌'}, {key:3,title:'天猫国际'}, {key:4,title:'女装'}, {key:5,title:'女鞋'}, {key:6,title:'男装'}, {key:7,title:'男鞋'}, {key:8,title:'内衣'},{key:9,title:'母婴'},{key:10,title:'数码'},{key:11,title:'家电'},{key:12,title:'美妆'},{key:13,title:'爆炸'}],
            active_data: 1,
        };
    },
    render: function() {
        return (
            <View style={styles.mainbox}>
                <View style={styles.searchbar}>
                    <View >
                        <Image source={require('./img/back.png')} style={styles.backbutton}/>
                    </View>
                    <View style={styles.textinput_search}>
                    <Image source={require('./img/search.png')} style={styles.searchpic}/>
                    <TextInput
                        style={styles.textinput}
                        onChangeText={(text) => this.setState({text})}
                        returnKeyType = 'search'
                        placeholder = '听说在输入框里输入一大堆字符可能会导致溢出我也不知道是不是真的我决定试试看到底输入多少字符会导致溢出看起来这么多不会有任何的问题如果再多一些反正你们也看不到了那我就随便写了哈哈哈哈哈哈哈哈哈哈看起来这么长是完全不会有任何问题的那么我继续写哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
                    >

                    </TextInput>
                    <Image source={require('./img/qr.png')} style={styles.qrbutton}/>
                    </View>
                    <Image style={styles.menubutton} source={require('./img/menu.png')} />
                </View>
                <ScrollView
                  style={styles.sort}>
                  {this.state.dataSource.map(this._leftlist)}
                </ScrollView>
            </View>
        );
    },
    _leftlist: function(rowData: object){
        return (
            <TouchableHighlight onPress={() => this._onPressButton(rowData.key)}  style={[styles.sort_item, this.state.active_data == rowData.key && styles.sort_item_active]}>
                <Text style={[styles.leftlist_text, this.state.active_data == rowData.key && styles.leftlist_text_active]}>{rowData.title}</Text>
            </TouchableHighlight>
        );
    },
    _onPressButton: function(data: number){
        this.setState({
            active_data : data,
        });
    },
});

var styles = StyleSheet.create({
    mainbox:{
        backgroundColor: '#ECEBEC',
        flex:1,
    },
    searchbar:{
        flexDirection: 'row',
        backgroundColor: '#FFF',
        height:50,
        top:20,
    },
    backbutton:{
        width:20,
        height:20,
        marginRight: 20,
        top:15,
        left:10,
    },
    textinput_search:{
        flex:1,
        flexDirection: 'row',
        height: 30,
        top:10,
        borderRadius: 4,
        backgroundColor: '#ECEBEC',
    },
    searchpic:{
        width:20,
        height:20,
        marginLeft: 10,
        marginRight: 15,
        top:5,
        left:0  ,
    },
    textinput:{
        flex:1,
        height: 30,
        top:0,
        borderRadius: 4,
        backgroundColor: '#ECEBEC',
    },
    qrbutton:{
        width:20,
        height:20,
        marginLeft: 20,
        top:5,
        right:5,
    },
    menubutton:{
        width:20,
        height:20,
        marginLeft: 20,
        top:15,
        right:10,
    },
    sort:{
        width:90,
        top:22,
        flex:1,
        flexDirection: 'row',
    },
    sort_item:{
        width:90,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:2,
        flex:1,
        backgroundColor:'#FFF'
    },
    sort_item_active:{
        backgroundColor:'#ECEBEC',
        borderLeftWidth: 7,
        flex:1,
        borderLeftColor:'#b00'
    },
    leftlist_text:{
        margin:0,
        color:'#666',
    },
    leftlist_text_active:{
        margin:0,
        color:'#b00',
    },
    textdata:{
        top:40,
        left: 150,
        color:'#999'
    },
});

AppRegistry.registerComponent('heidong', () => heidong);
