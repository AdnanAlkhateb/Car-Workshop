import React from "react";
import { StyleSheet, Text, View , TextInput , Button , Modal} from 'react-native';
import { Formik } from "formik";

//form for adding a new user inside App

export default function ReviewForm(){

    return(
        <View style={styles.container}>
            <Formik
              initialValues={{userName :'',phone:'',carNumber:'',carType:''}}
              onSubmit={(values)=>{
              console.log(values);

            }}
            >
                {(props)=>(
                    <View>
                        <TextInput 
                            style={styles.input}
                            placeholder='userName'
                            onChangeText = {props.handleChange('userName')}
                            value = {props.values.userName}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder='phone'
                            onChangeText = {props.handleChange('phone')}
                            value = {props.values.phone}
                            keyboardType='numeric'
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder='carNumber'
                            onChangeText = {props.handleChange('carNumber')}
                            value = {props.values.carNumber}
                            keyboardType='numeric'
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder='carType'
                            onChangeText = {props.handleChange('carType')}
                            value = {props.values.carType}
                        />
                        <Button title="submit" color='maroon' onPress={props.handleSubmit} />

                    </View>
                )}

            </Formik>

        </View>
    )



}


const styles = StyleSheet.create({
    container: {
      flex: 0.8 ,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      height : '10%' ,
      width : '100%',
      alignItems : 'center',
      justifyContent : 'center',
      backgroundColor : 'red',
    },
    title: {
      textAlign : 'center',
      color : '#fff',
      fontSize : 20 ,
      fontWeight : 'bold',
    },
    input: {
      borderWidth : 1 ,
      borderColor : '#ddd',
      borderRadius : 10 ,
      textAlign : 'center',
      padding : 10 ,
      margin : 10 ,
      fontSize: 18,
      
    }, 
    content : {
      padding : 40 ,
    },
    modelToggle:{
      marginBottom:10,
      borderWidth:1,
      borderColor:'#f2f2f2',
      padding:10,
      borderRadius:10,
      alignSelf:'center',
    }
  });
  