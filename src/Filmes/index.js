import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Button } from 'react-native';

export default class Filmes extends Component{

    constructor(props){
        super(props);
        this.state = {
            modalVisible: false

        };
        this.abrir = this.abrir.bind(this);
        this.fechar = this.fechar.bind(this);
    }

    abrir(){
        this.setState({modalVisible: true});
    }

    fechar(visible){
        this.setState({modalVisible: visible});
    }

    render(){
        return(
            <View style={styles.container}>

            <View style={styles.card}>
                <Text style={styles.titulo}>{ this.props.data.nome}</Text>
                <Image
                source={{uri: this.props.data.foto}}
                style={styles.capa}
                />

                <View style={styles.AreaBtn}>
                    <TouchableOpacity style={styles.btn} onPress={this.abrir}>
                        <Text style={styles.btnText}>Leia Mais</Text>
                    </TouchableOpacity>
                    <Modal animationType="slide" visible={this.state.modalVisible}>
                        <View style={{backgroundColor: '#262a2d', flex: 1, alignItems: 'center'}}>
                            <Text style={{color:'#FFF' ,fontSize: 25, margin: 20}}>{this.props.data.sinopse}</Text>
                            <TouchableOpacity onPress={() => this.fechar(false)} style={styles.btnModal}>
                                <Text style={{textAlign: 'center', fontSize: 15, color: '#FFF', margin: 3.5, fontWeight: 'bold'}}> Fechar </Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#262a2d'
    },
    card:{
        shadowColor: '#000',
        backgroundColor: '#4682b4',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3
    },

    titulo:{
        fontSize: 20,
        padding: 15,
        fontWeight: 'bold'
    },

    capa:{
        height: 250,
        zIndex: 2, 
    },

    AreaBtn:{
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9,
    },

    btn:{
        width: 100,
        backgroundColor: '#4682b4',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },

    btnText:{
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold'
    },

    btnModal:{
        width: 120,
        height: 30,
        backgroundColor: '#4682b4',
        borderRadius: 7,
        marginTop: 15,
        elevation: 5,
        shadowOpacity: 0.8
    }
})