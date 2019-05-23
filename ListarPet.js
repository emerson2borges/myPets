/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';


export default class App extends React.Component {

    state = {
        myPets: []
    }


    componentDidMount() {
        fetch('https://pets-unipe.herokuapp.com/pets', { method: 'GET' })
            .then(T => T.json())
            .then(myPets => this.setState({ myPets }))
    }


    render() {
        const { myPets } = this.state
        return (
            <View>
                <Text>Animais de Estimação</Text>
                <Button title='Adicionar' onPress={() => console.log('Animal criado')} />
                <View>
                    {myPets.map((myPets, key) => (
                        <View key={key}>
                            <Text>{myPets.name}o</Text>
                            <Text>{myPets.raca}o</Text>
                            <Button title='Editar' onPress={() => this.props.history.push('/' + myPets._id)} />
                            <Button title='Excluir' onPress={() => this.onDelete(myPets._id)} />
                        </View>
                    ))}
                </View>
            </View>
        );
    }
}

