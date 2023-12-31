import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'

import styles from './welcome.style'
import { Image } from 'react-native'
import { SIZES, icons } from '../../../constants'

const jobTypes = ['Full-time', 'Part-time', 'Contractor'];

const Welcome = ({ name }) => {

  const [activeJobType, setActiveJobType] = useState('Full-time');

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello {name}</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job!</Text>
      </View>

      {/* Searchbar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput} 
            value='' 
            onChangeText={() => {}} 
            placeholder='What are you looking for?' 
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>


      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes} 
          renderItem={({ item }) => (
            <TouchableOpacity 
              onPress={() => setActiveJobType(item)} 
              style={styles.tab(activeJobType, item)}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />

      </View>
    </View>
  )
}

export default Welcome