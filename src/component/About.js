import React from "react";
import {View, Text, StyleSheet, StatusBar, Image} from "react-native";
import Icon from "./Icon";
import {Linking} from "react-native";
const About =() =>{
    return(
        <View style = {styles.container}>
            <Image style={styles.image} source={require("../assets/photo.jpg")}/>
            <Text style={styles.text}>Saber Basha</Text>
            <Text style={styles.info}> Hello I am Venkata Prasanna Completed B.tech in Civil Engineering
            Technlogy at Guntur ST.MARY'S GROUP OF INSTITUTIONS GUNTUR. Skilled MERN Stack Development and React native. Want to collabarate with me?? Feel free to contact!</Text>
            <View style={styles.icons}>
                <Icon 
                backgroundColor="#ff4d4d"
                onPress={()=>Linking.openURL("mailto:prasannameghna@gmail.com")}
                name={"email"}
                size={50}/>
                <Icon 
                onPress={()=> Linking.openUTL("https://github.com/Tvenkataprasanna")}
                backgroundColor="#ff4d4d"
                name={"github"}
                size={50}/>
                <Icon 
                onPress={()=>
                Linking.openURL("https://linked.com/in/venkata-prasanna-tippabathini-257105192")
                }
                backgroundColor="#ff4d4d"
                name={"linkedin"}
                size={50}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingTop:statusBar.currentHeight,
        backgroundColor:"#ffcccc",
        flex:1,
        alignItems:"center",
    },
    text:{
        marginTop:50,
        width:"100%",
        margin:20,
        flexDirection:"row",
        justifyContent:"space-evenly",
    },
    info:{
        marginHorizontal:15,
        marginVertical:10,
        fontSize:20,
    },
    image:{
        height:200,
        width:200,
        borderRadius:100,
        resizeMode:"cover",
        borderColor:"#ff9999",
        borderWidth:5,
    },
});
export default About;