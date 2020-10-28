// @flow

import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import Modal from "react-native-modal";

export default class PeopleComponent extends Component {
  constructor(props) {
    super(props);
    const { isLoading, error, fetchData, peopleInfo } = props;
    const hasPeopleData = Object.keys(peopleInfo).length;
    this.state = {
      selectedId: "",
      peopleInfo: peopleInfo,
      isModalVisible: false,
    };
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  _onPressShowDetails(item) {
    this.toggleModal();
  }

  _renderItem = ({ item }) => (
    <TouchableOpacity key={item.id} style={styles.itemThreeContainer} onPress={() => this._onPressShowDetails(item)}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <Image
          source={{ uri: "https://cdn2.iconfinder.com/data/icons/users-2/512/User_1-512.png" }}
          style={styles.foodImageStyle}
        />
      </View>
    </TouchableOpacity>
  );

  _keyExtractor = (item, index) => index;

  render() {
    const { navigate } = this.props.navigation;
    var data = this.state.peopleInfo;
    return (
      <View style={styles.container}>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>data.name</Text>
            <Text>data.height</Text>
            <Text>data.mass</Text>
            <Text>data.hair_color</Text>
            <Text>data.skin_color</Text>
            <Text>data.eye_color</Text>
            <Text>data.birth_year</Text>
            <Text>data.gender</Text>
          </View>
        </Modal>

        {this.state.peopleInfo.map((data, index) => {
          <FlatList data={data} numColumns={1} keyExtractor={this._keyExtractor} renderItem={this._renderItem} />;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default PeopleComponent;
