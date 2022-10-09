import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { View, Text, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { ListItem, Avatar, Rating, AirbnbRating, SearchBar, Divider } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BottomDrawer from "react-native-bottom-drawer-view";
import { ClientsJobsCard } from "./assets/components/components";


const getInitials = (name) => {
    let initials = name.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase();
    return(initials)
};
//////////////////////////////////////////////////////////////////////////////////// Reviews Data ////////////////////////////////////////////////////////////////////////////////////////////////////

const Reviews= [
    {
        Avatar: "http://i.pravatar.cc/100?id=skater",
        Name: "Jorge Watson",
        Rating: 3,
        Comment:"Eum dicta fuisset phaedrum ei." ,
        Replies: [],
    },
    {
        Avatar: "http://i.pravatar.cc/100?id=skater",
        Name: "Peter Parker",
        Rating: 4,
        Comment:"EumAn summo saepe maiestatis sit, ei saepe lobortis senserit eos, Eum dicta fuisset phaedrum ei.EumAn summo saepe maiestatis sit, ei saepe lobortis senserit eos, Eum dicta fuisset phaedrum ei." ,
        Replies: [],
    },
    {
        Avatar: "http://i.pravatar.cc/100?id=skater",
        Name: "Jorge Watson",
        Rating: 3,
        Comment:"Eum dicta fuisset phaedrum ei." ,
        Replies: [],
    },
    {
        Avatar: "http://i.pravatar.cc/100?id=skater",
        Name: "Kathryn Cooper",
        Rating: 4,
        Comment:"An summo saepe maiestatis sit, ei saepe lobortis senserit eos." ,
        Replies: [],
    }

];



//////////////////////////////////////////////////////////////////////////////////// Reviews Data ////////////////////////////////////////////////////////////////////////////////////////////////////


//This is the trust button
const TrustButton = (props) => {
// import styling component
    const {colors} = useTheme();

    const TrustButton = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 16,
        marginHorizontal: 10,
        padding: 10,
        maxWidth: "30%",

        borderRadius: 7,
        borderWidth: 2,
        borderColor: "#007AFF",

        backgroundColor: colors.primaryButton,
    };

    const TrustButtonText = {
        color: "#FFF",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 13,
        lineHeight: 15,
        textTransform: "uppercase",
        padding: 2,
    };
    return(
        <TouchableOpacity style = {TrustButton} onPress ={props.onPress}>
            <Text style = {TrustButtonText}>Trust</Text>
        </TouchableOpacity>
    );
}
//This is the message button
const MessageButton = (props) =>{
// import styling component
    const {colors} = useTheme();

    const MessageButton = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 16,
        marginHorizontal: 10,
        padding: 10,

        borderRadius: 7,
        borderWidth: 2,
        borderColor: colors.border,

    };

    const MessageButtonText = {
        color : colors.text,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",

        fontSize: 13,
        lineHeight: 15,
        textTransform: "uppercase",
        padding: 2,
    };
    return(
        <TouchableOpacity style = {MessageButton} onPress={props.onPress}>
            <Text style = {MessageButtonText}>Message</Text>
            <MaterialCommunityIcons name = "send" size = {15} style = {{ color : colors.text}} color = { colors.text }/>
        </TouchableOpacity>
    );
};

function WorkerViewClientProfile({ navigation, route }){
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
let name = route.params.client.name;
let initials = getInitials(name);
    const [Available,setAvailable] = useState(route.params.client.available); //to show the "Read more & Less Line"

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
                            source = {{ uri: route.params.client.avatar }}
                            size = "xlarge"
                            rounded
                            overlayContainerStyle={{backgroundColor: "#a8a8a8"}}
                            activeOpacity={0.7}
                        />
                        <Text style = { profileName }>{ route.params.client.name }</Text>

                        <Text style = { profileLocation}>{ route.params.client.location }</Text>
                    </View>
                        <Text style = { memberDurationText }>A member since {route.params.client.time}</Text>
                    <View style = {{ flex:1, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <MessageButton/>
                        <TrustButton/>
                    </View>
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
                      User : route.params.client
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
                      User : route.params.client
                  }
                    ]}
                    renderItem={({item}) =>
                      <TouchableOpacity
                        onPress = {() => {
                            const client = item.User;
                            navigation.navigate("WorkerJobDetailsScreen", { item, client })}}
                        underlayColor = { colors.background }
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

export default React.memo(WorkerViewClientProfile);
