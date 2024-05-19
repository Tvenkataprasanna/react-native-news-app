import React from "react";
import {View, StyleSheet, TextInput} from "react-native";
import {materialCommunicationIcons} from "@expo/vector-icons";
import {TouchableWithoutFeedback} from "react-native";
const AppInput = ({icon, search, onSearch, ...otherProps})=>{
    return(
        <View style={styles.container}>
            <materialCommunicationIcons size={20} name={icon} style={Styles.icon}/>
            <TextInput {...otherProps} style={styles.input}/>
            {search && (
                <TouchableWithoutFeedback onPress={onSearch}>
                    <materialCommunicationIcons 
                    color={"#FF595A"}
                    size={35}
                    name={search}
                    style={styles.icon}/>
                </TouchableWithoutFeedback>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        width:"100%",
        backgroundColor:"white",
        borderRadius:25,
        padding:10,
        flexDirection:"row",
        marginVertical:15,
    },
    input:{
        fontSize:18,
        flex:1,
    },
    icon:{
        marginRight:10,
        alignSelf:"center",
    },
});
export default AppInput;