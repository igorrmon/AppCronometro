import React, { Component } from 'react'

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            numero: 0,
            botao: 'VAI',
            backcolor: '#eb4d4b'
        };

        this.timer = null
        this.vai = this.vai.bind(this)
        this.limpar = this.limpar.bind(this)

    }

    vai() {
        let state = this.state;

        if (this.timer != null) {
            //Aqui para timer
            clearInterval(this.timer)
            this.timer = null
            state.botao = 'VAI'
            state.backcolor = '#eb4d4d'
        } else {
            this.timer = setInterval(() => {
                let state = this.state
                state.numero += 0.1
                this.setState(state)

            }, 100);
            state.backcolor = '#A3CB38'
            state.botao = 'PARAR'
        }

        this.setState(state)

    }

    limpar() {
        if (this.timer != null) {
            //Aqui para timer
            clearInterval(this.timer)
            this.timer = null
        }

        let state = this.state
        state.numero = 0;
        state.botao = 'VAI'
        state.backcolor = '#eb4d4d'
        this.setState(state)
    }

    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: this.state.backcolor
            }} >
                <Image source={require('./src/cronometro.png')} />
                <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
                <View style={styles.btnArea}>
                    <TouchableOpacity style={styles.botao} onPress={this.vai}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: this.state.backcolor,}}>{this.state.botao}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={this.limpar}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: this.state.backcolor,}}>LIMPAR</Text>
                    </TouchableOpacity>

                </View>
            </View>)
    }
}


var styles = StyleSheet.create({

    timer: {
        marginTop: -160,
        color: "#fff",
        fontSize: 72,
        fontWeight: 'bold',
    },
    btnArea: {
        flexDirection: 'row',
        marginTop: 70,
        height: 40
    },
    botao: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        height: 40,
        margin: 17,
        borderRadius: 9
    },
  
})
