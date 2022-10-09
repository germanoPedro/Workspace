import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useTheme } from '@react-navigation/native';
import { Avatar,AirbnbRating } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import { Skills,JobDetails } from "../../../Client/JobRequests/Components/RequestComponents";
import { Details } from "../../Jobs/subScreens/assets/components/components";

const  getInitials = (name) => {
    let initials = name.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase();
    return(initials)
};
function BasicNotification(props){

    ///////////////////////////////////////////// Styling components ////////////////////////////////////////////////
    const {colors} = useTheme();

    const cardView = {
        flex: 1,
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "flex-start",

        padding: 15,

        backgroundColor: colors.card,

        borderRadius: 10,
        overflow: 'hidden',
    };

    //I am usign a seperate shadow with a greater border radius because it peaks out behind the card 
    const cardShadow = {
        borderRadius: 16,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

        marginBottom: 10,
    };

    const messageText = {
        color: colors.text,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,

        padding : 2,
        margin: 5,
    };
///////////////////////////////////////////// Styling components ////////////////////////////////////////////////


    //get the data from the props and store it in variable
    const Item = props.Data;
    //get the user data from the props and store it in variable
    const User = Item.User;


    let Name = User.name;

    //Get the initials of the name
    let initials = getInitials(Name);
    return(
            <View style = {cardShadow}>
                <View style = {cardView}>
                    <Avatar
                        title = {initials}
                        source = {{ uri: User.avatar}}
                        size = "small"
                        rounded
                        overlayContainerStyle={{backgroundColor: '#a8a8a8'}}
                        activeOpacity={0.7}
                    />
                    <Text style = {messageText}>{User.name} {Item.Message}</Text>
                </View>
            </View>
    )

};

function MonitizationNotification(props){
    ///////////////////////////////////////////// Styling components ////////////////////////////////////////////////
    const {colors} = useTheme();


    //Card Styling
    const cardView = {
        flex: 1,
        flexDirection:"column",
        alignItems: "flex-start",
        justifyContent: "center",

        padding: 15,

        backgroundColor: colors.card,

        borderRadius: 10,
        overflow: 'hidden',
    };

    //I am usign a seperate shadow with a greater border radius because it peaks out behind the card
    const cardShadow = {
        borderRadius: 16,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

        marginBottom: 10,
    };

    //Title Styling
    const titleView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 7,
    };

    const titleText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: 21,

        padding : 2,
        margin: 2,
        color: colors.text,
    };

    //Profile Message styling
    const messageView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    }


    const messageText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,

        padding : 2,
        margin: 5,

        color : colors.text,
    };

///////////////////////////////////////////// Styling components ////////////////////////////////////////////////


    //get the data from the props and store it in variable
    const Item = props.Data;
    //get the user data from the props and store it in variable
    const User = Item.User;

    let Name = User.name;

    const navigation = useNavigation();
    //Get the initials of the name
    let initials = getInitials(Name);
    return(
            <View style = {cardShadow}>
                <TouchableOpacity style = {cardView}
                                  onPress = {()=> navigation.navigate('DataScreen')}
                >
                    <View style = {titleView}>
                        <MaterialCommunityIcons name = "cash-usd" size = {25} color = {colors.grant} />
                      <Text style = {titleText}>Redeemed Successfully!</Text>
                    </View>

                    <View style = { messageView }>
                      <Text style = {messageText}>${Item.amount} {Item.Message}</Text>
                    </View>
                </TouchableOpacity>
            </View>
    )


};

function JobCompletedNotification(props){

    ///////////////////////////////////////////// Styling components ////////////////////////////////////////////////
    const {colors} = useTheme();


    //Card Styling
    const cardView = {
        flex: 1,
        flexDirection:"column",
        alignItems: "flex-start",
        justifyContent: "center",

        padding: 15,

        backgroundColor: colors.card,

        borderRadius: 10,
        overflow: 'hidden',
    };

    //I am usign a seperate shadow with a greater border radius because it peaks out behind the card
    const cardShadow = {
        borderRadius: 16,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

        marginBottom: 10,
    };

    //Title Styling
    const titleView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 7,
    };

    const titleText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: 21,
        color : colors.text,

        padding : 2,
        margin: 2,
    };

    //Profile Message styling
    const messageView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    }


    const messageText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,

        padding : 2,
        margin: 5,
        color : colors.text,
    };


    //Job content

    const contentContainer = {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",

        marginTop: 15,
    }

    //skills list view
    const skillsListView = {
        flex: 3,
        flexDirection: "row",
    };

    //Text elements styling
    const title = {
        //Layout
        flex: 2,
        flexDirection: "row",
        //Text styling
        color : colors.text,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 13,
        lineHeight: 18,
    };

    const contentView = {
        //Layout
        flex: 2,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 10,
        margin: 2,

        //Dimensions
    };

///////////////////////////////////////////// Styling components ////////////////////////////////////////////////


    //get the data from the props and store it in variable
    const Item = props.Data;
    //get the user data from the props and store it in variable
    const User = Item.User;

    const Job = Item.Job;

    let Name = User.name;

    //Using useNavigation so that we can use navigation in this component
    const navigation = useNavigation();

    const item = Job;
    const client = User;
    console.log(item.title)
    console.log(client)

    //Get the initials of the name
    let initials = getInitials(Name);
    return(
            <TouchableOpacity style = {cardShadow}
                              onPress = {()=> navigation.navigate('JobScheduleDetailsScreen', {item, client})}
            >
                <View style = {cardView}>
                    <View style = {titleView}>
                        <MaterialCommunityIcons name = "progress-wrench" size = {25} color = {colors.grant} />
                        <Text style = {titleText}>Job Completed !</Text>
                    </View>

                    <View style = { messageView }>
                    <Avatar
                        title = {initials}
                        source = {{ uri: User.avatar}}
                        size = "small"
                        rounded
                        overlayContainerStyle={{backgroundColor: '#a8a8a8'}}
                        activeOpacity={0.7}
                    />
                    <Text style = {messageText}>{Item.Message} {User.name}</Text>
                    </View>

                    <View style = {contentContainer}>
                      <AirbnbRating
                            count={5}
                            defaultRating={Job.rating}
                            size={15}
                            showRating = {false}
                            isDisabled
                        />
                    <View style = {contentView}
                    >
                            <Details
                                title = {Job.title}
                                skills = {Job.skills}
                                details = {Job.details}
                            />
                    </View>
                    </View>
                </View>
            </TouchableOpacity>
    )
};

function ReportNotification(props){
    ///////////////////////////////////////////// Styling components ////////////////////////////////////////////////
    const {colors} = useTheme();


    //Card Styling
    const cardView = {
        flex: 1,
        flexDirection:"column",
        alignItems: "flex-start",
        justifyContent: "center",

        padding: 15,

        backgroundColor: colors.card,

        borderRadius: 10,
        overflow: 'hidden',
    };

    //I am usign a seperate shadow with a greater border radius because it peaks out behind the card
    const cardShadow = {
        borderRadius: 16,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

        marginBottom: 10,
    };

    //Title Styling
    const titleView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 7,
    };

    const titleText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: 21,

        padding : 2,
        margin: 2,
        color: colors.warning,
    };

    //Profile Message styling
    const messageView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    }


    const messageText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,

        padding : 2,
        margin: 5,

        color : colors.text,
    };

///////////////////////////////////////////// Styling components ////////////////////////////////////////////////


    //get the data from the props and store it in variable
    const Item = props.Data;
    //get the user data from the props and store it in variable
    const User = Item.User;

    let Name = User.name;

    const navigation = useNavigation();
    //Get the initials of the name
    let initials = getInitials(Name);
    return(
            <TouchableOpacity style = {cardShadow}
                onPress = {()=> navigation.navigate('DataScreen')}
            >
                <View style = {cardView}>
                    <View style = {titleView}>
                        <MaterialCommunityIcons name = "alert" size = {25} color = {colors.warning} />
                        <Text style = {titleText}>Reported!</Text>
                    </View>

                    <View style = { messageView }>
                    <Text style = {messageText}>{Item.Message}</Text>
                    </View>
                </View>
            </TouchableOpacity>
    )

};

function AcceptedOfferNotification(props){

    ///////////////////////////////////////////// Styling components ////////////////////////////////////////////////
    const {colors} = useTheme();


    //Card Styling
    const cardView = {
        flex: 1,
        flexDirection:"column",
        alignItems: "flex-start",
        justifyContent: "center",

        padding: 15,

        backgroundColor: colors.card,

        borderRadius: 10,
        overflow: 'hidden',
    };

    //I am usign a seperate shadow with a greater border radius because it peaks out behind the card
    const cardShadow = {
        borderRadius: 16,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

        marginBottom: 10,
    };

    //Title Styling
    const titleView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 7,
    };

    const titleText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: 21,
        color : colors.text,

        padding : 2,
        margin: 2,
    };

    //Profile Message styling
    const messageView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    }


    const messageText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,

        padding : 2,
        margin: 5,
        color : colors.text,
    };


    //Job content

    const contentContainer = {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",

        marginTop: 15,
    }

    //skills list view
    const skillsListView = {
        flex: 3,
        flexDirection: "row",
    };

    //Text elements styling
    const title = {
        //Layout
        flex: 2,
        flexDirection: "row",
        //Text styling
        color : colors.text,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 13,
        lineHeight: 18,
    };

    const contentView = {
        //Layout
        flex: 2,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 10,
        margin: 2,

        //Dimensions
    };

///////////////////////////////////////////// Styling components ////////////////////////////////////////////////


    //get the data from the props and store it in variable
    const Item = props.Data;
    //get the user data from the props and store it in variable
    const User = Item.User;

    const Job = Item.Job;

    let Name = User.name;

    const item = Job;
    const client = User;

    const navigation = useNavigation();

    //Get the initials of the name
    let initials = getInitials(Name);
    return(
            <TouchableOpacity style = {cardShadow}
                onPress = {()=> navigation.navigate('JobScheduleDetailsScreen', {item, client})}
            >
                <View style = {cardView}>
                    <View style = {titleView}>
                        <MaterialCommunityIcons name = "check-outline" size = {25} color = {colors.grant} />
                        <Text style = {titleText}>Accepted Offer!</Text>
                    </View>

                    <View style = { messageView }>
                    <Avatar
                        title = {initials}
                        source = {{ uri: User.avatar}}
                        size = "small"
                        rounded
                        overlayContainerStyle={{backgroundColor: '#a8a8a8'}}
                        activeOpacity={0.7}
                    />
                      <Text style = {messageText}>{User.name} {Item.Message}</Text>
                    </View>

                    <View style = {contentContainer}>
                    <View style = {contentView}
                    >
                        <Text style = {messageText}>Job details: </Text>
                            <Details
                                title = {Job.title}
                                skills = {Job.skills}
                                details = {Job.details}
                            />
                    </View>
                    </View>
                </View>
            </TouchableOpacity>
    )

};

function PromotionNotification(props){

    ///////////////////////////////////////////// Styling components ////////////////////////////////////////////////
    const {colors} = useTheme();


    //Card Styling
    const cardView = {
        flex: 1,
        flexDirection:"column",
        alignItems: "flex-start",
        justifyContent: "center",

        padding: 15,

        backgroundColor: colors.card,

        borderRadius: 10,
        overflow: 'hidden',
    };

    //I am usign a seperate shadow with a greater border radius because it peaks out behind the card
    const cardShadow = {
        borderRadius: 16,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

        marginBottom: 10,
    };

    //Title Styling
    const titleView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 7,
    };

    const titleText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: 21,
        color : colors.text,

        padding : 2,
        margin: 2,
    };

    //Profile Message styling
    const messageView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    }


    const messageText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,

        padding : 2,
        margin: 5,
        color : colors.text,
    };


    //Job content

    const contentContainer = {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",

        marginTop: 15,
    }

    //skills list view
    const skillsListView = {
        flex: 3,
        flexDirection: "row",
    };

    //Text elements styling
    const title = {
        //Layout
        flex: 2,
        flexDirection: "row",
        //Text styling
        color : colors.text,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 13,
        lineHeight: 18,
    };

    const contentView = {
        //Layout
        flex: 2,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 10,
        margin: 2,

        //Dimensions
    };

///////////////////////////////////////////// Styling components ////////////////////////////////////////////////


    //get the data from the props and store it in variable
    const Item = props.Data;
    //get the user data from the props and store it in variable
    const User = Item.User;

    const Job = Item.Job;

    let Name = User.name;

    //Get the initials of the name
    let initials = getInitials(Name);
    return(
            <View style = {cardShadow}>
                <View style = {cardView}>
                    <View style = {titleView}>
                        <MaterialCommunityIcons name = "open-in-new" size = {25} color = {colors.secondary} />
                        <Text style = {titleText}>Successful Promotion</Text>
                    </View>

                    <View style = { messageView }>
                    <Text style = {messageText}>{Item.Message}</Text>
                    </View>
                </View>
            </View>
    )

};

function JobCanceledNotification(props){

    ///////////////////////////////////////////// Styling components ////////////////////////////////////////////////
    const {colors} = useTheme();


    //Card Styling
    const cardView = {
        flex: 1,
        flexDirection:"column",
        alignItems: "flex-start",
        justifyContent: "center",

        padding: 15,

        backgroundColor: colors.card,

        borderRadius: 10,
        overflow: 'hidden',
    };

    //I am usign a seperate shadow with a greater border radius because it peaks out behind the card
    const cardShadow = {
        borderRadius: 16,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

        marginBottom: 10,
    };

    //Title Styling
    const titleView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 7,
    };

    const titleText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: 21,
        color : colors.text,

        padding : 2,
        margin: 2,
    };

    //Profile Message styling
    const messageView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    }


    const messageText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,

        padding : 2,
        margin: 5,
        color : colors.text,
    };


    //Job content

    const contentContainer = {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",

        marginTop: 15,
    }

    //skills list view
    const skillsListView = {
        flex: 3,
        flexDirection: "row",
    };

    //Text elements styling
    const title = {
        //Layout
        flex: 2,
        flexDirection: "row",
        //Text styling
        color : colors.text,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 13,
        lineHeight: 18,
    };

    const contentView = {
        //Layout
        flex: 2,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 10,
        margin: 2,

        //Dimensions
    };

///////////////////////////////////////////// Styling components ////////////////////////////////////////////////


    //get the data from the props and store it in variable
    const Item = props.Data;
    //get the user data from the props and store it in variable
    const User = Item.User;

    const Job = Item.Job;

    let Name = User.name;

    //Get the initials of the name
    let initials = getInitials(Name);
    return(
            <View style = {cardShadow}>
                <View style = {cardView}>
                    <View style = {titleView}>
                        <MaterialCommunityIcons name = "alert-outline" size = {25} color = {colors.primary} />
                        <Text style = {titleText}>Job Canceled</Text>
                    </View>

                    <View style = { messageView }>
                    <Text style = {messageText}>{Item.Message}</Text>
                    </View>

                    <View style = {contentContainer}>
                        <Text style = {messageText}>Job details: </Text>
                        <TouchableOpacity style = {contentView}
                            onPress = {props.onPress}
                        >
                            <Details
                                title = {Job.title}
                                skills = {Job.skills}
                                details = {Job.details}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    )

};

function InformationNotification(props){
    ///////////////////////////////////////////// Styling components ////////////////////////////////////////////////
    const {colors} = useTheme();


    //Card Styling
    const cardView = {
        flex: 1,
        flexDirection:"column",
        alignItems: "flex-start",
        justifyContent: "center",

        padding: 15,

        backgroundColor: colors.card,

        borderRadius: 10,
        overflow: 'hidden',
    };

    //I am usign a seperate shadow with a greater border radius because it peaks out behind the card
    const cardShadow = {
        borderRadius: 16,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

        marginBottom: 10,
    };

    //Title Styling
    const titleView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 7,
    };

    const titleText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: 21,

        padding : 2,
        margin: 2,
        color: colors.text,
    };

    //Profile Message styling
    const messageView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    }


    const messageText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,

        padding : 2,
        margin: 5,

        color : colors.text,
    };

///////////////////////////////////////////// Styling components ////////////////////////////////////////////////


    //get the data from the props and store it in variable
    const Item = props.Data;
    //get the user data from the props and store it in variable
    const User = Item.User;

    let Name = User.name;

    //Get the initials of the name
    let initials = getInitials(Name);
    return(
            <View style = {cardShadow}>
                <View style = {cardView}>
                    <View style = {titleView}>
                        <MaterialCommunityIcons name = "alert-circle-outline" size = {25} color = {colors.secondary} />
                        <Text style = {titleText}>Information</Text>
                    </View>

                    <View style = { messageView }>
                        <Text style = {messageText}>{Item.Message}</Text>
                    </View>
                </View>
            </View>
    )

};

function ScheduledJobNotification(props){

    ///////////////////////////////////////////// Styling components ////////////////////////////////////////////////
    const {colors} = useTheme();


    //Card Styling
    const cardView = {
        flex: 1,
        flexDirection:"column",
        alignItems: "flex-start",
        justifyContent: "center",

        padding: 15,

        backgroundColor: colors.card,

        borderRadius: 10,
        overflow: 'hidden',
    };

    //I am usign a seperate shadow with a greater border radius because it peaks out behind the card
    const cardShadow = {
        borderRadius: 16,
        backgroundColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

        marginBottom: 10,
    };

    //Title Styling
    const titleView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: 7,
    };

    const titleText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: 21,
        color : colors.text,

        padding : 2,
        margin: 2,
    };

    //Profile Message styling
    const messageView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    }


    const messageText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 16,

        padding : 2,
        margin: 5,
        color : colors.text,
    };


    //Job content

    const contentContainer = {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",

        marginTop: 15,
    }

    //skills list view
    const skillsListView = {
        flex: 3,
        flexDirection: "row",
    };

    //Text elements styling
    const title = {
        //Layout
        flex: 2,
        flexDirection: "row",
        //Text styling
        color : colors.text,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 13,
        lineHeight: 18,
    };

    const contentView = {
        //Layout
        flex: 2,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 10,
        margin: 2,

        //Dimensions
    };


    // Budget and date
    //
    // Budget and date view
    const DateBudgetView = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        margin : 2,

        width: "100%",
    };

    const BudgetText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 15,
        lineHeight: 20,

        color : colors.grant,

        padding : 10,
        margin: 5,

        borderWidth: 1,
        borderColor: colors.grant,
        borderRadius: 10,

    };

    const DateTextView = {
        flex : 1,
        flexDirection : "row",
        justifyContent: "flex-end"
    };

    const DateText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 15,
        lineHeight: 20,

        margin: 5,

        color : colors.lightText,
        textAlign: "right",

    };

///////////////////////////////////////////// Styling components ////////////////////////////////////////////////


    //get the data from the props and store it in variable
    const Item = props.Data;
    //get the user data from the props and store it in variable
    const User = Item.User;

    const Job = Item.Job;

    let Name = User.name;

    const navigation = useNavigation();
    const item = Job;
    const client = User;

    //Get the initials of the name
    let initials = getInitials(Name);
    return(
            <TouchableOpacity style = {cardShadow}
                onPress = {()=> navigation.navigate('JobScheduleDetailsScreen', {item, client})}
              >
                <View style = {cardView}>
                    <View style = {titleView}>
                        <MaterialCommunityIcons name = "calendar" size = {25} color = {colors.secondary} />
                        <Text style = {titleText}>Job Scheduled</Text>
                    </View>

                    <View style = { messageView }>
                    <Text style = {messageText}>{Item.Message} {Job.dateSet}</Text>
                    </View>

                    <View style = {contentContainer}>
                        <View style = {contentView}
                        >
                        <View style = {DateBudgetView}>
                            <Text style = {BudgetText}>Budget: {Job.budget}</Text>
                            <View style = {DateTextView}>
                                <Text style = {DateText}>{Job.dateSet}</Text>
                            </View>
                        </View>
                            <Details
                                title = {Job.title}
                                skills = {Job.skills}
                                details = {Job.details}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
    )

};

function Notification(props){
    // Notification Types
    // Basic
    // JobCompleted
    // Reported
    // AcceptedOffer
    // Promotion
    // Canceled
    // Information

        switch(props.Type) {
        case "Basic":
            // code block\
            return(

                <BasicNotification Data = {props.Data}/>
            )
            break;
        case "Monetize":
            // code block\
            return(

                <MonitizationNotification Data = {props.Data}/>
            )
            break;
        case "JobCompleted":
            // code block
            return(
                <JobCompletedNotification Data = {props.Data}/>

            )
            break;
        case "Reported":
            // code block
            return(
                <ReportNotification Data = {props.Data}/>

            )
            break;
        case "AcceptedOffer":
            // code block
            return(
                <AcceptedOfferNotification Data = {props.Data}/>

            )
            break;
        case "Promoted":
            // code block
            return(
                <PromotionNotification Data = {props.Data}/>
            )
            break;
        case "Canceled":
            // code block
            return(
                <JobCanceledNotification Data = {props.Data}/>
            )
            break;

        case "Schedule":
            // code block
            return(
                <ScheduledJobNotification Data = {props.Data}/>
            )
            break;
        case "Information":
            // code block
            return(
                <InformationNotification Data = {props.Data}/>
            )
            break;
        default:
            // code block
        }
};

export default React.memo(Notification);
