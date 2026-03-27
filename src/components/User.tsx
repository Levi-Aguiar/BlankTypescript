import { View, Text } from "react-native";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/avatar"

export function User(){
    return(
        <View className="items-center">
            <Avatar className="w-32 h-32 border-4 border-gray-300">
                <AvatarImage  source= {require("@/assets/220483556.png")}/>
                <AvatarFallback className="text-yellow-300">LJMA</AvatarFallback>
            </Avatar>
            <Text className="text-white font-bold text-2x1 mt-4">
                Levi José de Melo Aguiar
            </Text>
            <Text className="">

            </Text>
        </View>
    )
}