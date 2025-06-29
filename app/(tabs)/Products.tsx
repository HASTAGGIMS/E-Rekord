import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { ImagePickerResult } from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Dimensions, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../../auth.styles';
import { COLORS } from '../../constants/Themes';
import Avatar from '../components/avatar';

const { width } = Dimensions.get('window');
const INPUT_WIDTH = width * 0.8;


export default function Products() {
interface ImageFile {
  uri: string;
  type?: string;
  name?: string;
}

const onAddProductPress =() =>{

};
const[isModalVisible, setIsModalVisible] = React.useState(false);
const[isModalVisible2, setIsModalVisible2] = React.useState(false);
const[isModalVisible3, setIsModalVisible3] = React.useState(false);
const [image, setImage] = useState<string | null>(null);

const uploadImage = async (mode: string) => {
  try {
    let result: ImagePickerResult;
    if (mode === "gallery") {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1
      });
    } else {
      await ImagePicker.requestCameraPermissionsAsync();
      result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.back, 
        allowsEditing: true, 
        aspect: [1, 1], 
        quality: 1,
      });
    }
    
    if (!result.canceled) {
      await saveImage(result.assets[0].uri);
    }
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert("Error uploading image: " + error.message);
    } else {
      Alert.alert("Error uploading image");
    }
    setIsModalVisible3(false);
  }
};
  
const removeImage = async () => {
  try {
    await saveImage("");
  } catch (error: unknown) {
    if (error instanceof Error) {
      Alert.alert(error.message);
    } else {
      Alert.alert("An unknown error occurred");
    }
    setIsModalVisible3(false);
  }
}

const saveImage = async (image: string) =>{
  try{
    setImage(image);
    setIsModalVisible3(false);
  }

  catch(error){
    throw error;
  }
}
  return (
    <View style ={styles.container}>
      <View style ={styles.LoginSection}>
        <TouchableOpacity  style ={[styles.continueButton, {width:INPUT_WIDTH}]} 
          onPress= {() => setIsModalVisible(true)}>
          <Text style={styles.buttonText}>Add Product</Text>
        </TouchableOpacity>
        
        <Modal
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
        visible={isModalVisible}
        animationType='none'>
          <View style={styles.modalView}>
            <View style={styles.modal}>

              <TouchableOpacity  style ={[styles.modalButton, {width:INPUT_WIDTH*0.25, backgroundColor: '#b50000', left:170}]}
              onPress= {() => setIsModalVisible(false)} >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity  style ={[styles.modalButton, {width:INPUT_WIDTH*0.25,  right:170}]}
              onPress={() => Alert.alert("Added")} >
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
              
              
              <Avatar onButtonPress={() => setIsModalVisible3(true)}
              uri={image}
              />

              <TouchableOpacity style={styles.addPhoto}
              onPress= {() => setIsModalVisible3(true)}>
                <View style={styles.addPhotoIconContainer}>
                  <Ionicons name="camera" size={24} color={COLORS.primary}/>
                </View>
              </TouchableOpacity>
                
              

              <TextInput style={[styles.input,{width: INPUT_WIDTH*0.8, position:"absolute", top: 140, }]}
                autoCapitalize="none"
              />

              <TextInput style={[styles.input,{width: INPUT_WIDTH*0.25, position:"absolute", top: 205,  right:197}]}
                autoCapitalize="none"
                keyboardType="numeric"
              />

                <TextInput style={[styles.input,{width: INPUT_WIDTH*0.25, position:"absolute", top: 205,  alignSelf:"center"}]}
                autoCapitalize="none"
                keyboardType="numeric"
              />

              <TextInput style={[styles.input,{width: INPUT_WIDTH*0.25, position:"absolute", top: 205, left:195}]}
                autoCapitalize="none"
                keyboardType="numeric"
              />

              <TouchableOpacity  style ={[styles.alternateModalButton, {width:INPUT_WIDTH*0.25,
                top: 260, alignSelf: "center"}]}
                onPress= {() => setIsModalVisible2(true)} >
                <Text style={{
                  textAlign: 'center',
                  color: COLORS.primary
                }}>Variants</Text>
              </TouchableOpacity>
              
              <Text style={{
                color: COLORS.primary,
                position: 'absolute',
                top: 120,
                right: 225
              }}>Name</Text>

              <Text style={{
                color: COLORS.primary,
                position: 'absolute',
                top: 186,
                right: 230
              }}>Price</Text>

              <Text style={{
                color: COLORS.primary,
                position: 'absolute',
                top: 186,
                right: 140
              }}>Stock</Text>

              <Text style={{
                color: COLORS.primary,
                position: 'absolute',
                top: 186,
                left: 210
              }}>Cost</Text>
            </View>
          </View>
        </Modal>


        <Modal
          transparent={true}
          onRequestClose={() => setIsModalVisible2(false)}
          visible={isModalVisible2}
          animationType='none'
        >
          <View style={styles.modalViewLower}>
            <View style={styles.modalLower}>
              <TouchableOpacity  style ={[styles.modalButton, {width:INPUT_WIDTH*0.25, alignSelf: "center"}]}
              onPress= {() => setIsModalVisible2(false)} >
                <Text style={styles.buttonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>


        <Modal
          transparent={true}
          onRequestClose={() => setIsModalVisible3(false)}
          visible={isModalVisible3}
          animationType='none'
        >
          <View style={styles.modalViewLower}>
            <View style={[styles.modalLower,{height: 150}]}>
              <TouchableOpacity  style ={[styles.backButton, {left: 180, bottom: 30}]}
              onPress= {() => setIsModalVisible3(false)} >
                <Ionicons name="close" size={24} color={COLORS.primary}/>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.addPhotoIconContainer,{right: 130, bottom: 50}]}
              onPress={() => uploadImage("camera") }
              >
                <Text style={[styles.imageButtonsText,{width: 50, top:90}]}>Camera</Text>
                <View style={styles.addPhotoImage}>
                  <Ionicons name="camera" size={40} color={COLORS.primary }/>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.addPhotoIconContainer,{alignSelf:"center", bottom: 75}]}
              onPress={() => uploadImage("gallery")} >
                <Text style={[styles.imageButtonsText,{width: 50, top:90, left:5}]}>Gallery</Text>
                <View style={styles.addPhotoImage}>
                  <Ionicons name="image" size={40} color={COLORS.primary }/>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.addPhotoIconContainer,{left: 130, bottom: 98}]}
              onPress={()=> removeImage()} >
                <View style={[styles.addPhotoImage,{borderColor: '#b50000', backgroundColor: '#b50000'}]}>
                  <Ionicons name="trash" size={40} color= "white"/>
                </View>
                <Text style={[styles.imageButtonsText,{width: 60, top:90, left:5, color: 'white'}]}>Remove</Text>
                </TouchableOpacity>
            </View>
          </View>
        </Modal>
        
      </View>
    </View>
  )
}