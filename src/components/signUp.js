import React from 'react';
import {StatusBar, Text, View,TextInput, Button,TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons,AntDesign} from '@expo/vector-icons'
import {ScrollView} from 'react-native-gesture-handler';

const colors = {
    appTheme : '#D1D1D1',
    white: '#FFFFFF',
    fontBody: '#292929',
    fontHeading:'#3D4FF4',
    black: '#000000',
    grey:'#EEF1F1'
}
export default function Theme(props){
return(
    <View style = {{
        flex :1,
        backgroundColor: '#E50914',
    }}
    >
    <StatusBar barStyle='light-content' />
    <View style = {{
        alignItems:'flex-start',
        paddingTop: 50,
        paddingLeft:20
    }}>
        <Text style = {{
            fontSize: 54,
            color:colors.white
        }}>Let's</Text> 
        <Text style = {{
            fontSize: 54,
            color:colors.white }}>Register.</Text>
            <Text style={{color:colors.white,fontSize:24}}>Use your email or Sign up with Google or Facebook</Text>

    </View> 
        <View style={{alignItems:'center',display:'flex',flexDirection:'column'
                }}>
            <TextInput style={{
                height:45,
                width:380,
                padding:10,
                backgroundColor:colors.white,
                borderRadius:9,
                position:'absolute',
                top:80  
            }} placeholder={'E-mail'}></TextInput>
            <TextInput style={{
                height:45,
                width:380,
                padding:10,
                backgroundColor:colors.white,
                borderRadius:9,
                position:"absolute",
                top:140
                
            }} placeholder={'Password'} ></TextInput>
        </View>
        <View style={{alignItems:'center'}}>
            <TouchableOpacity
            style = {{ 
                backgroundColor:colors.white,padding:10,borderRadius:3,width:120,marginHorizontal:2,position:'relative',top:220
            }}><Text style={{alignSelf:'center',fontSize:18}}>Sign up</Text></TouchableOpacity>
            
        </View>
        <View style={{alignSelf:'center'}}>
        <Text style={{position:'relative',top:250,color:colors.white}}>Or sign up with</Text>
        </View>

        <View style = {{
            flexDirection:'row',
            alignSelf:'center'
        }}>
        <View style={{margin:5,height:50,width:50,backgroundColor:colors.white,borderRadius:30,alignSelf:'center',position:'relative',top:280}}>
            <Text style={{alignSelf:'center',fontSize:30,fontWeight:'100',justifyContent:'center',top:5,color:'#4267B2'}}>f</Text>
        </View>
        <View style={{margin:5,height:50,width:50,backgroundColor:colors.white,borderRadius:30,alignSelf:'center',position:'relative',top:280}}>
            <Text style={{alignSelf:'center',fontSize:30,fontWeight:'100',justifyContent:'center',top:5,color:'#de5246'}}>G</Text>
        </View>
        

        
        </View>
        
       

        </View>
)
};


