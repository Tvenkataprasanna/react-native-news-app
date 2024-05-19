import React from "react";
import{
    View,
    StyleSheet,
    Image,
    Text,
    TouchableWithoutFeedback,
} from "react-native";
import AppButton from "./AppButton";

const Card =({title, subtitle, image, onPress})=>{
    return(
        <TouchableWithoutFeedback  onPress= {onPress}>
            <View style={styles.container}>
            <Image 
                source={
                    image ? {
                    uri:image,
                }
                :require("../assets/download.png")
                }
                />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
                <AppButton onPress={onPress} title="Full News Link"/>
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        borderRadius:25,
        overflow:"hidden",
        marginBottom:20,
    },
    image:{
        width:"100%",
        height:200,
    },
    detailsContainer:{
        padding:20,
    },
    subtitle:{
        fontSize:15,
        marginTop:5,
    },
    title:{
        fontSize:18,
        color:"#FF595A",
        marginBottom:7,
        fontWeight:"bold",
    },
});
export default Card;