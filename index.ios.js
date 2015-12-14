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
  ListView,
  TouchableHighlight,
  StatusBarIOS,
  Text,
  View,
  Image,
} = React;

var heidong = React.createClass({
    getInitialState: function() {
      return {
            dataSource: [{key:1,title:'为你推荐'},{key:2,title:'国际大牌'}, {key:3,title:'天猫国际'}, {key:4,title:'女装'}, {key:5,title:'女鞋'}, {key:6,title:'男装'}, {key:7,title:'男鞋'}, {key:8,title:'内衣'},{key:9,title:'母婴'},{key:10,title:'数码'},{key:11,title:'家电'},{key:12,title:'美妆'},{key:13,title:'爆炸'}],
            active_data: 1,
        };
    },
    render: function() {
      var dataList = {1:'为你推荐',2:'国际大牌',3:'天猫国际',4:'女装'}
      var dataBlob = {1:[{rid:0,url:'',title:'电脑硬件'},{rid:1,url:'',title:'手机配件'},{rid:2,url:'',title:'休闲裤'},{rid:3,url:'',title:'笔记本'},{rid:4,url:'',title:'DIY电脑'},{rid:5,url:'',title:'卫衣'}]}
      var dataSource = new ListView.DataSource({
        getRowData: (dataBlob,sectionID,rowID)=>{
          return dataBlob[sectionID];
        },
        getSectionData :(dataList,sectionID) =>{
          return dataList[sectionID];
        },
        rowHasChanged: (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
      });
      let sectionIDs = [];
      let rowIDs = [];
      for (var i = dataList.length - 1; i >= 0; i--) {
        sectionIDs.push(dataList[i]);
        rowIDs.push(i);
      };
        return (
            <View style={styles.mainbox}>
            <View style={styles.StatusBar}></View>
                <View style={styles.searchbar}>
                   	<View>
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
                <View style={styles.listbox}>
                <ScrollView
                  style={styles.sort}>
                  {this.state.dataSource.map(this._leftlist)}
                </ScrollView>
                <ListView
                  style={styles.naiyou}
                  dataSource={dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)}
                  renderRow={this._naiyou.bind(this)}
                  renderSectionHeader={this._header.bind(this)} />
                </View>
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
    _naiyou: function(data: object){
    	return(
    		<TouchableHighlight>
	    		<View>
	    			<Image
	    			  style={styles.naiyou_item}
	    			  source={{uri: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/18043032851699787/T1rRDWFkVXXXXXXXXX_!!0-item_pic.jpg_580x580Q90.jpg_.webp'}} />
	    			<Text></Text>
	    		</View>
    		</TouchableHighlight>
    	);
    },
    _header: function(sd:string,sID:string){
      return(
        <View>
          <Text style={styles.header}>
            {sd}{sID}
          </Text>
        </View>
      );
    },
});

var styles = StyleSheet.create({
    mainbox:{
        backgroundColor: '#ECEBEC',
        flex:1,
        flexDirection: 'column',
    },
    StatusBar:{
    	top:0,
    	margin:0,
    	height:20,
    },
   	searchbar:{
   		flex: 1,
   		flexDirection: 'row',
   		backgroundColor: '#FFF',
   	},
   	backbutton:{
        width:20,
        height:20,
        top:15,
        left:15,
        marginRight:15,
    },
    textinput_search:{
        marginLeft:10,
        flex:1,
        flexDirection: 'row',
        height: 30,
        top:11,
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
   	listbox:{
   		flex: 11,
   		flexDirection:'row',
   	},
   	sort:{
   		flex:1,
   		left:0,
   	},
    sort_item:{
        width:90,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:2,
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
    naiyou:{
      flex:3,
    },
    _naiyou:{

    },
    header:{
      color:'#797979',
      borderBottomWidth: 1,
    },
});

AppRegistry.registerComponent('heidong', () => heidong);
