import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { COLORS, FONT, SIZES, icons, images } from '../constants/';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import { Stack } from 'expo-router';

export default function Page() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen 
        options={{ 
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (<ScreenHeaderBtn iconUrl={icons.menu} dimension={"60%"} />),
          headerRight: () => (<ScreenHeaderBtn iconUrl={images.profile} dimension={"100%"} />),
          headerTitle: "Job Hunter",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: FONT.bold, color: COLORS.tertiary, fontSize: 22 }
        }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome name={'Yash'} />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
