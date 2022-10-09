import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import {Avatar,} from 'react-native-paper';


//Job Badges
import BronzeJobs from '../../../Worker/assets/Badges/bronzeJobs.svg'
import SilverJobs from '../../../Worker/assets/Badges/silverJobs.svg'
import GoldJobs from '../../../Worker/assets/Badges/goldJobs.svg'
import DiamondJobs from '../../../Worker/assets/Badges/diamondJobs.svg'

//Trust Badges
import BronzeTrust from '../../../Worker/assets/Badges/bronzeTrust.svg'
import SilverTrust from '../../../Worker/assets/Badges/silverTrust.svg'
import GoldTrust from '../../../Worker/assets/Badges/goldTrust.svg'
import DiamondTrust from '../../../Worker/assets/Badges/diamondTrust.svg'

//Trust Badges
import Verified from '../../../Worker/assets/Badges/verified.svg'
import HighRating from '../../../Worker/assets/Badges/highRating.svg'
import Referal from '../../../Worker/assets/Badges/referal.svg'
import NoBadge from '../../../Worker/assets/Badges/noBadge.svg'

const MyBadges = { Jobs : {
                      bronze : true,
                      silver : true,
                      gold : false,
                      diamond : false,
                    },
                   Trust : {
                      bronze : true,
                      silver : false,
                      gold : false,
                      diamond : false,

                   } ,

                   Other:{
                     verified: false,
                     link : true,
                     highQuality: true,
                   }
                 }

const BadgeDetails = { Jobs : {
                      bronze : {
                        name : "jobBronze",
                        title: "Getting Started!",
                        description: "This badge is achieved when you reach 10 successfull jobs on Thealoade. You can redeem this badge, fill out the form and you will receive a cash prize for your loyalty to Thealoade and the hard work you put in",
                        type : "Bronze",
                      },
                      silver : {
                        name : "jobSilver",
                        title: "Hustler!",
                        description: "This badge gets you 50c",
                        type : "Silver",
                      },
                      gold : {
                        name : "jobGold",
                        title: "Never Stop!",
                        description: "This badge gets you 50c",
                        type : "Gold",
                      },
                      diamond :{
                        name : "jobDiamond",
                        title: "ShowOff!",
                        description: "This badge is achieved when you reach 1,000 successfull jobs on Thealoade. You can redeem this badge, fill out the form and you will receive a cash prize for your loyalty to Thealoade and the hard work you put in",
                        type : "Diamond",
                      },
                    },
                   Trust : {
                      bronze : {
                        name : "trustBronze",
                        title: "I am Trustable!",
                        description: "This badge gets you 50c",
                        type : "Bronze",
                      },
                      silver : {
                        name : "trustSilver",
                        title: "Super Helper!",
                        description: "This badge gets you 50c",
                        type : "Silver",
                      },
                      gold : {
                        name : "trustGold",
                        title: "Celebrity",
                        description: "This badge gets you 50c",
                        type : "Gold",
                      },
                      diamond :{
                        name : "trustDiamond",
                        title: "Bob!",
                        description: "This badge gets you 50c",
                        type : "Diamond",
                      },

                   } ,

                   Other:{
                     verified: {
                        name : "verified",
                        title: "Verified",
                        description: "This badge gets you 50c",
                        type : "Special",
                      },
                     link :{
                        name : "link",
                        title: "Spread the Word!",
                        description: "This badge gets you 50c",
                        type : "Special",
                      },
                     highQuality: {
                        name : "highQuality",
                        title: "High Quality",
                        description: "This badge gets you 50c",
                        type : "Special",
                      },
                   }
                 }
const BadgesScreen = ({navigation}) => {
  ///////////////////////////////////////////////Style////////////////////////////////////////////
  const { colors } = useTheme();

  const container = {
    flex: 1,
    flexDirection : 'column',

  };
  const profileContainer = {
    flex: 1,
    flexDirection : 'column',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 15,
  };

  const badgesContainer = {
    flex: 2,
    flexDirection : 'column',
    margin: 15
  };

  const avatar = {
    margin : 5,
  };

  const title = {
    color : colors.text,
    fontFamily : "Roboto",
    fontSize: 30,
  };

  const subTitle = {
    color : colors.lightText,
    fontFamily : "Roboto",
    fontSize: 14,

  };


  //badgeItems
  //
  const badgesView = {
    flexDirection : 'column',
    margin: 10,
  };

  const badgesItemsView = {
    flexDirection : 'row',
  };

  const sectionTitle = {
    color : colors.text,
    fontFamily : "Roboto",
    fontSize: 20,

  };

  const badge = {
    flexDirection: 'column',
    alignItems: 'center',

    margin : 4,
  };

  const badgeName = {

  };


  ///////////////////////////////////////////////Style////////////////////////////////////////////
    return (
      <ScrollView style={container}>
        <View style={profileContainer}>
          <Avatar.Image
              source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
              }}
              size={100}
              style = {avatar}
          />
          <Text style = {title}>Johny Sins</Text>
          <Text style = {subTitle}>Beginner</Text>
        </View>
        <View style={badgesContainer}>

            {/* Jobs section */}

          <View style = {badgesView}>
            <Text style = {sectionTitle}>Job Badges</Text>
            <ScrollView horizontal style = {badgesItemsView}>
              <TouchableOpacity style = {badge}
                                onPress = {()=> {
                                  navigation.navigate('BadgesDetailsScreen', {
                                    name : BadgeDetails.Jobs.bronze.name,
                                    title: BadgeDetails.Jobs.bronze.title,
                                    description: BadgeDetails.Jobs.bronze.description,
                                    type: BadgeDetails.Jobs.bronze.type,
                                    owned: MyBadges.Jobs.bronze,
                                  })
                                }}>
                { MyBadges.Jobs.bronze ?

                  <BronzeJobs width = {150} height = {150}/>
                  :
                  <NoBadge width = {150} height = {150}/>
                }

                <Text style = {badgeName}> { BadgeDetails.Jobs.bronze.title }</Text>
              </TouchableOpacity>

              <TouchableOpacity style = {badge}
                                onPress = {()=> {
                                  navigation.navigate('BadgesDetailsScreen', {
                                    name : BadgeDetails.Jobs.silver.name,
                                    title: BadgeDetails.Jobs.silver.title,
                                    description: BadgeDetails.Jobs.silver.description,
                                    type: BadgeDetails.Jobs.silver.type,
                                    owned: MyBadges.Jobs.silver,
                                  })
                                }}>
                { MyBadges.Jobs.silver ?
                  <SilverJobs width = {150} height = {150}/>
                  :
                  <NoBadge width = {150} height = {150}/>
                }
                <Text style = {badgeName}>{ BadgeDetails.Jobs.silver.title }</Text>
              </TouchableOpacity>

              <TouchableOpacity style = {badge}
                                onPress = {()=> {
                                  navigation.navigate('BadgesDetailsScreen', {
                                    name : BadgeDetails.Jobs.gold.name,
                                    title: BadgeDetails.Jobs.gold.title,
                                    description: BadgeDetails.Jobs.gold.description,
                                    type: BadgeDetails.Jobs.gold.type,
                                    owned: MyBadges.Jobs.gold,
                                  })
                                }}>
                {MyBadges.Jobs.gold ?
                 <GoldJobs width = {150} height = {150}/>
                 :
                  <NoBadge width = {150} height = {150}/>
                }
                <Text style = {badgeName}>{BadgeDetails.Jobs.gold.title}</Text>
              </TouchableOpacity>

              <TouchableOpacity style = {badge}
                                onPress = {()=> {
                                  navigation.navigate('BadgesDetailsScreen', {
                                    name : BadgeDetails.Jobs.diamond.name,
                                    title: BadgeDetails.Jobs.diamond.title,
                                    description: BadgeDetails.Jobs.diamond.description,
                                    type: BadgeDetails.Jobs.diamond.type,
                                    owned: MyBadges.Jobs.diamond,
                                  })
                                }}>
                {MyBadges.Jobs.diamond ?
                  <DiamondJobs width = {150} height = {150}/>
                 :
                  <NoBadge width = {150} height = {150}/>
                }
                <Text style = {badgeName}>{BadgeDetails.Jobs.diamond.title} </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* Trust section */}

          <View style = {badgesView}>
            <Text style = {sectionTitle}>Trust Badges</Text>
            <View style = {badgesItemsView}>
              <ScrollView horizontal style = {badgesItemsView}>

              {/* Bronze badge*/}
              <TouchableOpacity style = {badge}
                                onPress = {()=> {
                                  navigation.navigate('BadgesDetailsScreen', {
                                    name : BadgeDetails.Trust.bronze.name,
                                    title: BadgeDetails.Trust.bronze.title,
                                    description: BadgeDetails.Trust.bronze.description,
                                    type: BadgeDetails.Trust.bronze.type,
                                    owned: MyBadges.Trust.bronze,
                                  })
                                }}>
                  {MyBadges.Trust.bronze ?
                    <BronzeTrust width = {150} height = {150}/>
                   :
                    <NoBadge width = {150} height = {150}/>
                  }
                <Text style = {badgeName}> {BadgeDetails.Trust.bronze.title}</Text>
                </TouchableOpacity>

              {/* Silver badge*/}
              <TouchableOpacity style = {badge}
                                onPress = {()=> {
                                  navigation.navigate('BadgesDetailsScreen', {
                                    name : BadgeDetails.Trust.silver.name,
                                    title: BadgeDetails.Trust.silver.title,
                                    description: BadgeDetails.Trust.silver.description,
                                    type: BadgeDetails.Trust.silver.type,
                                    owned: MyBadges.Trust.silver,
                                  })
                                }}>
                  {MyBadges.Trust.silver ?
                    <SilverTrust width = {150} height = {150}/>
                   :
                    <NoBadge width = {150} height = {150}/>
                  }
                  <Text style = {badgeName}>{BadgeDetails.Trust.silver.title}</Text>
                </TouchableOpacity>

              {/* Gold badge*/}
              <TouchableOpacity style = {badge}
                                onPress = {()=> {
                                  navigation.navigate('BadgesDetailsScreen', {
                                    name : BadgeDetails.Trust.gold.name,
                                    title: BadgeDetails.Trust.gold.title,
                                    description: BadgeDetails.Trust.gold.description,
                                    type: BadgeDetails.Trust.gold.type,
                                    owned: MyBadges.Trust.gold,
                                  })
                                }}>
                  {MyBadges.Trust.gold ?
                    <GoldTrust width = {150} height = {150}/>
                   :
                    <NoBadge width = {150} height = {150}/>
                  }
                  <Text style = {badgeName}>{BadgeDetails.Trust.gold.title}</Text>
                </TouchableOpacity>

              {/* Diamond badge*/}
              <TouchableOpacity style = {badge}
                                onPress = {()=> {
                                  navigation.navigate('BadgesDetailsScreen', {
                                    name : BadgeDetails.Trust.diamond.name,
                                    title: BadgeDetails.Trust.diamond.title,
                                    description: BadgeDetails.Trust.diamond.description,
                                    type: BadgeDetails.Trust.diamond.type,
                                    owned: MyBadges.Trust.diamond,
                                  })
                                }}>
                  {MyBadges.Trust.diamond?
                    <DiamondTrust width = {150} height = {150}/>
                   :
                    <NoBadge width = {150} height = {150}/>
                  }
                  <Text style = {badgeName}>{BadgeDetails.Trust.diamond.title}</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>

          {/* Others section */}

          <View style = {badgesView}>
            <Text style = {sectionTitle}>Others</Text>
            <View style = {badgesItemsView}>
              <ScrollView horizontal style = {badgesItemsView}>
                {/*Verified Badge*/}
              <TouchableOpacity style = {badge}
                                onPress = {()=> {
                                  navigation.navigate('BadgesDetailsScreen', {
                                    name : BadgeDetails.Other.verified.name,
                                    title: BadgeDetails.Other.verified.title,
                                    description: BadgeDetails.Other.verified.description,
                                    type: BadgeDetails.Other.verified.type,
                                    owned: MyBadges.Other.verified,
                                  })
                                }}>
                  {MyBadges.Other.verified ?
                    <Verified width = {150} height = {150}/>
                   :
                    <NoBadge width = {150} height = {150}/>
                  }
                  <Text style = {badgeName}>{BadgeDetails.Other.verified.title}</Text>
                </TouchableOpacity>

                {/*High for referal link*/}
              <TouchableOpacity style = {badge}
                                onPress = {()=> {
                                  navigation.navigate('BadgesDetailsScreen', {
                                    name : BadgeDetails.Other.link.name,
                                    title: BadgeDetails.Other.link.title,
                                    description: BadgeDetails.Other.link.description,
                                    type: BadgeDetails.Other.link.type,
                                    owned: MyBadges.Other.link,
                                  })
                                }}>
                  {MyBadges.Other.link ?
                    <Referal width = {150} height = {150}/>
                   :
                    <NoBadge width = {150} height = {150}/>
                  }
                  <Text style = {badgeName}>{BadgeDetails.Other.link.title}</Text>
                </TouchableOpacity>

                {/* High quality badge */}
              <TouchableOpacity style = {badge}
                                onPress = {()=> {
                                  navigation.navigate('BadgesDetailsScreen', {
                                    name : BadgeDetails.Other.highQuality.name,
                                    title: BadgeDetails.Other.highQuality.title,
                                    description: BadgeDetails.Other.highQuality.description,
                                    type: BadgeDetails.Other.highQuality.type,
                                    owned: MyBadges.Other.highQuality,
                                  })
                                }}>
                  {MyBadges.Other.highQuality ?
                    <HighRating width = {150} height = {150}/>
                   :
                    <NoBadge width = {150} height = {150}/>
                  }
                  <Text style = {badgeName}>{BadgeDetails.Other.highQuality.title}</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    );
};

export default BadgesScreen;
