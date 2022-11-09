import React from "react";
import {View , StyleSheet } from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import { Button } from "react-native-elements";


// main for creating a camera button to take a pic for car.

export default function Camera(){

    const [{cameraRef},{takePicture}] = useCamera(null);
    const captureHandle = async ()=>{
        try {
            const data = await takePicture();
            console.log(data.uri);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <View style={styles.body}>
            <RNCamera ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={styles.preview}
            >
                <Button
                    title="Capture"
                    color = "#16b900"
                    onPressFunction={()=> captureHandle()}
                >
                    
                </Button>

            </RNCamera>

        </View>
    );
}


const styles = StyleSheet.create({
    body : {
        
    },
    preview:{
        alignItems : 'center',
        justifyContent:'flex-end'
    }

});