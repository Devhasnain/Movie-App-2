import { MaterialCommunityIcons } from "@expo/vector-icons";

import { MainTabParamList } from "@/types/navigation";
import HomeStack from "../HomeStack";
import ExploreStack from "../ExploreStack";
import ProfileStack from "../ProfileStack";
import COLORS from "@/constants/colors";
import { Text } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieDetailScreen from "@/screens/MovieDetailScreen";
import FullCastScreen from "@/screens/FullCastScreen";

const Tab = createNativeStackNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: route.name.slice(0, -3),
        tabBarStyle: { backgroundColor: 
          "black"
        },
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.text,
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStack} />

      <Tab.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="FullCast"
        component={FullCastScreen}
        options={{
          headerShown: true,
          title:"Full Cast",
          headerStyle:{
            backgroundColor:"black"
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
