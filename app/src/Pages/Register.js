/* eslint-disable no-useless-escape */
/* eslint-disable radix */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-unused-state */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Text } from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  DatePicker,
  Toast,
} from 'native-base';
import { TextInputMask } from 'react-native-masked-text';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      name: '',
      email: '',
      password: '',
      cpf: '',
      celphone: '',
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  handleChangeFieldData(field, value) {
    this.setState({
      [field]: value,
    });
  }

  isCPFvalid = (cpf) => {
    const value = cpf.replace(/[^\d]+/g, '');
    if (value === '') {
      return false;
    }
    // Elimina CPFs invalidos conhecidos
    if (
      value.length !== 11 ||
      value === '00000000000' ||
      value === '11111111111' ||
      value === '22222222222' ||
      value === '33333333333' ||
      value === '44444444444' ||
      value === '55555555555' ||
      value === '66666666666' ||
      value === '77777777777' ||
      value === '88888888888' ||
      value === '99999999999'
    ) {
      return false;
    }
    // Valida 1o digito
    let add = 0;
    let i;
    for (i = 0; i < 9; i++) {
      add += parseInt(value.charAt(i)) * (10 - i);
    }
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(value.charAt(9))) {
      return false;
    }
    // Valida 2o digito
    add = 0;
    for (i = 0; i < 10; i++) add += parseInt(value.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) rev = 0;
    if (rev !== parseInt(value.charAt(10))) {
      return false;
    }
    return true;
  };

  isEmptyField = () => {
    const {
      name, email, password, celphone, cpf,
    } = this.state;
    if (!name.trim() || !email.trim() || !password.trim() || !celphone.trim() || !cpf.trim()) {
      return true;
    }
    return false;
  };

  isPasswordValid = (password) => {
    if (password.trim().length < 6) return false;

    return true;
  };

  handleSubmitForm = () => {
    let hasError = false;
    let errMsg = '';

    if (this.isEmptyField()) {
      hasError = true;
      errMsg = 'Por favor, preencha todos os campos!';
    } else if (!this.validateEmail(this.state.email)) {
      hasError = true;
      errMsg = 'E-mail Inválido';
    } else if (!this.isPasswordValid(this.state.password)) {
      hasError = true;
      errMsg = 'A senha deve conter no mínimo 6 caracteres!';
    } else if (!this.isCPFvalid(this.state.cpf)) {
      hasError = true;
      errMsg = 'CPF Inválido!';
    }

    if (hasError) {
     alert(errMsg);
    } else {
      // Envia requisiçao
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              marginTop: 20,
              marginBottom: 40,
            }}
          >
            Cadastro de usuário
          </Text>
          <Form>
            <Item>
              <Label>Nome</Label>
              <Input
                value={this.state.name}
                onChangeText={value => this.handleChangeFieldData('name', value)}
              />
            </Item>
            <Item>
              <Label>E-mail</Label>
              <Input
                value={this.state.email}
                onChangeText={value => this.handleChangeFieldData('email', value)}
              />
            </Item>
            <Item>
              <Label>Senha</Label>
              <Input
                value={this.state.password}
                onChangeText={value => this.handleChangeFieldData('password', value)}
              />
            </Item>
            <Item>
              <Label>Celular</Label>
              <TextInputMask
                type="cel-phone"
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) ',
                }}
                value={this.state.celphone}
                onChangeText={text => this.handleChangeFieldData('celphone', text)}
              />
            </Item>
            <Item>
              <Label>CPF</Label>
              <TextInputMask
                type="cpf"
                value={this.state.cpf}
                onChangeText={text => this.handleChangeFieldData('cpf', text)}
              />
            </Item>
            <Item>
              <Label>Data de Nascimento</Label>
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(1900, 1, 1)}
                maximumDate={new Date()}
                locale="pt"
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType="fade"
                androidMode="default"
                placeHolderText="Selecione a data"
                textStyle={{ color: 'green' }}
                placeHolderTextStyle={{ color: '#d3d3d3' }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </Item>
          </Form>

          <Button block style={{ margin: 20 }} onPress={() => this.handleSubmitForm()}>
            <Text style={{ color: '#FFFFFF' }}>Cadastrar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Register;
