import React,{Component} from 'react';
import {ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get('window');

class GuideScreen extends Component {
  //state = {curIndex: 0}
  static propTypes = {
    guidePics: PropTypes.array.isRequired,
    guideDone: PropTypes.func.isRequired
  }
  // incrIndex = () =>{
  //   this.setState({curIndex: this.state.curIndex++});
  //   if (this.state.curIndex >= this.props.guidePics.length) {
  //     this.props.guideDone();
  //   }
  // }
  render() {
    return (
            <ScrollView
            contentContainerStyle={styles.contentContainer}
            bounces={false}
            pagingEnabled={true}
            horizontal={true}>
            {this.props.guidePics.map((item,i) =>{
              if (i < this.props.guidePics.length - 1) {
                return <Image source={{uri: item}} key={'image_' + i} style={styles.backgroundImage} />;
              }
              return (<Image source={{uri: item}} key={'image_' + i} style={[styles.backgroundImage, styles.btnOut]} >
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() =>{this.props.guideDone();}}
                    elevation ={5}
                  >
                    <Text style={styles.btnText}>点 击 进 入</Text>
                  </TouchableOpacity>
                </Image>);
            })}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    width: width * 4,
    height: height
  },
  backgroundImage: {
    width: width,
    height: height
  },
  btnOut: {
    alignItems: 'center'
  },
  btn: {
    width: 150,
    height: 50,
    backgroundColor: global.headerColor, //'#ff7f00',
    borderRadius: 8,
    borderColor: '#fff',
    borderWidth: 1,

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height - 150

  },
  btnText: {
    fontSize: 18,
    color: '#fff'
  }
});

export default GuideScreen;
