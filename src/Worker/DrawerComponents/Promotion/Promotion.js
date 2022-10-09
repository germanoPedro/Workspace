import React, { useCallback } from 'react';
import { View, Text, Button, ScrollView, FlatList , Dimensions, TouchableOpacity } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { useNavigation, useTheme } from '@react-navigation/native';
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
    cost : 1.99,
    duration : 30,
    promotion : 0.1,
  },
  standard : {
    cost : 20.99,
    duration : 30,
    promotion : 0.4,
  },
  premium : {
    cost : 229.99,
    duration : 15,
    promotion : 1,
  }

};

const Card = ( props ) => {

  const navigation = useNavigation();

  const {colors} = useTheme();
  //Flat list views
  const jobListView = {
    padding : 10
  }

  const listHeader = {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center'
  };


  //Cards Section
  const CardsView = {
    flex: 1,
    borderRadius: 16,
    padding : 10,
    minHeight: 150,
    margin : 10,
    overflow:'hidden'

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
    maxWidth : "40%",
    fontSize : 13,
  };

  const planPriceTitle = {
    color : colors.white,
    paddingHorizontal : 10,
    paddingVertical : 5,
    alignSelf: "flex-start",

    //Text style
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 37,
    lineHeight: 45
  };

  switch(props.plan.type) {
  case "basic":
      const basic = PromotionPlans.basic;
    return (
      <TouchableOpacity
          onPress={() => navigation.navigate('PromotionOptionsScreen')}
      >
              <LinearGradient
                colors={['#8ACDF2', '#C0E7F2']}
                start = {{x: 0.014, y:0.3}}
                style = {CardsView}
              >
                    <Text style = {CardTitle}>My plan</Text>
                    <Text style = {planPriceTitle}>${basic.cost}</Text>
                    <Text style = {CardTitle}>Change plan</Text>
                    <View style = {CardItems}>
                    <Text style = {CardTitle}>{props.plan.type}</Text>
                        {/* Provide height and width props as per your need. */}
                        <Meditation height={200} width={250} />
                    </View>
                    <Text style = {CardText}>Expire : {props.plan.expiryDate}</Text>

              </LinearGradient>
      </TouchableOpacity>
    )
    break;
  case "standard":
    // code block
      const standard = PromotionPlans.standard ;
    return (
      <TouchableOpacity
          onPress={() => navigation.navigate('PromotionOptionsScreen')}
      >
              <LinearGradient
                colors={['#00FFFF', '#3300FF']}
                start = {{x: 0.9, y:0.2}}
                style = {CardsView}
              >
                    <Text style = {CardTitle}>My plan</Text>
                    <Text style = {planPriceTitle}>${standard.cost}</Text>
                    <Text style = {CardTitle}>Change plan</Text>
                    <View style = {CardItems}>
                    <Text style = {CardTitle}>{props.plan.type}</Text>
                        {/* Provide height and width props as per your need. */}
                        <Standard height={200} width={250} />
                    </View>
                    <Text style = {CardText}>Expire : {props.plan.expiryDate}</Text>

              </LinearGradient>
      </TouchableOpacity>
    )
    break;
  case "premium":
    // code block
      const premium = PromotionPlans.premium ;
    return (
      <TouchableOpacity
          onPress={() => navigation.navigate('PromotionOptionsScreen')}
      >
              <LinearGradient
                colors={['#FF5E5E', '#FF7CDA', '#DB00FF']}
                start = {{x: -0.17, y:0.3}}
                style = {CardsView}
              >
                    <Text style = {CardTitle}>My plan</Text>
                    <Text style = {planPriceTitle}>${premium.cost}</Text>
                    <Text style = {CardTitle}>Change plan</Text>
                    <View style = {CardItems}>
                    <Text style = {CardTitle}>{props.plan.type}</Text>
                        {/* Provide height and width props as per your need. */}
                        <Premium height={200} width={250} />
                    </View>
                    <Text style = {CardText}>Expire : {props.plan.expiryDate}</Text>

              </LinearGradient>
      </TouchableOpacity>
    )
    break;
  default:
    // code block
}
}

const PromotionScreen = ({navigation}) => {
  ///////////////////////////// Style //////////////////////////////////////////
  const {colors} = useTheme();

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

          <FlatList
                showsVerticalScrollIndicator={false}
                ListHeaderComponent = {
                  <>
                    <View>
                          <Text style = {title}>My Plan</Text>
                          <Text style = {subTitle}>Click the card to change your plan</Text>
                      <Card plan = {myPlan}/>
                          <Text style = {title}>Payment history</Text>
                          <Text style = {subTitle}>Bellow is your purchase history</Text>
                    </View>
                  </>
              }
              data = {[
                  {
                    type : "premium",
                    cost : 229.99,
                    buyDate : "27/12/2021",
                    expireDate : "27/01/2022"
                  },
                  {
                    type : "basic",
                    cost : 1.99,
                    buyDate : "20/07/2021",
                    expireDate : "27/07/2021"
                  }
                    ]}
                    renderItem={({item}) =>
                      <View
                        style = {dataHistoryView}
                     >
                        <View style = { detailsView }>
                          <Text style = {title}> {item.type}</Text>
                          <Text style = {subTitle}>Expire date : {item.expireDate}</Text>

                        </View>
                        <View style = {priceDetails}>
                          <Text style = {priceTitle}> ${item.cost}</Text>
                          <Text style = {priceSubTitle}>{item.expireDate}</Text>
                        </View>
                      </View>
                    }
            //The key extractor is specify a key property for each item
                    keyExtractor={(item, index) => index.toString()}
            />
    );
};

export default PromotionScreen;
