import { StatusBar } from 'expo-status-bar';
import React,{ useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View , TextInput , Button , Modal,maxRating, defaultRating,SafeAreaView,
  TouchableOpacity,PermissionsAndroid,  Dimensions,
  CustomRatingBar,Image,ImageBackground,ScrollView, Alert} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import ReviewForm from './Screen/reviewform';

import {Camera ,CameraType } from "expo-camera";
let camera: Camera;

import { Rating, AirbnbRating } from 'react-native-ratings';
import * as ImagePicker from 'expo-image-picker';



export default function App() {
  const [number,setNamber] = useState('');
  const onPressHandler = ()=> {
  }
  const [selected , setSelected] = useState("");
  const data = [
    {key:'1' , value:'ahmad'},
    {key:'2' , value:'khaled'},
    {key:'3' , value:'abd'},
    {key:'4' , value:'adnan'},
    {key:'5' , value:'qusai'},
    {key:'6' , value:'omar'},
  ];
  const [CustomerComplaint , setCustomerComplaint] = useState('');
  const [selected1 , setSelected1] = useState("");
  const data1 = [
    {key:'1' , value:'فحص'},
    {key:'2' , value:'فحص شامل'},
    {key:'3' , value:'صيانة'},
    {key:'4' , value:'صيانة وفحص'},
  ];
  const [ModalOpen, setModalOpen] = useState(false);
  const [exit , setExit] = useState('');

    // The path of the picked image
    const [pickedImagePath, setPickedImagePath] = useState('');
  
    // This function is triggered when the "Select an image" button pressed
    const showImagePicker = async () => {
      // Ask the user for the permission to access the media library 
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert("You've refused to allow this appp to access your photos!");
        return;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync();
  
      // Explore the result
      console.log(result);
  
      if (!result.cancelled) {
        setPickedImagePath(result.uri);
        console.log(result.uri);
      }
    }
  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  }
  /*/*/

  // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState(2);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  // Filled Star. You can also give the path from local
  const starImageFilled = './assets/star_corner.png';
  // Empty Star. You can also give the path from local
  const starImageCorner = './assets/star_filled.png';

  const CustomRatingBar = () => {
      return (
        <View style={styles.customRatingBarStyle}>
          {maxRating.map((item, key) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={item}
                onPress={() => setDefaultRating(item)}>
                <Image
                  style={styles.starImageStyle}
                  source={
                    item <= defaultRating
                      ? { uri: starImageFilled }
                      : { uri: starImageCorner }
                  }
                />
              </TouchableOpacity>
            );
          })}
        </View>
      )}
 
  const CaustomRatingBar = () =>{
        return (
            <View style={styles.CustomRatingBarStyle}>
                {
                    maxRating.map((item,key) => {
                        return (
                            <TouchableOpacity activeOpacity = {0.7}
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

  return (
    
      <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
          <Text style={styles.title}>Fixed Cars</Text>
      </View>
      <View style = {styles.content}>
        {            /*Content of the First Page */         }
        <View style = {styles.input}>
          <Text>رقم السيارة</Text>

            <TextInput
              keyboardType='numeric'
              style={styles.input}
              onChangeText={(val) => setNamber(val)}
            />

          <Button 
          title = 'بحث'
          onPress={onPressHandler}
          />
        </View>
        <View style = {styles.input}>
          <Text>موظف الاستقبال</Text>
           
            <SelectList 
              data={data} 
              setSelected={setSelected} 
              dropdownStyles={{backgroundColor:'gray'}}
              dropdownItemStyles={{marginHorizontal:10}}
              dropdownTextStyles={{color:'white'}}
              placeholder="Select Status"
              maxHeight={150}
            />
          
        </View>
        <View style = {styles.input}>
          <Text>شكوى العميل</Text>
            <TextInput
              multiline
              style={styles.input}
              onChangeText={(val) => setCustomerComplaint(val)}
            />
        </View>


        <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Button onPress={showImagePicker} title="Select an image" />

        <Button onPress={openCamera} title="Open camera" />
      </View>

      <View style={styles.imageContainer}>
        {
          pickedImagePath !== '' && <Image
            source={{ uri: pickedImagePath }}
            style={styles.image}
          />
        }
      </View>
    </View>
        <View>
          <Text>سبب الدخول</Text>
          <SelectList 
              data={data1} 
              setSelected={setSelected1} 
              dropdownStyles={{backgroundColor:'gray'}}
              dropdownItemStyles={{marginHorizontal:10}}
              dropdownTextStyles={{color:'white'}}
              placeholder="Select Status"
              maxHeight={150}
            />
        </View>
        
        <View style={styles.container}>
          <Modal visible={ModalOpen} animationType='slid'>
            <View style={styles.modalContant}>
              <Button 
                title='close window'
                size= {24}
                style={{...styles.modalToggle, ...styles.modalClose}}
                onPress={() => setModalOpen(false)}
              />
              <ReviewForm /> 
            </View>
          </Modal>
      
            <Button 
            title= 'add user'
            size= {24}
            style={styles.modalToggle}
            onPress={() => setModalOpen(true)}
          />
        </View>
      </View>
      <StatusBar style="auto" />
      

    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>How was your experience with us</Text>
        <Text style={styles.textStyleSmall}>Please Rate Us</Text>
        {/*View to hold our Stars*/}
        <CustomRatingBar />
        <Text style={styles.textStyle}>
          {/*To show the rating selected*/}
          {defaultRating} / {Math.max.apply(null, maxRating)}
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => alert(defaultRating)}>
          {/*Clicking on button will show the rating as an alert*/}
          <Text style={styles.buttonTextStyle}>Get Selected Value</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
          
        </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    width : '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex : 1,
    marginTop : 0,
    backgroundColor: 'white',
    marginHorizontal: 1,
  },
  header: {
    position : 'absolute',
    paddingTop : 10 ,
    left: 0,
    right: 0,
    height : '6%' ,
    width : '100%',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : 'red',
    fontWeight: 'bold',
  },
  title: {
    textAlign : 'center',
    color : '#fff',
    fontSize : 20 ,
    fontWeight : 'bold',
  },
  input: {
    borderWidth : 1 ,
    borderColor : '#777',
    textAlign : 'center',
    padding : 8 ,
    margin : 10 ,
    marginBottom : 10 ,
    
  }, 
  content : {
    padding : 100 ,
  },
  modalToggle:{
    marginBottom:10,
    borderWidth:1,
    borderColor:'#f2f2f2',
    padding:40,
    alignSelf:'center',
  },
  modalClose:{
    marginTop : 20,
    marginBottom : 0
  },
  modalContant :{
    flex : 1,
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
    padding : 20,
    backgroundColor : 'blue'
},
closeButton: {
  position: "absolute",
  top: 35,
  left: 15,
 
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#c4c5c4",
  opacity: 0.7,
  zIndex: 2,
},
buttonContainer: {
  backgroundColor: '#fff',
  down: 10,
  alignSelf: 'flex-end',
  marginTop: 100,
},
preview: {
  alignSelf: 'stretch',
  flex: 1
},
paragraph: {
  margin: 10,
  marginTop: 40,
  fontSize: 18,
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#34495e',
},
cameraContainer: {
  flex: 1,
  flexDirection: 'row'
},
fixedRatio:{
  flex: 1,
  aspectRatio: 1
},
screen: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
buttonContainer: {
  width: 400,
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 100
},
imageContainer: {
  padding: 30
},
container: {
  flex: 1,
  backgroundColor: 'white',
  padding: 10,
  justifyContent: 'center',
  textAlign: 'center',
},
titleText: {
  padding: 8,
  fontSize: 16,
  textAlign: 'center',
  fontWeight: 'bold',
},
textStyle: {
  textAlign: 'center',
  fontSize: 23,
  color: '#000',
  marginTop: 15,
},
textStyleSmall: {
  textAlign: 'center',
  fontSize: 16,
  color: '#000',
  marginTop: 15,
},
buttonStyle: {
  justifyContent: 'center',
  flexDirection: 'row',
  marginTop: 30,
  padding: 15,
  backgroundColor: '#8ad24e',
},
buttonTextStyle: {
  color: '#fff',
  textAlign: 'center',
},
customRatingBarStyle: {
  justifyContent: 'center',
  flexDirection: 'row',
  marginTop: 30,
},
starImageStyle: {
  width: 40,
  height: 40,
  resizeMode: 'cover',
},

});
