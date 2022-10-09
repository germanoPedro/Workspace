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

const Badge = (props) => {
        switch(props.badgeName) {
        case "jobBronze":
                return(
                    <BronzeJobs width = {150} height = {150}/>
                )
        // code block
        break;
        case "jobSilver":
                return(
                    <SilverJobs width = {150} height = {150}/>
                )
        // code block
        break;
        case "jobGold":
                return(
                    <GoldJobs width = {150} height = {150}/>
                )
        // code block
        break;
        case "jobDiamond":
                return(
                    <DiamondJobs width = {150} height = {150}/>
                )
        // code block
        break;
        case "trustBronze":
                return(
                    <BronzeTrust width = {150} height = {150}/>
                )
        // code block
        break;
        case "trustSilver":
                return(
                    <SilverTrust width = {150} height = {150}/>
                )
        // code block
        break;
        case "trustGold":
                return(
                    <GoldTrust width = {150} height = {150}/>
                )
        // code block
        break;
        case "trustDiamond":
                return(
                    <DiamondTrust width = {150} height = {150}/>
                )
        // code block
        break;
        case "verified":
                return(
                    <Verified width = {150} height = {150}/>
                )
        // code block
        break;
        case "link":
                return(
                    <Referal width = {150} height = {150}/>
                )
        // code block
        break;
        case "highQuality":
                return(
                    <HighRating width = {150} height = {150}/>
                )
        // code block
        break;
        default:
                return(
                    <NoBadge width = {150} height = {150}/>
                )
        // code block
        }
};

const BadgeDetailsScreen = ({navigation, route}) => {

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
  const descriptionView = {
    flexDirection : 'column',
    margin: 5,
      padding: 10,
  };

  const badgesItemsView = {
    flexDirection : 'row',
  };

  const sectionTitle = {
    color : colors.text,
    fontFamily : "Roboto",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 28,
    margin:4

  };

  const sectionText= {
    color : colors.text,
    fontFamily : "Roboto",
    fontSize: 17,
    lineHeight: 28,

  };

  const badge = {
    flexDirection: 'column',
    alignItems: 'center',

    margin : 4,
  };

  const badgeName = {

  };

  //Redeem Button styling
  const RedeemButton ={
    alignSelf: "center",
    backgroundColor: colors.grant,

    padding:10,
    width: "60%",
    alignItems: "center",
    borderRadius : 10
  }

  const RedeemButtonText = {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: colors.white

  }
  ///////////////////////////////////////////////Style////////////////////////////////////////////
    return (
      <ScrollView style={container}>
        <View style={profileContainer}>
        {route.params.owned?
                <Badge
                    badgeName = { route.params.name }
                />
            :
                <NoBadge width = {150} height = {150}/>
            }
            <Text style = {title}>{route.params.title}</Text>
        <Text style = {subTitle}>{route.params.type}</Text>
        </View>
        <View style={badgesContainer}>
          {route.params.owned?
            <TouchableOpacity style = {RedeemButton}>
                <Text style = { RedeemButtonText }>REDEEM!</Text>
            </TouchableOpacity>
           :
           null

          }

          <View style = {descriptionView}>
            <Text style = {sectionTitle}>Details</Text>
            <Text style = {sectionText}> {route.params.description}</Text>
          </View>
        </View>
      </ScrollView>
    );
};

export default BadgeDetailsScreen;
