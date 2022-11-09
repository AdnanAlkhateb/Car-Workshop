import React, { useState } from "react";
import {maxRating, defaultRating,SafeAreaView, StyleSheet,Text ,View , Image ,TouchableOpacity,CustomRatingBar} from "react-native";


    const rating = () => {
    const [defaultRating, setdefultRating]=useState(2)
    const [maxRating,setmaxRating] = useState([1,2,3,4,5])
    const starImgFilled = './assets/star_corner.png'
    const starImgCorner = './assets/star_filled.png'

    //Create the Rating Bar in main screen

    const CustomRatingBar = () =>{
        return (
            <View style={styles.CustomRatingBarStyle}>
                {
                    maxRating.map((item,key) => {
                        return (
                            <TouchableOpacity
                                 activeOpacity = {0.7}
                                key = {item}
                                onPress={()=>setdefultRating(item)}
                            >
                              <Image style={styles.starImgStyle} 
                                source = { item <= defaultRating 
                                    ? {uri:starImgFilled}
                                    : {uri:starImgCorner}
                                }
                                    
                              />    
                            </TouchableOpacity>

                        )
                    })
                }

            </View>
        )
    }
}


export default function Rating(){

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textStyle}> Pleas Rate us</Text>
            <CustomRatingBar />
           
            <TouchableOpacity activeOpacity={0.7}
                style = {styles.buttonStyle}
                onPress = {()=> alert(defaultRating)}
            >
                <Text style={styles.buttonStyle}>Get Selected Value</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );


};

// Styles for rating bar

const styles = StyleSheet.create({
    container: {
        flex : 1,
        margin : 10,
        justifyContent : 'center'
    },
    textStyle: {
        textAlign :'center',
        fontSize :23,
        marginTop : 20
    },
    CustomRatingBarStyle:{
        justifyContent:'center',
        flexDirection: 'row',
        marginTop: 30
    },
    starImgStyle:{
        width :40,
        height :40,
        resizeMode :'cover'
    },
    buttonStyle:{
        justifyContent : 'center',
        alignItems :'center',
        marginTop:30,
        padding : 15,
        backgroundColor : 'green'
    }
});

