import HomeStack from "../HomeStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieDetailScreen from "@/screens/MovieDetailScreen";
import FullCastScreen from "@/screens/FullCastScreen";
import Login from "@/screens/Auth/Login";
import SignUp from "@/screens/Auth/SignUp";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { auth } from "@/firebase/firebase";
import Category from "@/screens/Listing";

const Tab = createNativeStackNavigator();

const MainTab = () => {
  const Auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      Auth?.setUser(user);
    });
    return () => unsubscribe();
  }, []);
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: route.name.slice(0, -3),
      })}
      initialRouteName="Login"
    >
      {Auth?.user ? (
        <>
          <Tab.Screen name="HomeTab" component={HomeStack} />

          <Tab.Screen
            name="MovieDetail"
            component={MovieDetailScreen}
            options={{
              headerShown: false,
            }}
          />

          <Tab.Screen
            name="Category"
            component={Category}
            options={{
              headerShown: true,
            }}
          />

          <Tab.Screen
            name="FullCast"
            component={FullCastScreen}
            options={{
              headerShown: true,
              title: "Full Cast",
              headerStyle: {
                backgroundColor: "black",
              },
            }}
          />
        </>
      ) : (
        <>
          <Tab.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="SignUp"
            component={SignUp}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Tab.Navigator>
  );
};

export default MainTab;
