import React, { useContext } from "react";
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import COLORS from "@/constants/colors";
import UserDetail from "@/components/profile-screen/UserDetail";
import ThreeColumnList from "@/components/UI/ThreeColumnList";
import { ProfileStackParamList } from "@/types/navigation";
import { FavoriteMoviesContext } from "@/context/FavoriteMoviesContext";
import { Movie } from "@/types/api";
import { AuthContext } from "@/context/AuthContext";
import { Button } from "react-native-paper";
import { auth } from "@/firebase/firebase";

type Props = any;

const ProfileScreen = ({ navigation }: Props) => {
  const favoriteContext = useContext(FavoriteMoviesContext);

  const Auth = useContext(AuthContext);

  const handleListItemPress = (id: number) => {
    navigation.navigate("MovieDetail", { id: id });
  };

  const handleLogout = async () => {
    await auth.signOut();
    Auth?.setUser(null);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <UserDetail user={Auth?.user} />

      <Button
        onPress={handleLogout}
        contentStyle={{
          backgroundColor: "red",
        }}
        textColor="white"
      >
        Logout
      </Button>
    </SafeAreaView>
  );
};

export default ProfileScreen;
