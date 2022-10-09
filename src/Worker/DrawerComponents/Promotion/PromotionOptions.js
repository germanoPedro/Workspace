import React from 'react';
import { View, Text, Button, ScrollView, FlatList , Dimensions, TouchableOpacity } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import Meditation from '../../../../assets/Illustrations/Meditation.svg'
import Standard from '../../../../assets/Illustrations/Standard.svg'
import Premium from '../../../../assets/Illustrations/Premium.svg'

const myPlan = {
  type : "premium",
  expiryDate : "27/12/2019"
};


const PromotionPlans = {
  basic : {
    type : "basic",
    cost : 1.99,
    duration : 30,
    promotion : 0.1,
    description : "Go up the pecking order by 10 %",
    longDescription : "This plan stays active for 7  Days. With this plan you will move up 10% from your current position in your group / category. Example : There are 100 people in a category you are in , eg Web development and you are number 100 you activate this plan, you will move up 10 places (because that is 10% of 100), so you will now be number 90 in your group.",
  },
  standard : {
    type : "standard",
    cost : 20.99,
    duration : 30,
    promotion : 0.4,
    longDescription : "Go up the pecking order by 10 %",
    description : "Go up the pecking order by 40 %"
  },
  premium : {
    type : "premium",
    cost : 229.99,
    duration : 15,
    promotion : 1,
    longDescription : "Go up the pecking order by 10 %",
    description : "Go RIGHT TO THE TOP ! "
  }

};

const PromotionOptionsScreen= ({navigation}) => {
  ///////////////////////////// Style //////////////////////////////////////////
  const {colors} = useTheme();

  //Cards Section
  const CardsView = {
    flex: 1,
    borderRadius: 16,
    padding : 10,
    minHeight: 150,
    margin : 10,
    overflow:'hidden',

    alignItems: "center"

  };

  const CardTitle= {
    color : colors.white,
    paddingHorizontal : 10,
    paddingVertical : 5,
    alignSelf: "flex-start",

    //Text style
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 25,
    textTransform: "capitalize"

  };

  const CardItems = {
    flexDirection: 'row',

  };

  const CardText = {
    color : colors.white,
    fontSize : 14,
    lineHeight: 20,

    marginTop: 10,

  };

  const planPriceTitle = {
    color : colors.white,
    padding: 5,
    alignSelf: "flex-start",

    //Text style
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 45
  };
  const title = {
    color : colors.text,
    paddingHorizontal : 10,
    paddingTop: 5,
    alignSelf: "flex-start",

    //Text style
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 25,
    textTransform : "capitalize"
  };
  const subTitle = {
    color : colors.lightText,
    paddingHorizontal: 10,
    alignSelf: "flex-start",

    //Text style
    fontFamily: "Roboto",
    fontSize: 13,
    lineHeight: 25,
  };


  //payment history section
  const dataHistoryView = {
    flex : 1,
    flexDirection : "row",
    padding : 10,
    margin : 10,

    backgroundColor : colors.card,

    borderRadius : 12,

  };

  const detailsView = {
    flex : 1,
    alignSelf: 'flex-start',
    flexDirection: 'column'
  };

  const priceDetails = {
    flex :1,
    justifyContent: 'center',
    flexDirection: 'column',

  };

  const priceTitle = {
    color : colors.text,
    paddingHorizontal : 10,
    paddingTop: 5,
    alignSelf: "flex-end",

    //Text style
    fontFamily: "Roboto",
    fontSize: 27,
    lineHeight: 35,
    textTransform : "capitalize"

  };

  const priceSubTitle = {
    color : colors.lightText,
    paddingHorizontal: 10,
    alignSelf: "flex-end",

    //Text style
    fontFamily: "Roboto",
    fontSize: 13,
    lineHeight: 25,
  };
  ///////////////////////////// Style //////////////////////////////////////////

    return (
        <ScrollView>
            <TouchableOpacity
              onPress={() => {
                const plan =  PromotionPlans.basic;
                navigation.navigate('PromotionPlanDetailsScreen',{plan} )}}
            >
                    <LinearGradient
                        colors={['#8ACDF2', '#C0E7F2']}
                        start = {{x: 0.014, y:0.3}}
                        style = {CardsView}
                    >
                      <View style = {{flexDirection : 'row'}}>
                        <View style = {{ flex :2,  maxWidth: 130 }}>
                          <Text style = {CardTitle}>{PromotionPlans.basic.type}</Text>
                          <Text style = {planPriceTitle}>${PromotionPlans.basic.cost}</Text>
                          <Text style = {CardText}>Duration : {PromotionPlans.basic.duration} days</Text>
                          <Text style = {CardText}>{PromotionPlans.basic.description} </Text>
                        </View>
                        <View style = {{flex :1 }}>
                            <Meditation height={200} width={250} />
                        </View>
                      </View>

                    </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                const plan =  PromotionPlans.standard;
                navigation.navigate('PromotionPlanDetailsScreen',{plan} )}}
            >
                    <LinearGradient
                        colors={['#00FFFF', '#3300FF']}
                        start = {{x: 0.9, y:0.2}}
                        style = {CardsView}
                    >

                      <View style = {{flexDirection : 'row'}}>
                        <View style = {{ flex :2,  maxWidth: 135 }}>
                          <Text style = {CardTitle}>{PromotionPlans.standard.type}</Text>
                          <Text style = {planPriceTitle}>${PromotionPlans.standard.cost}</Text>
                          <Text style = {CardText}>Duration : {PromotionPlans.standard.duration} days</Text>
                          <Text style = {CardText}>{PromotionPlans.standard.description} </Text>
                        </View>
                        <View style = {{flex :1 }}>
                            <Standard height={200} width={250} />
                        </View>
                      </View>

                    </LinearGradient>
            </TouchableOpacity>

          {/*Premium card*/}
            <TouchableOpacity
              onPress={() => {
                const plan =  PromotionPlans.premium;
                navigation.navigate('PromotionPlanDetailsScreen',{plan} )}}
            >
                    <LinearGradient
                        colors={['#FF5E5E', '#FF7CDA', '#DB00FF']}
                        start = {{x: -0.17, y:0.3}}
                        style = {CardsView}
                    >

                      <View style = {{flexDirection : 'row'}}>
                        <View style = {{ flex :2,  maxWidth: 135 }}>
                          <Text style = {CardTitle}>{PromotionPlans.premium.type}</Text>
                          <Text style = {planPriceTitle}>${PromotionPlans.premium.cost}</Text>
                          <Text style = {CardText}>Duration : {PromotionPlans.premium.duration} days</Text>
                          <Text style = {CardText}>{PromotionPlans.premium.description} </Text>
                        </View>
                        <View style = {{flex :1 }}>
                            <Premium height={200} width={250} />
                        </View>
                      </View>

                    </LinearGradient>
            </TouchableOpacity>

        </ScrollView>
    )
};

export default PromotionOptionsScreen;
