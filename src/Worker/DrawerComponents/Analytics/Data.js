import { useTheme } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { View,TouchableOpacity, Text, Button, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { LineChart } from "react-native-chart-kit";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DataScreen = () => {
  ////////////////////////////Style//////////////////////////////////////
  const { colors } = useTheme();

  const filterText = [ 'Weekly', 'Monthly', 'Yearly' ];
  let [itemIndex, updateIndex] = useState(null);
  const [ income, updateIncome ] = useState(null);
  const [ bonus, updateBonus ] = useState(null);
  const [ totalIncome, updateTotalIncome ] = useState(null);
  const [ totalBonus, updateTotalBonus ] = useState(null);

  useEffect(()=>{
    updateIndex(1);

    //Income total = [weekly, monthly, yearly]
    updateIncome(103.34);

    //bonus = [weekly, monthly, yearly]
    updateBonus(13.34);

    //overall total income
    updateTotalIncome(309.29);

    //overall bonus
    updateTotalBonus(85.65);
  },[])

  //Restart the array index evertime reach the end
  const changeFilter = useCallback(()=>{
      updateIndex(++itemIndex %3 ) //increment value through cycles {1,2,3,1,2,3}
    console.log(itemIndex)
  },[itemIndex])


  //Views
  const container = {
    flex : 1,
    flexDirection: 'column',
    padding : 10,
  };

  const section = {
    flex : 1,
    flexDirection: 'column',
    margin: 10,
  };

  const profileStatsView = {
    flexDirection : 'row',
  };


  //Items

  const title = {
    color : colors.text,
    fontFamily : "Roboto",
    fontSize: 18,
  };

  const subTitle = {
    color : colors.lightText,
    fontFamily : "Roboto",
    fontSize: 12,

  };

  const cardButton = {
      flex: 1,
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      padding: 8,
      margin: 10,
      backgroundColor: colors.card,
      minHeight: 75,

      borderRadius: 12,
  };


  const cardColorButton = {
      flex: 1,
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      padding: 6.5,
      margin: 10,
      minHeight: 75,

      borderRadius: 12,

  };

  const cardView = {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 8,
  };

  const statsCardView = {
    flexDirection : 'row',
    margin : 5,
  }

  const statsCard = {
    flex : 1,
    flexDirection : 'column',
    alignItems: 'flex-start',
    padding: 15,
    backgroundColor: colors.card,
    borderRadius: 16,
    margin : 5,
  }

  const cash = {
    color : colors.grant,
    fontFamily : "Roboto",
    fontWeight: "bold",
    fontSize: 25,
    margin: 5,
  }


  const filterButton = {
    alignSelf: 'flex-end',
    width: "70%",
    backgroundColor: colors.card,
    padding:10,

    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 16,
  }
  ////////////////////////////Style//////////////////////////////////////
    return (
      <ScrollView style={container}>
        <View style = {section}>
          <Text style = { title }>Profile Statistics</Text>
          <Text style = { subTitle }>Statistics about my profile</Text>
          <View style = {profileStatsView}>
              <TouchableOpacity
                style = {{ flex: 1.5, }}
              >
                <LinearGradient
                  colors={['#2185F5', '#CD00BF']}
                  start = {{x: 0.9, y:0.2}}
                  style = { cardButton }
                >
                  <View style = {cardView}>
                    <Text style = {{color: colors.white}}  >{ "10" } </Text>
                    <Text style = {{color:colors.white}}> Jobs </Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style = { cardButton }>
                <View style = {cardView}>
                  <Text style = {{color:'#2185F5'}} >{ "15" } </Text>
                    <Text style = { subTitle }> Trusters </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style = { cardButton }>
                <View style = { cardView }>
                  <Text style = {{color : colors.warning}} >{ "0" } </Text>
                    <Text style = { subTitle }> Reports </Text>
                </View>
              </TouchableOpacity>
          </View>

        </View>
        <View style = {section}>
            <Text style = {title}>Monthly income chart</Text>
            <Text style = { subTitle }>Chart showing my income for every month</Text>
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
                backgroundGradientFrom: colors.background,
                backgroundGradientTo: colors.background,
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(33, 133, 245, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
                alignSelf: 'flex-start'
              }}
            />
        </View>

        {/*Stats income section*/}
        <View style = {section}>
          <View style = {{ flexDirection: 'row' }}>
            <View style = {{ flexDirection: 'column' }}>
              <Text style = {title}>My Stats</Text>
              <Text style = { subTitle }>Statistics about my income</Text>
            </View>
            <View style = {{ flex: 1, justifyContent: 'center', padding: 5,}}>
              <TouchableOpacity onPress ={changeFilter} style = { filterButton }><Text>{filterText[itemIndex]}</Text></TouchableOpacity>
            </View>
          </View>

          <View style = {statsCardView}>
            <View style = {statsCard}>
              <MaterialCommunityIcons name = "chart-timeline-variant" size = {20} style = {{ color : colors.lightText}} color = { colors.lightText }/>
              <Text style = {cash}>${income}</Text>
              <Text style = { subTitle }> Income</Text>
            </View>

            <View style = {statsCard}>
              <MaterialCommunityIcons name = "cash-usd-outline" size = {20} style = {{ color : colors.lightText }} color = { colors.lightText }/>
              <Text style = {cash}>${bonus}</Text>
              <Text style = { subTitle }>Bonus</Text>
            </View>
          </View>
        </View>

        {/*Stats income section*/}
        <View style = {section}>
          <View style = {{ flexDirection: 'row' }}>
            <View style = {{ flexDirection: 'column' }}>
              <Text style = {title}>Total Income Stats</Text>
              <Text style = { subTitle }>Statistics about my total income with Thealoade</Text>
            </View>
          </View>

          <View style = {statsCardView}>
            <View style = {statsCard}>
              <MaterialCommunityIcons name = "chart-timeline-variant" size = {20} style = {{ color : colors.lightText}} color = { colors.lightText }/>
              <Text style = {cash}>${totalIncome}</Text>
              <Text style = { subTitle }>Total Income</Text>
            </View>

            <View style = {statsCard}>
              <MaterialCommunityIcons name = "cash-usd-outline" size = {20} style = {{ color : colors.lightText }} color = { colors.lightText }/>
              <Text style = {cash}>${totalBonus}</Text>
              <Text style = { subTitle }>Total Bonus</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    );
};

export default DataScreen;

