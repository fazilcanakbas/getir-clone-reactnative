import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  üstçentikboşluğu: {
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  headerMain: {
    height: height * 0.064,
    backgroundColor: '#F7D102',

  },
  headerOne: {
    height: height * 0.064,
    width: '80%', 
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems:'center',
    paddingHorizontal:'6%',
    borderTopRightRadius:25,
    borderBottomRightRadius:25,
  },
  Image:{
    width:30,
    height:30,
   
  },
  headerOneView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:8,
    paddingLeft:8,
    borderLeftColor:'#F3F2FD',
    borderLeftWidth:2
  },
  headertwo:{
    width:'25%',
    // backgroundColor:'red',
    height:height * 0.064,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:30,
    
    
  },
});

export default styles;
