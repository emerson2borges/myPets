/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React from 'react'
import ListarPets from './ListagarPet'
import CadastrarPet from './CadastrarPet'
import EditarPet from './EditarPet'
import { View } from 'react-native'
import { NativeRouter, Switch, Route } from 'react-router-native'
 
export default class App extends React.Component {
  render () {
    return (
      <NativeRouter>
        <View style={{ flex: 1 }}>
          <Switch>
            <Route path='/cadastro' component={CadastrarPet} />
            <Route path='/:pageId' component={EditarPet} />
            <Route path='/' component={ListarPets} />
          </Switch>
        </View>
      </NativeRouter>
    )
  }
}