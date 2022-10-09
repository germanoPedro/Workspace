import React from 'react';
import { View, Text, Button, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { useTheme } from '@react-navigation/native';
import {JobCostCard} from "../../Schedule/ScheduleComponents";
import { LinearGradient } from 'expo-linear-gradient';

import Badges from '../../../../assets/Illustrations/Badges.svg'

const AnalyticsScreen = ({navigation}) => {
  ///////////////////////////// Style //////////////////////////////////////////
  const {colors} = useTheme();

  const title = {
    color : colors.lightText,
    paddingHorizontal : 10,
    paddingVertical : 5,
    alignSelf: "flex-start",

    //Text style
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 25
  };

  //Flat list views
  const jobListView = {
    padding : 10
  }

  const listHeader = {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center'
  };


  //Badges Section
  const BadgesView = {
    borderRadius: 16,
    width: "100%",
    padding : 10,
    minHeight: 150,

  };

  const BadgeTitle= {
    color : colors.white,
    paddingHorizontal : 10,
    paddingVertical : 5,
    alignSelf: "flex-start",

    //Text style
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 25

  };

  const BadgeItems = {
    flexDirection: 'row',

  };

  const BadgeText = {
    color : colors.white,
    maxWidth : "40%",
    fontSize : 13,
  };

  const ShadowView = {
        width: "100%",
        borderRadius: 16,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2,

        marginBottom: 5,
        marginTop: 5,
        marginHorizontal: 5,
  };
  ///////////////////////////// Style //////////////////////////////////////////

    return (

          <FlatList
                showsVerticalScrollIndicator={false}
                style = {jobListView}
                ListHeaderComponentStyle = { listHeader }
                ListHeaderComponent = {
                  <>
                    <View>
                      <Text style = {title}>Monthly income chart</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DataScreen')}
                    >
                      <LineChart
                        data={{
                          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct" , "Nov", "Dec"],
                          datasets: [
                            {
                              data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                              ]
                            }
                          ]
                        }}
                        width={Dimensions.get("window").width - 20} // from react-native
                        height={220}
                        yAxisLabel="$"
                        yAxisSuffix=""
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                          backgroundColor: "#FFF",
                          backgroundGradientFrom: "#2185F5",
                          backgroundGradientTo: "#CD00BF",
                          decimalPlaces: 2, // optional, defaults to 2dp
                          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                          style: {
                            borderRadius: 16,
                          },
                          propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#FFF"
                          }
                        }}
                        bezier
                        style={{
                          marginVertical: 8,
                          borderRadius: 16,
                          padding: 10,
                        }}
                      />
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style = {ShadowView}
                        onPress={() => navigation.navigate('BadgesScreen')}
                    >
                      <LinearGradient
                        colors={['#00FFFF', '#3300FF']}
                        start = {{x: 0.9, y:0.2}}
                        style = {BadgesView}
                      >
                            <Text style = {BadgeTitle}>Badges</Text>
                            <View style = {BadgeItems}>
                              <Text style = {BadgeText}>Badge system is designed to reward all the hardworkers and loyal users of Thealoade.Keep working hard:)</Text>
                                {/* Provide height and width props as per your need. */}
                                <Badges height={120} width={250} />
                            </View>

                      </LinearGradient>
                    </TouchableOpacity>
                      <Text style = {title}>My Completed Jobs</Text>

                  </>
              }
              data = {[
                  {
                      title: "Photography",
                      completed: false,
                      rating: null,
                      skills: [ "Arts", "Proffessional" ],
                      details: "I need someone really good at photography to take pics of me for my linked in account",
                      promoted: true,
                      dateSet : "20/12/2019",
                      replies: 31,
                      budget: "R100,000",
                        User : {
                            name: 'Justin Botha',
                            time: "2021/02/05",
                            location: "Krugersdorp",
                            description: "I will sing happy birthday to you out of my nostrils",
                            avatar: "data:image/png;base64,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",
                            available: false,
                            travelDistance: "1000km",
                            trusters: 20000,
                            reporters: 0,
                            totalJobs: 2120,
                            skills: [ { key: "Audio"},
                                    {key:"Arts"},
                                    { key: "skilles"}
                                  ]
                        }


                  },
                  {
                      title: "Build me a website",
                      completed: false,
                      rating: null,
                      skills: [ "Computers and IT", "Web Dev","Web design" ],
                      details: "I need someone really good at web developement to make me a website to advertise my new sneaker designs",
                      promoted: false,
                      dateSet : "20/02/2020",
                      budget: "R100,000",
                      replies: 2,
                      User : {
                          name: 'Justin Botha',
                          time: "2021/02/05",
                          location: "Krugersdorp",
                          description: "I will sing happy birthday to you out of my nostrils",
                          avatar: "data:image/png;base64,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",
                          available: false,
                          travelDistance: "1000km",
                          trusters: 20000,
                          reporters: 0,
                          totalJobs: 2120,
                          skills: [ { key: "Audio"},
                                  {key:"Arts"},
                                  { key: "skilles"}
                                ]
                      }

                  }
                    ]}
                    renderItem={({item}) =>
                      <TouchableOpacity
                        underlayColor = { colors.background }
                        onPress={() => navigation.navigate('AnalyticsDetailScreen', { item })}
                     >

                      <JobCostCard
                          item = {item}
                      />
                      </TouchableOpacity>
                    }
            //The key extractor is specify a key property for each item
                    keyExtractor={(item, index) => index.toString()}
            />
    );
};

export default AnalyticsScreen;
