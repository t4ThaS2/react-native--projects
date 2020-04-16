import React from 'react';
import { StyleSheet,Image, View,ActivityIndicator } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { AppLoading} from 'expo';
import * as  Font from 'expo-font'


export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      isLoading:true
    }
  }

  
 async UNSAFE_componentWillMount() {
    await Font.loadAsync({
      Roboto:require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium:require('native-base/Fonts/Roboto_medium.ttf')
    });

    this.setState({isLoading:false})
  }
  
  

  render() {
    if(this.state.isLoading){
      return (
        <AppLoading
        />
      );
    }
  
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://images.pexels.com/photos/3307265/pexels-photo-3307265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
                <Body>
                  <Text>Gaurish Kauthankar</Text>
                  <Text note>Cyber security Enthusiast | Programmer | bug bounty hunter</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}


