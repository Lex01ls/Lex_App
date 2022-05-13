import { View, StyleSheet, StatusBar } from 'react-native';
import React,{useState} from 'react';
import LogInScreen from './LogInScreen';
import RegisterScreen from './assets/RegisterScreen';

export default function App() {

    const[val, setVal]=useState(true);

    return ( 
        <>
            <StatusBar />
                <View style={styles.container}>

                    {val? <LogInScreen setVal={setVal}/>
                    : 
                     <RegisterScreen />
                    }
                    
                </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#b2ffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
})