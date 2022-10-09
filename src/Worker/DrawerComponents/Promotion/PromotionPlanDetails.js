import React, { useCallback } from 'react';
import { View, Text, Button, ScrollView, FlatList , Dimensions, TouchableOpacity } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { useNavigation, useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import Meditation from '../../../../assets/Illustrations/Meditation.svg'
import Standard from '../../../../assets/Illustrations/Standard.svg'
import Premium from '../../../../assets/Illustrations/Premium.svg'



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
    fontSize : 13,
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

  switch(props.plan.type) {
  case "basic":
      const basic = PromotionPlans.basic;
    return (
      <View
      >
              <LinearGradient
                colors={['#8ACDF2', '#C0E7F2']}
                start = {{x: 0.014, y:0.3}}
                style = {CardsView}
              >
                      <View style = {{flexDirection : 'row'}}>
                        <View style = {{ flex :2,  maxWidth: 130 }}>
                          <Text style = {CardTitle}>{props.plan.type}</Text>
                          <Text style = {planPriceTitle}>${props.plan.cost}</Text>
                          <Text style = {CardText}>Duration : {props.plan.duration} days</Text>
                          <Text style = {CardText}>{props.plan.description} </Text>
                        </View>
                        <View style = {{flex :1 }}>
                            <Meditation height={200} width={250} />
                        </View>
                      </View>
              </LinearGradient>
      </View>
    )
    break;
  case "standard":
    // code block
      const standard = PromotionPlans.standard ;
    return (
      <View
      >
              <LinearGradient
                colors={['#00FFFF', '#3300FF']}
                start = {{x: 0.9, y:0.2}}
                style = {CardsView}
              >
                      <View style = {{flexDirection : 'row'}}>
                        <View style = {{ flex :2,  maxWidth: 130 }}>
                          <Text style = {CardTitle}>{props.plan.type}</Text>
                          <Text style = {planPriceTitle}>${props.plan.cost}</Text>
                          <Text style = {CardText}>Duration : {props.plan.duration} days</Text>
                          <Text style = {CardText}>{props.plan.description} </Text>
                        </View>
                        <View style = {{flex :1 }}>
                            <Standard height={200} width={250} />
                        </View>
                      </View>
              </LinearGradient>
      </View>
    )
    break;
  case "premium":
    // code block
      const premium = PromotionPlans.premium ;
    return (
      <View
      >
              <LinearGradient
                colors={['#FF5E5E', '#FF7CDA', '#DB00FF']}
                start = {{x: -0.17, y:0.3}}
                style = {CardsView}
              >
                      <View style = {{flexDirection : 'row'}}>
                        <View style = {{ flex :2,  maxWidth: 130 }}>
                          <Text style = {CardTitle}>{props.plan.type}</Text>
                          <Text style = {planPriceTitle}>${props.plan.cost}</Text>
                          <Text style = {CardText}>Duration : {props.plan.duration} days</Text>
                          <Text style = {CardText}>{props.plan.description} </Text>
                        </View>
                        <View style = {{flex :1 }}>
                            <Premium height={200} width={250} />
                        </View>
                      </View>
              </LinearGradient>
      </View>
    )
    break;
  default:
          return(
              null
          )
    // code block
}
}

const PromotionPlanDetailsScreen = ({navigation,route}) => {
    const myPlan = route.params.plan;
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

  const buyButton = {
    backgroundColor: colors.grant,
    padding : 20,
    margin: 5,
    borderRadius: 12,
    maxWidth : "60%",
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center'
  };

  const buttonText = {
    color : colors.white,
    fontWeight: "bold",
    textTransform: 'uppercase',
  };

  const detailsView = {
    backgroundColor: colors.card,
    flex : 1,
    padding : 10,
    margin: 5,

    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 12,
  };

  const itemDetails = {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding : 12,
  }

  const detailsText = {
    padding : 4,

    color : colors.text,
    fontFamily : "Roboto",
    fontStyle : "normal",
    lineHeight: 27,
    fontSize: 27,

  }

  const descriptionText = {
    padding : 4,

    color : colors.text,
    fontFamily : "Roboto",
    fontStyle : "normal",
    lineHeight: 27,
    fontSize: 17,

  }

  const detailsTitleText = {
    padding : 4,

    color : colors.lightText,
    paddingTop: 15,

    //Text style
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 25,
    textTransform : "capitalize"
  }
  ///////////////////////////// Style //////////////////////////////////////////

    return (
        <ScrollView>
          <Text style = {title}>Plan details</Text>
          <Text style = {subTitle}>The card below is for {myPlan.type} plan type</Text>
          <Card plan = {myPlan}/>

          {/*Buy Button*/}
          <TouchableOpacity style = { buyButton }>
            <Text style = {buttonText}>Buy {myPlan.type} Plan</Text>
          </TouchableOpacity>


          <Text style = {title}>Plan Details</Text>
          <Text style = {subTitle}>Bellow is information about this the {myPlan.type} promtion plan</Text>

          {/*Details*/}
          <View style = {detailsView}>
            <View style = {{flex: 1,flexDirection:'row'}}>
              {/*Cost section*/}
              <View style = {itemDetails}>
                <Text style = {detailsTitleText}>Cost</Text>
                <Text style = {detailsText}>${myPlan.cost}</Text>
              </View>

              {/*Duration section*/}
              <View style = {itemDetails}>
                <Text style = {detailsTitleText}>Duration</Text>
                <Text style = {detailsText}>{myPlan.duration} Days</Text>
              </View>
            </View>

            {/*Description section*/}
            <View style = {itemDetails}>
              <Text style = {detailsTitleText}>Description</Text>
              <Text style = {descriptionText}>{myPlan.longDescription} </Text>
            </View>
          </View>
        </ScrollView>
    );
};

export default PromotionPlanDetailsScreen;
