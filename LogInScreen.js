import { View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import {useState} from 'react';
import { Feather, FontAwesome, Ionicons  } from '@expo/vector-icons';
import RegisterScreen from './assets/RegisterScreen';


export default function LogInScreen() {


    function handleRegisterClick({setVal}){
        setVal(true)
        
    }
    

    const[data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const textInputChange = (val) => {
        if(val.length != 0){
            setData({
                ...data,
                email: val,
                check_textInputChange:true
            });
        }
        else{
            setData({
                ...data,
                email: val,
                check_textInputChange:false
            });
        }
    }
    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,

        })
    }
    const updateSecureTextEntry = () =>{
        setData({
            ...data,
             secureTextEntry: !data.secureTextEntry
        });
    
    }


    return ( 
    <>
        <StatusBar />
        
            <View style = { styles.container }>
                
                <View style = { styles.header}>
                    <Text style = { styles.textHeader}>Welcome</Text>
                </View>

                <View style={styles.footer}>
                    <Text style = { styles.textFooter}>E-Mail</Text>
                    <View style = { styles.details}>

                    <FontAwesome name="user-o" size={20} color="grey" />

                    <TextInput  
                    placeholder="Enter your email address"
                    style = { styles.textInput}
                    autoCapitalize ='none'
                    onChangeText={(val) => check_textInputChange(val)}
                    />

                    {data.check_textInputChange ? 
                    <Feather name="check-circle" size={20} color="green" />
                    : null}

                    </View>
                    <Text style = {[styles.textFooter, {marginTop:35}]}>Password</Text>
                    <View style = { styles.details}>

                    <Ionicons name="md-lock-closed-outline" size={20} color="grey" />

                    <TextInput  
                    placeholder="Enter your password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style = { styles.textInput}
                    autoCapitalize ='none'
                    onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>

                    {data.secureTextEntry ?
                        <Feather name="eye-off" size={20} color="grey" />
                    :     
                         <Feather name="eye" size={20} color="grey" />
                    }
                    </TouchableOpacity>
                    
                    </View>
                    
                    <TouchableOpacity>
                        <View style = { styles.button}>
                            <Text style = { styles.textSignIn}>Sign In</Text>
                        </View>
                    </TouchableOpacity>

                    
                    <TouchableOpacity onPress={handleRegisterClick}>
                        <View style = { styles.button}>
                            
                            <Text style = { styles.textSignIn}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>


                </View>

        
            </View>

        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#779ecb',
        height: '100%',
        width: '100%'
    },
    header:{
        flex: 1,
        justifyContent: 'flex-end',
        marginLeft:10,
        marginBottom:10,
        padding:10

      
    },
    footer:{
        backgroundColor: '#e6e6fa',
        flex: 3,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30
    },
    textHeader: {
        fontSize:30,
        fontWeight: 'bold',
        color:'#fffaf0'
    },
    textFooter: {

        fontSize:18,
        color:'#1a2421'

    },
    details: {
        flexDirection: 'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#777',
        paddingBottom:5
    },
    textInput: {
        flex:1,
        marginTop:-12,
        paddingLeft:10,
        color:'#05375a'
    },

    button:{
        alignItems: 'center',
        marginTop:30,
        borderRadius:10,
        justifyContent:'center',
        backgroundColor: '#6699cc',
        width:'100%',
        height:50        
    },
   
    textSignIn:{
        fontSize:18,
        fontWeight:'bold',
        color:'#fffaf0'
    },
    
})