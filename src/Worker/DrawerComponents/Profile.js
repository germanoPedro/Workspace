import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { ListItem, Avatar, Rating, AirbnbRating, SearchBar, Divider } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BottomDrawer from 'react-native-bottom-drawer-view';


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


//This is the message button
const ReviewButton= (props) =>{
// import styling component
    const {colors} = useTheme();

    const ReviewButton = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 16,
        marginHorizontal: 10,
        padding: 15,
        maxWidth: 200,

        borderRadius: 10,
        backgroundColor: colors.primaryButton,
    };

    const ReviewButtonText = {
        color : "#FFF",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",

        fontSize: 13,
        lineHeight: 15,
        padding: 2,
    };
    return(
        <TouchableOpacity style = {ReviewButton} onPress={props.onPress}>
            <Text style = {ReviewButtonText}>Make A Review</Text>
            <MaterialCommunityIcons name = "send" size = {15} style = {{ color : "#FFF"}} color = { colors.text }/>
        </TouchableOpacity>
    );
};
// This is the component for the job completion, it will only show 2 lines and a read more/ read less for the user to expand and shrink text
const Details = (props) => {
    const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [lengthMore,setLengthMore] = useState(false); //to show the "Read more & Less Line"
    const toggleNumberOfLines = () => { //To toggle the show text or hide it
        setTextShown(!textShown);
    }

    const onTextLayout = useCallback(e =>{
        setLengthMore(e.nativeEvent.lines.length >=props.lines); //to check the text is more than 4 lines or not
        // console.log(e.nativeEvent);
    },[]);

    const {colors} = useTheme();
    const details = {
        //Text styling
        color: colors.text,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 20,
    };
    const readMore = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 21,
        marginTop: 10,
        color: colors.lightText,
        textAlign: "center",

    };

    return (
        <View style = {{flex:1, }}>
            <Text
                onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : props.lines}
                style={details}>{props.details}</Text>

                {
                    lengthMore ? <Text
                    onPress={toggleNumberOfLines}
                                   style={readMore}>{textShown ? 'Read Less' : 'Read More'}</Text>
                    :null
                }
        </View>
    )
}

const ReviewCard = (props) => {
    const { colors } = useTheme();
    const replyCard = {
        flex : 1,
        flexDirection : "column",
        alignItems: "center",
        justifyContent: "center",

        margin: 5,
        padding: 5,
        minHeight: 100,

        borderBottomWidth: 1,
        borderColor: colors.border,

    };

    const Profile = {
        flex : 1,
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        margin: 5,
    };

    const nameTitle = {
        color: colors.text,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 15,
        lineHeight: 20,
    };

    const descriptionText = {
        color: colors.text,
    };

    const Content = {
        flex : 2,
        padding: 15,
        margin: 5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        maxWidth: 250,
    };

    //Rating styling
    const profileRating= {
        margin: 10,
    };


    let Name = props.name;

    //Get the initials of the name
    let initials = getInitials(Name);

    return(
        <TouchableOpacity style = { replyCard }>
          <View style = { Profile }>
            <Avatar
                title = {initials}
                source = {{ uri: props.avatar}}
                size = "small"
                rounded
                overlayContainerStyle={{backgroundColor: '#a8a8a8'}}
                activeOpacity={0.7}
            />
            <Text style = { nameTitle }> {props.name} </Text>
            <AirbnbRating
                    count={5}
                    defaultRating={props.rating}
                    size={15}
                    showRating = {false}
                    isDisabled
                    style = { profileRating }
                />
          </View>
          <View style = { Content }>
            <Details style = {descriptionText} details = { props.comment } lines = {3}/>
          </View>
        </TouchableOpacity>
    );
};

function ProfileScreen({ navigation }){
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
        alignItems: 'center',
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
        textTransform: 'uppercase',
        letterSpacing: 0.04,
        lineHeight: 15,
        margin: 5,
        padding: 3,
        marginBottom: 10,
        fontSize: 15,
        color: colors.lightText,
    };

    //Rating styling
    const profileRating= {
        margin: 10,
    };

    //Worker status and numbers
    const profileInfo= {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    };

    //Jobs View

    const jobsButton = {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 6.5,
        margin: 10,
        backgroundColor: "#FFB800",
        maxHeight: 75,

        borderRadius: 12,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    };

    const jobsView = {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    };

    //Jobs Numbers
    const jobsNumbers = {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: "#FFF",
    };

    //Jovs Text
    const jobsText = {
        fontFamily: 'Roboto',
        fontSize: 14,
        color: "#FFF",
    };

    //Trusters View
    const trustersButton ={
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 18,
        margin: 10,
        backgroundColor: colors.card,

        borderRadius: 12,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    };
    const trustersView = {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    };

    //Trusters Numbers
    const trustersNumbers = {
        fontFamily: 'Roboto',
        fontSize: 18,
        textAlign: 'center',
        color: colors.secondary,
    };

    //Trusters Text
    const trustersText = {
        fontFamily: 'Roboto',
        fontSize: 14,
        textAlign: 'center',
        color: colors.lightText,
    };


    //Reporters View
    const reportersButton ={
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 6.5,
        margin: 10,
        backgroundColor: colors.card,
        maxHeight: 75,

        borderRadius: 12,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    };
    const reportersView = {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    };

    //Reporters numbers
    const reportersNumbers= {
        fontFamily: 'Roboto',
        fontSize: 18,
        textAlign: 'center',
        color:colors.warning
    };

    //Reporters Text
    const reportersText= {
        fontFamily: 'Roboto',
        fontSize: 14,
        textAlign: 'center',
        color: colors.warning
    };


    //Available text View
    const availableView={
        flex: 4,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        //backgroundColor: 'gray'
    };

    //Available Text
    const availableText= {
        color: 'white',
        padding: 5,
        marginTop: 15,
        backgroundColor: 'green',
        borderRadius: 10,
    };

    //Not available text
    const notAvailableText= {
        color: 'white',
        padding: 5,
        marginTop: 15,
        backgroundColor: colors.warning,
        borderRadius: 10,
    };

    //A member Since
    const memberDurationText = {
        padding: 5,
        margin: 5,
        color: colors.lightText,
    };

    //skills list view
    const skillsListView = {
        flex: 5,
        flexDirection: 'row',
    };

    //skills list tex
    const skillsListText = {
        margin: 10,
        padding: 7,
        borderRadius: 10,
        borderWidth: 2,
        color: colors.text,
        borderColor: "#DDBA00"
    };

    //Description view
    const descriptionView = {

    };

    //Description Title
    const Title = {
        fontFamily: "Roboto",
        letterSpacing: 0.04,
        lineHeight: 15,
        margin: 5,
        padding: 3,
        marginBottom: 10,
        fontSize: 25,
        color: colors.text,
        padding: 10,
        margin: 15
    };

    // Description Text
    const descriptionText = {
        margin: 5,
        padding : 10,
        color: colors.text
    };


    ////////////////////////////////////////////////////Replies//////////////////////////////////////////////////////////////////////////////////////
    const RepliesViews = {
        flex: 4,
        flexDirection: "row",
        justifyContent:"center",
    };

    const HorizontalLine = {
        height: 5,
        width: "40%",
        marginTop: 30,
        backgroundColor: colors.text,
        borderRadius: 10,
    };
    const HorizontalLineView = {
        flex: 2,
        flexDirection: "column",
        alignItems:"center",
        maxHeight: 60,
    };

    const ReviewsCardView = {
        flex : 3,
        flexDirection : "column",
        alignItems: "center",
        marginBottom: 10,
    };

    const ReviewTitle = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        borderBottomWidth: 2,
        borderBottomColor: colors.border,

        marginHorizontal: 40,

    };

    const ReviewTitleText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 22,
        lineHeight: 28,
    };



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Get the initials for if the photo is not present
let name = "John Doe"
let initials = getInitials(name);
    const [Available,setAvailable] = useState(true); //to show the "Read more & Less Line"

//FlatList Optimization, use Item layout so that flatlist doesn't neet to calculate item layout
const ITEM_HEIGHT = 136;
const getItemLayout = useCallback(
    (data, index) => ({
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index
    }),
    []
);

    const skills= [ {key: "Computer"},{key: "Technology"} ]

    return(
        <>
        <ScrollView
            style = { view }
        >
            <View
            style = { profileDetails }
            >
                <Avatar
                    title = {initials}
                    source = {{ uri: "http://i.pravatar.cc/100?id=skater" }}
                    size = "xlarge"
                    rounded
                    overlayContainerStyle={{backgroundColor: '#a8a8a8'}}
                    activeOpacity={0.7}
                />
                <Text style = { profileName }>{ "John Doe" }</Text>

                <Text style = { profileLocation}>{ "Pretoria" }</Text>

                <Text style = { profileLocation}>{ "10m"} Traveling Radius</Text>

                <AirbnbRating
                        count={5}
                        defaultRating={4}
                        size={25}
                        showRating = {false}
                        isDisabled
                        style = { profileRating }
                    />
                {
                    Available ?
                    <Text style = { availableText }> Available </Text>:
                    <Text style = { notAvailableText }>Not Available</Text>
                }
            </View>
            <View style = { profileInfo }>
              <TouchableOpacity style = { jobsButton }>
                <View style = {jobsView}>
                    <Text style = { jobsNumbers} >{ "10" } </Text>
                    <Text style = { jobsText }> Jobs </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style = { trustersButton }>
                <View style = {trustersView}>
                    <Text style = { trustersNumbers} >{ "15" } </Text>
                    <Text style = { trustersText }> Trusters </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style = { reportersButton }>
                <View style = { reportersView }>
                    <Text style = { reportersNumbers }>{ "0" } </Text>
                    <Text style = { reportersText }> Reports </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style = { availableView }>
                <Text style = { memberDurationText }>A member since {"2021/02/12"}</Text>
                <ScrollView
                style = {skillsListView }
                horizontal = {true}
                >
                {
                    skills.map((l,i)=>(
                        <Text style = {skillsListText} key = {i} >{l.key}</Text>
                    ))
                }
                </ScrollView>
            </View>
             <View style = {{ flex:1, flexDirection: "column", alignItems:"center", justifyContent:"center", paddingHorizontal: 26, paddingBottom: 36, marginHorizontal: 5 }}>
                <Text style = {Title}>Introduction</Text>
               <View style = {{ paddingBottom : 20 }}>
                <Details style = {descriptionText} details = { "I make good website <3" } lines = {3}/>
               </View>
             </View>
        </ScrollView>
        <BottomDrawer
            containerHeight = {400}
            startUp = {false}
            backgroundColor = {colors.card}
            shadow = {true}
            borderTopLeftRadius = { 16 }
            borderTopRightRadius = { 16 }
        >
          <View style = {HorizontalLineView}>
            <View style = {HorizontalLine}></View>
          </View>
          <View style = { ReviewTitle }>
            <Text style = { ReviewTitleText }>Reviews</Text>
          </View>
            <View
                    style = { ReviewsCardView }
            >
            <FlatList
                //--------------------------------------------------This is a dictionary of job categories ----------------------------------------------------------------
                data = {Reviews}

                //---------------------------------------------------------------------------------------------------------------------------------------------------------------------
                renderItem = {({item}) =>
                    <ReviewCard
                        avatar = { item.Avatar }
                        name = {item.Name}
                        rating = { item.Rating }
                        comment = {item.Comment}
                    />
                            }
            keyExtractor={(item, index) => index.toString()}

            //optimization
            initialNumToRender = {3}
            getItemLayout = {getItemLayout}
            />
            </View>
          <View style = {{ flex:1,flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 100, }}>
            <ReviewButton/>
          </View>
        </BottomDrawer>
        </>
    )
}

export default React.memo(ProfileScreen, ReviewCard);
