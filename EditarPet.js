import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import FormPet from './FormPet'
import qs from 'querystring'

export default class EditarPet extends Component {
  state = {
    name: undefined
  }

  onSave(data) {
    const pageId = this.props.match.params.pageId

    const options = {
      method: 'PUT',
      body: qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    fetch(`https://pets-unipe.herokuapp.com/pets/${pageId}`, options)
      .then(T => T.json())
      .then(() => Alert.alert('editar', 'Animal editado'))
  }

  componentDidMount() {
    const pageId = this.props.match.params.pageId

    fetch(`https://pets-unipe.herokuapp.com/pets/${pageId}`, { method: 'GET' })
      .then(T => T.json())
      .then(myPets => this.setState({ myPets }))
  }

  render() {
    const { myPets } = this.state

    return (
      <View style={styles.container}>
        <Text>Editar Nome</Text>
        {!myPets && (
          <Text>Nenhum animal encontrado</Text>
        )}
        {myPets && (
          <FormPet
            value={myPets}
            onSave={this.onSave.bind(this)}
            onCancel={() => this.props.history.push('/')}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})