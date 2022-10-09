
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { View, Text, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { ListItem, Avatar, Rating, AirbnbRating, SearchBar, Divider } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BottomDrawer from "react-native-bottom-drawer-view";
import { ClientsJobsCard } from "./components/components";


const getInitials = (name) => {
    let initials = name.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase();
    return(initials)
};
//////////////////////////////////////////////////////////////////////////////////// Reviews Data ////////////////////////////////////////////////////////////////////////////////////////////////////

const client = {
    name: "Christopher Moon",
    time: "2021/06/01",
    location: "Los Angeles, CA",
    description:"This is the description lorem s, I want someone who will be able to assist me with my taxas because I have to submit it next week",
    avatar: "http://i.pravatar.cc/100?id=skater",
    available: true,
    travelDistance: "10km",
    trusters: 1,
    reporters: 20,
    totalJobs: 304,
    skills: []
}

//////////////////////////////////////////////////////////////////////////////////// Reviews Data ////////////////////////////////////////////////////////////////////////////////////////////////////



function ClientProfile({ navigation, route }){
// import styling component

    const { colors } = useTheme();

/////////////////////////////////////////////////////////// Styling components ////////////////////////////////////////////////////////
   const view = {
        flex: 5,
        flexDirection: "column",
        height:"100%",

    };

    //profile details
    const profileDetails = {
        flex: 2,
        alignItems: "center",
        margin: 10,
    };

    //Profile name
    const profileName= {
        fontSize: 30,
        color: colors.text,
    };


    //Profile location
    const profileLocation = {
        fontFamily: "Roboto",
        textTransform: "uppercase",
        letterSpacing: 0.04,
        lineHeight: 15,
        margin: 5,
        padding: 3,
        marginBottom: 10,
        fontSize: 15,
        color: colors.lightText,
    };
    //A member Since
    const memberDurationText = {
        padding: 5,
        margin: 5,
        color: colors.lightText,
    };

    const JobPostTitleView = {
        alignItems: "center",
        justifyContent: "center",

        borderBottomWidth: 2,
        borderBottomColor: colors.border,
    };

    const JobPostTitle = {
        fontFamily: "Roboto",
        letterSpacing: 0.04,
        fontWeight: "bold",
        lineHeight: 15,
        marginTop: 10,
        padding : 15,
        fontSize: 15,
        color: colors.Text,

    };


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Get the initials for if the photo is not present
let name = client.name;
let initials = getInitials(name);
const [Available,setAvailable] = useState(client.available); //to show the "Read more & Less Line"

//FlatList Optimization, use Item layout so that flatlist doesn"t neet to calculate item layout
const ITEM_HEIGHT = 136;
const getItemLayout = useCallback(
    (data, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index
    }),
    []
);


    return(
          {/*Making use of flat list because it is more efficient in rendering large amounts of data*/},
            {/* The header component is used for performance reasons */},
          <FlatList
              style = {view}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent = {
                  <>
                    <View
                    style = { profileDetails }
                    >
                        <Avatar
                            title = {initials}
                            source = {{ uri: client.avatar }}
                            size = "xlarge"
                            rounded
                            overlayContainerStyle={{backgroundColor: "#a8a8a8"}}
                            activeOpacity={0.7}
                        />
                        <Text style = { profileName }>{ client.name }</Text>

                        <Text style = { profileLocation}>{ client.location }</Text>
                    </View>
                        <Text style = { memberDurationText }>A member since {client.time}</Text>
                    <View style = { JobPostTitleView }>
                        <Text style = {JobPostTitle}>Job Request</Text>
                    </View>
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
                        User:{
                            name: 'Chris Jackson',
                            time: "2021/02/05",
                            location: "North Pretoria",
                            description: "I want somone to help me design and set up my personal protfolio website. I need it to be done with profisedf aisoo aodf sjdf oapRKM KSDKF KEKSDKF ifsndifjwemr poaeoj wkefoo woe woejr mmvorw mfelpk peofw peomfjdn ejwfj j",
                            avatar: "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
                            available: true,
                            travelDistance: "5km",
                            trusters: 341,
                            reporters: 1,
                            totalJobs: 56,
                            skills: [ {key: "Computer"},
                                    {key: "Technology"} ]
                        },
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
                        User:{
                            name: 'Chris Jackson',
                            time: "2021/02/05",
                            location: "North Pretoria",
                            description: "I want somone to help me design and set up my personal protfolio website. I need it to be done with profisedf aisoo aodf sjdf oapRKM KSDKF KEKSDKF ifsndifjwemr poaeoj wkefoo woe woejr mmvorw mfelpk peofw peomfjdn ejwfj j",
                            avatar: "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
                            available: true,
                            travelDistance: "5km",
                            trusters: 341,
                            reporters: 1,
                            totalJobs: 56,
                            skills: [ {key: "Computer"},
                                    {key: "Technology"} ]
                        },
                  }
                    ]}
                    renderItem={({item}) =>
                      <TouchableOpacity
                        onPress = { ()=>console.log("job") }
                        underlayColor = { colors.background }
                        style = {{ borderBottomWidth: 2, borderBottomColor: colors.border, margin : 7 }}
                     >
                        <ClientsJobsCard
                            Data = {item}
                            promoted = {item.promoted}
                        />
                      </TouchableOpacity>
                    }
            //The key extractor is specify a key property for each item
                    keyExtractor={(item, index) => index.toString()}
            />
    )
}

export default React.memo(ClientProfile);
