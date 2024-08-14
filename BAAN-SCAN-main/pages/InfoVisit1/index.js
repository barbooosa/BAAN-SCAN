import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import {TextInputMask} from 'react-native-masked-text'
import { Picker } from "@react-native-picker/picker";









export default function NovoVisit(){
    const navigation = useNavigation();
    const [cpf,setCpf] = useState('')
    const [cell, setCell] = useState('')
    const [resposta, setresposta] = useState([])
    const [rspt, setRpst] = useState(['Sim', 'Não'])
    const [resposta1, setresposta1] = useState([])
    const [rspt1, setRpst1] = useState(['Sim', 'Não'])


    return (

        <ScrollView style={styles.page}>
            <Animatable.View style={styles.container}>
                <Animatable.Image
                animation="slideInDown"
                source={require('../../fotos/logo_menor1.png')}
                style={styles.logo}
                resizeMode="contain"/>
            </Animatable.View>
            <Animatable.Text animation='fadeInLeft'delay={500} style={styles.sloganHeader} >
                <Text style={styles.slogan} >Info Visitante</Text>
            </Animatable.Text>
            <TouchableOpacity onPress={() => navigation.navigate('Principal')}>
                <AntDesign name="home" size={36} color="white" backgroundColor='#2A5679' style={styles.home} />
            </TouchableOpacity>
            <Text style={styles.title}>Nome Completo</Text>
            <View style={styles.input}></View>
            <Text style={styles.title}>CPF</Text>
            <View style={styles.input} placeholder="___-___-___-__" type={'cpf'}
                value={cpf}
                onChangeText={text => setCpf(text)} />  
            <Text style={styles.title}>Telefone</Text>
            <View style={styles.input} type={'cel-phone'}
                value={cell} placeholder="(__) _____-____"options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) '
                }}
                onChangeText={text => setCell(text)} />          
            <Text style={styles.title}>Endereço</Text>
            <View style={styles.input}></View> 
            <Text style={styles.title}>Veículo?</Text>
            <View style={styles.input}></View> 
            <Text style={styles.title}>Autorizador</Text>
            <View style={styles.input}></View>
            <Text style={styles.title}>Crachá?</Text>
            <View style={styles.input}></View> 

        </ScrollView>
    )


}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#2A5679',
        borderRadius: 20,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        height: 160
    },
    logo:{
        marginHorizontal: '41%',
        marginTop: 37

    },
    title:{
        fontSize: 16,
        marginTop: 10,
        left: '15%',
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 14,
        backgroundColor: '#CBCBCB',
        borderRadius: 8,
        width: '65%',
        left: '15%'
    },
    home:{
        top: -100,
        width: 37,
        left: 30
    },
    button:{
        backgroundColor: '#ED2E38',
        height: 45,
        width: '50%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: -40,
        justifyContent: 'center',
        alignItems: 'center',
        left: '22%'
    },
    buttonText:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        top: '25%',
        left: '-1%'
    },
    lupa:{
        left: 74,
        top: -13,

    },
    consult:{
        backgroundColor: '#ED2E38',
        height: 45,
        width: '50%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        left: '25%',
        top: '-%',
    },
    slogan:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2A5679',    
        fontWeight: '700',
    },
    sloganHeader:{
        top: 10,
        left: '3%'
    },
    pick: {
        height: 150, 
        width: '30%',
        marginLeft: 140,
        marginTop: -55
    },
    qrcode1:{
    }


})