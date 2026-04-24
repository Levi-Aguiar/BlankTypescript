
import { Text, TextProps, View} from "react-native";
import { Title } from "./Title";
import { Option } from "@/components/Option";
import { Switch } from "@/components/Switch";
import { Checkbox } from "./Checkbox";
import { useState } from "react";

export function Preferences(){
    const [isEnabled, setIsEnabled] = useState(false);
    return(
        <View className="w-full">
            <Title>Preferences</Title>
            <Option>
                <Option.Icon icon="dark-mode" />
                <Option.Title>Dark Mode</Option.Title>
                <Switch onValueChange={setIsEnabled} value={isEnabled} />

            </Option>
            <Option>
                <Option.Icon icon="email" />
                <Option.Title>Public Email</Option.Title>
                <Checkbox label="" />
            </Option>
        </View>
    )
}