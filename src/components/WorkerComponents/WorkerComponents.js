import React, { useCallback } from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { useTheme } from '@react-navigation/native';
import { Avatar, AirbnbRating } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Details } from "../../Worker/Jobs/subScreens/assets/components/components";
import { JobDetails, Skills } from "../../Client/JobRequests/Components/RequestComponents";
import PopupMenu from '../../components/WorkerComponents/PopupMenu';

const getInitials = (name) => {
    let initials = name.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase();
    return(initials)
};

//This is the card component
function Card(props){
    const onBlock = () => {
        alert("Block");
    };

    const onReport= () => {
        alert("Reported");
    };

    const onPopupEvent = useCallback((eventName, index) => {
        if (eventName !== 'itemSelected') return
        if (index === 0) onBlock()
        else onReport()
    },[]);
    ///////////////////////////////////////////// Styling components ////////////////////////////////////////////////
    const {colors} = useTheme();

    const cardView = {
        flex: 1,
        flexDirection:"column",
        alignItems: "flex-start",
        justifyContent: "center",

        padding: 15,
    };

    //I am usign a seperate shadow with a greater border radius because it peaks out behind the card
    const cardShadow = {
        marginBottom: 5,
        marginTop: 5,
        marginHorizontal: 5,
        flex: 1,
        backgroundColor: colors.card,

        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.border,
        overflow: 'hidden',
    };

    const messageText = {
        color : colors.text,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,

        padding : 2,
        margin: 5,
    };

    const userView = {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    };


    //Button customization
    const rating= {
        flex:1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        margin: 10,
    };
///////////////////////////////////////////// Styling components ////////////////////////////////////////////////


    //get the user data from the props and store it in variable
    const User = props.Data;

    const Name = User.name;

    //Get the initials of the name
    let initials = getInitials(Name);
    return(
        <View style = { cardShadow }>
            <View style = {cardView}>
                <View style = {userView}>
                <Avatar
                    title = {initials}
                    source = {{ uri: User.avatar}}
                    size = "small"
                    rounded
                    overlayContainerStyle={{backgroundColor: '#a8a8a8'}}
                    activeOpacity={0.7}
                />
                <Text style = {messageText}>{User.name}</Text>
                    <View style = {{ flexDirection: 'row-reverse', flex: 1 }}>
                        <PopupMenu actions={['Block', 'Report!']} onPress={onPopupEvent} />
                    </View>
            </View>
                <View
                    style = {rating}
                    >
                {
                props.rating ?
                    <AirbnbRating
                        count={5}
                        defaultRating={User.rating}
                        size={15}
                        showRating = {false}
                        isDisabled
                    />
                : null
                }
                </View>
                <View>
                    <JobDetails details = {User.description} lines = {2} />
                </View>
            </View>
        </View>
    )

};



//This is the card component
function JobCard(props){

    const onBlock = () => {
        alert("Block");
    };

    const onReport= () => {
        alert("Reported");
    };

    const onPopupEvent = useCallback((eventName, index) => {
        if (eventName !== 'itemSelected') return
        if (index === 0) onBlock()
        else onReport()
    },[]);

    ///////////////////////////////////////////// Styling components ////////////////////////////////////////////////
    const { colors } = useTheme();

    const cardView = {
        flex: 1,
        flexDirection:"column",
        alignItems: "flex-start",
        justifyContent: "center",

        padding: 15,

        backgroundColor: colors.card,

        borderRadius: 8,
        overflow: 'hidden',
    };

    //I am usign a seperate shadow with a greater border radius because it peaks out behind the card
    const cardShadow = {
        borderRadius: 12,
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

    const messageText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,

        padding : 2,
        margin: 5,
    };

    const userView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    };


    //Details view
    const detailsView= {
        flex:1,
        flexDirection: 'column',
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100%",
        margin: 10,
    };

    const promotedView= {
        flex:1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        margin: 10,
    };


    const promoted = {
        color : colors.lightText,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 12,
        lineHeight: 16,

    }
///////////////////////////////////////////// Styling components ////////////////////////////////////////////////


    //get the user data from the props and store it in variable
    const User = props.User;

    const Name = User.name;

    //Get the initials of the name
    let initials = getInitials(Name);
    return(
            <View style = {cardShadow}>
                <View style = {cardView}>
                  <View style = {userView}>
                    <Avatar
                        title = {initials}
                        source = {{ uri: User.avatar}}
                        size = "small"
                        rounded
                        overlayContainerStyle={{backgroundColor: '#a8a8a8'}}
                        activeOpacity={0.7}
                    />
                    <Text style = {messageText}>{User.name}</Text>
                    <View style = {{ flexDirection: 'row-reverse', flex: 1 }}>
                        <PopupMenu actions={['Block', 'Report!']} onPress={onPopupEvent} />
                    </View>
                </View>
                    <View
                      style = {detailsView}
                        >
                        <Details
                          title = {props.Data.title}
                          skills = {props.Data.skills}
                          details = {props.Data.details}
                        />
                        {
                            props.promoted ?
                     <View
                      style = {promotedView}
                     >
                            <MaterialCommunityIcons name = "open-in-new" size = {17} color = {colors.lightText} />
                            <Text style = { promoted }>Promoted</Text>
                     </View>

                            : null
                        }
                    </View>
                </View>
            </View>
    )

};

export{
    Card,
    JobCard
}
