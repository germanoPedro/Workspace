import React, { useCallback } from 'react';
import { View, Text, Button, ScrollView, FlatList , Dimensions, TouchableOpacity } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { useNavigation, useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import { Details } from "../Profile/components/components";

import Meditation from '../../../../assets/Illustrations/Meditation.svg'
import Standard from '../../../../assets/Illustrations/Standard.svg'
import Premium from '../../../../assets/Illustrations/Premium.svg'

const PromotionPlans = {
  premium : {
      promotedNumber : 2
  }

};

const PremiumCard = ( props ) => {

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
    fontSize: 57,
    lineHeight: 65
  };
    // code block
      const premium = PromotionPlans.premium ;
    return (
      <TouchableOpacity
          onPress={() => navigation.navigate('PromotionJobListStackNavigator')}
      >
              <LinearGradient
                colors={['#FF5E5E', '#FF7CDA', '#DB00FF']}
                start = {{x: -0.17, y:0.3}}
                style = {CardsView}
              >
                    <Text style = {CardTitle}>Total Promoted jobs</Text>
                    <View style = {CardItems}>
                    <Text style = {planPriceTitle}>{premium.promotedNumber}</Text>
                        {/* Provide height and width props as per your need. */}
                        <Premium height={200} width={250} />
                    </View>

              </LinearGradient>
      </TouchableOpacity>
    )
}

const PromotionScreen = ({navigation}) => {
  ///////////////////////////// Style //////////////////////////////////////////
  const {colors} = useTheme();

    const cardView = {
        backgroundColor: colors.card,
        padding : 20,
        margin : 10,
        borderRadius: 16,
    }

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
    paddingHorizontal: 15,
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
                          <Text style = {subTitle}>Click the card to view all your promoted items</Text>
                      <PremiumCard />
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
                    expireDate : "27/01/2022",
                    JobDetails: {
                            title: "Photography",
                            skills: ["Arts"],
                            done: true,
                            budget: "R100",
                            details: "I need a photographer for my sisters wedding.",
                            dateSet: "20/12/2019", // dd/mm/yyyy
                            dateCompleted: "25/12/2019", // dd/mm/yyyy
                        },
                  },
                  {
                    type : "basic",
                    cost : 1.99,
                    buyDate : "20/07/2021",
                    expireDate : "27/07/2021",
                    JobDetails: {
                        title: "Clown",
                        skills: ["Funny", "Entertainment", "Events"],
                        done: false,
                        budget: "R1000",
                        details: "I am looking for a clown who will be coming to my brothers birthday party. And he needs to be verry funny and must have a red nose but it must not look like IT,yk the clown from the horror movie coz even though it wasn't scary it was just creepy coz if you think about it it's basically a pedo clown and that's weird ",
                        dateSet: "20/12/2019", // dd/mm/yyyy
                    }
                  }
                    ]}
                    renderItem={({item}) =>
                        <View style = {cardView}>
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
                        <View style = {{ flex : 1, paddingHorizontal : 20, }}>
                            <Details
                                title = {item.JobDetails.title}
                                skills = {item.JobDetails.skills}
                                details = {item.JobDetails.details}
                            />
                        </View>
                    </View>
                    }
            //The key extractor is specify a key property for each item
                    keyExtractor={(item, index) => index.toString()}
            />
    );
};

export default PromotionScreen;
