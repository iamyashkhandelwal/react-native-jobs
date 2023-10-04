import { Stack, useGlobalSearchParams, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { ActivityIndicator, RefreshControl, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { COLORS, FONT, SIZES, icons } from '../../constants'
import { Company, ScreenHeaderBtn } from '../../components'
import useFetch from '../../hook/useFetch'

const JobDetails = () => {
  const router = useRouter();
  const { id } = useGlobalSearchParams();
  const [ refreshing, setRefreshing ] = useState(false);

  const { isLoading, data, error } = useFetch('job-details', { job_id: id });

  const onRefresh = () => {
    // setRefreshing(true);
    // setTimeout(() => {
    //   setRefreshing(false);
    // }, 3000)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {backgroundColor: COLORS.lightWhite},
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (<ScreenHeaderBtn iconUrl={icons.left} dimension={"60%"} handlePress={() => router.back()} />),
          headerRight: () => (<ScreenHeaderBtn iconUrl={icons.share} dimension={"50%"} />),
          headerTitle: "Job Hunter",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: FONT.bold, color: COLORS.tertiary, fontSize: 22 }
         }} 
      />
      <>
        <ScrollView 
          showsVerticalScrollIndicator={false} 
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {isLoading ? <ActivityIndicator size={"large"} color={COLORS.primary} />
          : error ? <Text>Something went wrong!</Text>
          : data.length === 0 ? <Text>No Data Found!</Text>
          : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company 
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              companyLogo={data[0].employer_logo}
              jobLocation={`${data[0].job_city}, ${data[0].job_state}, ${data[0].job_country}`}
            />
          </View>)}
        </ScrollView>
      </>

    </SafeAreaView>
  )
}

export default JobDetails