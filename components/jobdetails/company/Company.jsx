import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { checkImageURL } from '../../../utils';
import { icons } from '../../../constants';

const Company = ({ jobTitle, companyName, companyLogo, jobLocation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image resizeMode={'contain'} style={styles.logoImage} source={{uri: checkImageURL(companyLogo) ? companyLogo : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'}} />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image
            resizeMode={'contain'}
            source={icons.location}
            style={styles.locationImage} 
          />
          <Text style={styles.locationName}>{jobLocation}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company