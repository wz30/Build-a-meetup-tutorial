import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import  Colors from './constants/Colors';
import {HomeScreen} from './src/screens';
import {cachedFonts} from './helpers';

//have error whrn use build -- so question is how to use this
EStyleSheet.create(Colors);

export default class App extends React.Component{
  state = {
    fontLoaded: false,
  }
  // componentDidMount() {
  //   this._loadAssetAsync();
  // }
  // async _loadAssetAsync(){
  //   const fontAssets = cachedFonts(
  //     // {
  //     //   montserrat: require('./assets/fonts/Montseerat-Regular.ttf')
  //     // },
  //     {
  //       montserratBold: require('./assets/fonts/Montseerat-Bold.ttf')
  //     },
  //     // {
  //     //   montserratMedium: require('./assets/fonts/Montseerat-Medium.ttf')
  //     // },
  //     // {
  //     //   montserratLight: require('./assets/fonts/Montseerat-Light.ttf')
  //     // },
  //   );
  //   await Promise.all(fontAssets);
  //   this.setState({fontLoaded: true});
  // }
  render(){
      // if(this.state.fontLoaded){
      //   return <Components.AppLoading />
      // }
        return (
          // <View style={styles.container}>
          //   <Text>Meetupe</Text>
    
          // </View>
          
           <HomeScreen />
        );
      }
}

//--part 2
// import React from 'react';
// import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
// import {fetchMeetups} from './constants/api'

// export default class App extends React.Component {
//   static defaultProps = {
//     fetchMeetups
//   };

//   state = {
//     loading: false,
//     meetups: []
//   };
  
//   async componentDidMount(){
//     this.setState({loading: true});
//     const data = await this.props.fetchMeetups();
    
//     console.log(data)
//     console.log(data.meetups)
//     setTimeout(()=>this.setState({loading: false, meetups:data.meetups}), 2000)
//   }
//   render(){
//     if(this.state.loading){
//       return (
//         <View style={styles.container}>
//           <ActivityIndicator size="large"/>
//         </View>
//       );
//     }
//     return (
//       <View style={styles.container}>
//         <Text>Meetupe</Text>

//         {this.state.meetups.map((meetup, i) => (
//           <Text key={i}>{meetup.title}</Text>
//         ))}
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
