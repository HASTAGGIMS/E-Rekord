import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from "../../auth.styles";

export default function Index() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: '#f5f5f0'
      }
      }
    >

    <Text style={styles.title}>HELLO</Text>
    
    <TouchableOpacity onPress={() =>alert("Gegege")}>
      <Text>Hikapa ge</Text>
    </TouchableOpacity>

    <Image 
      source ={require("../../assets/images/adaptive-icon-er.png")}
      style={{
        height: 400,
        width:400
      }}
    />

    
    
    </View>
  );
}
