import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Accordion, Card, CardItem } from 'native-base';
import { Text, View, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { MOCK_EVENTS } from './../utils'
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'

export default class EventInfo extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>

        <View>
          <Text style={styles.eventListTitle}>
            {MOCK_EVENTS[0].name}
          </Text>
        </View>

        <View>
          <Text style={styles.eventDescriptionTitle}>
            Descrição do Evento
          </Text>
          <Text style={styles.eventDescription}>
            {MOCK_EVENTS[0].description}
          </Text>
        </View>

        <View>
          <Text style={styles.eventDescriptionTitle}>
            Informações importantes
          </Text>

          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
            <Text> <FaIcon name="calendar" size={17} style={{ position: 'relative', top: 123 }} />{moment(MOCK_EVENTS[0].date).format('DD/MM/YYYY')} </Text>
            <Text><FaIcon name="clock-o" size={17} style={styles.icon} />{moment(MOCK_EVENTS[0].date).format('HH:mm')}</Text>
          </View>

          <Text>Faixa etária: 18 Anos</Text>

          <Text>Endereço: {MOCK_EVENTS[0].address}</Text>
        </View>


        <View style={{ marginBottom: 40 }}>
          <Card>
            <CardItem header>
              <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Ingressos</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Por favor, selecione os ingressos para continuar com a compra</Text>
                {MOCK_EVENTS[0].tickets.map((ticket, index) => {
                  return (
                    <View>
                      <Text>{ticket.name}</Text>
                      <Button>
                        <Icon name='arrow-forward' />
                      </Button>
                    </View>
                  )
                })}
              </Body>
            </CardItem>
            <CardItem footer>
              <Button block info style={{ width: '100%' }} >
                <Text>Comprar ingressos</Text>
              </Button>
            </CardItem>
          </Card>
        </View>

      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  eventListTitle: {
    fontSize: 30,
    borderBottomColor: '#2089dc',
    borderBottomWidth: 2,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  eventsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  eventDescriptionTitle: {
    fontSize: 23,
    marginLeft: 5,
    marginBottom: 15
  },
  eventDescription: {
    padding: 5
  },
  icon: {
    position: 'absolute',
    left: 155
  }

})