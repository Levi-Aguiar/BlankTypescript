import { View, Image} from "react-native";

export function Profile(){
    return(
        <View>
            <Image
            source= {require("@/assets/banner.png")}
            className="w-full h-52"/>
        </View>
    )
}