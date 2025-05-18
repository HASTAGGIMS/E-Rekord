import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../auth.styles";

export default function Index() {
  return (
    <View
      style={styles.container}
    >

     <Text style={styles.title}>HELLO</Text>
    
    <TouchableOpacity onPress={() =>alert("Gegege")}>
      <Text>Hikapa ge</Text>
    </TouchableOpacity>

    <Image 
      source ={require("../../assets/images/react-logo.png")}
      style={{
        height: 200,
        width:200
      }}
    />

    
    
    </View>
  );
}
