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
  ListView,
  TouchableHighlight,
  Text,
  View,
  Image,
  RadioButtons,
} = React;

var heidong = React.createClass({
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(['为您推荐', '国际大牌', '天猫国际', '女装', '女鞋', '男装', '男鞋', '内衣']),
            active: false,
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
                <ListView
                    style={styles.sort}
                    dataSource={this.state.dataSource}
                    renderRow={this._leftlist} />
            </View>
        );
    },
    _leftlist: function(rowData: string, sectionID: number, rowID: number){
        return (
            <TouchableHighlight onPress={this._onPressButton}  style={[styles.sort_item, this.state.active && styles.sort_item_active]}>
                <Text style={styles.leftlist_text}>{rowData}</Text>
            </TouchableHighlight>
        );
    },
    _onPressButton: function(){
        this.setState({
            active: true,
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
        top:20,
        backgroundColor:'#FFF',
        flexDirection: 'row',
    },
    sort_item:{
        width:90,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ECEBEC',
        borderTopWidth: 2,
    },
    sort_item_active:{
        borderColor: '#FFF',
        borderWidth: 10,
    },
    leftlist_text:{
        margin:0,
        color:'#666',
    },
});

AppRegistry.registerComponent('heidong', () => heidong);
