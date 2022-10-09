import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Skills,JobDetails } from "../../JobRequests/Components/RequestComponents";

const getInitials = (name) => {
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
    const User = Item.Job.User;

    const item = Item.Job;

    let Name = User.name;

    const navigation = useNavigation();

    //Get the initials of the name
    let initials = getInitials(Name);
    return(
            <TouchableOpacity

                onPress = {() => navigation.navigate('JobCompletedDetails', { item })}
              style = {cardShadow}>
                <View style = {cardView}>
                    <View style = {titleView}>
                        <MaterialCommunityIcons name = "progress-wrench" size = {25} color = {colors.grant} />
                        <Text style = {titleText}>Job Completed !</Text>
                    </View>

                    <View style = { messageView }>
                    <Avatar
                        item = {initials}
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
                        item >
                            <Text style = { title }>{item.title}</Text>
                            <ScrollView
                                horizontal = {true}
                                showsHorizontalScrollIndicator = {false}
                                style = {skillsListView } >
                                {
                                    item.skills.map((l,i)=>(
                                        <Skills key = {i} skill = {l}/>
                                    ))
                                }
                            </ScrollView>
                            <JobDetails details = {item.details} lines = {2} />
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

    const item = User;

    const navigation = useNavigation();

    //Get the initials of the name
    let initials = getInitials(Name);
    return(
            <TouchableOpacity
                onPress = {() => navigation.navigate('ClientViewWorkerProfile', {item})}
                style = {cardShadow}>
                <View style = {cardView}>
                    <View style = {titleView}>
                        <MaterialCommunityIcons name = "alert" size = {25} color = {colors.warning} />
                        <Text style = {titleText}>Reported Worker!</Text>
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

    const navigation = useNavigation();

    //Get the initials of the name
    let initials = getInitials(Name);
    return(
            <TouchableOpacity style = {cardShadow}
                  onPress = {() => navigation.navigate('JobRequestDetails', { item })}
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
                    <Text style = {messageText}>{Item.Message}</Text>
                    </View>

                    <View style = {contentContainer}>
                        <Text style = {messageText}>Job details: </Text>
                        <TouchableOpacity style = {contentView}
                            onPress = {props.onPress}
                        >
                            <Text style = { title }>{Job.title}</Text>
                            <ScrollView
                                horizontal = {true}
                                showsHorizontalScrollIndicator = {false}
                                style = {skillsListView } >
                                {
                                    Job.skills.map((l,i)=>(
                                        <Skills key = {i} skill = {l}/>
                                    ))
                                }
                            </ScrollView>
                            <JobDetails details = {Job.details} lines = {2} />
                        </TouchableOpacity>
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

    const navigation = useNavigation();

    //Get the initials of the name
    let initials = getInitials(Name);
    return(
            <TouchableOpacity style = {cardShadow}
                onPress={() => navigation.navigate('PromotionJobListStackNavigator')}
            >
                <View style = {cardView}>
                    <View style = {titleView}>
                        <MaterialCommunityIcons name = "open-in-new" size = {25} color = {colors.secondary} />
                        <Text style = {titleText}>Successful Job Request Promotion</Text>
                    </View>

                    <View style = { messageView }>
                    <Text style = {messageText}>{Item.Message}</Text>
                    </View>

                    <View style = {contentContainer}>
                        <Text style = {messageText}>Job details: </Text>
                        <View style = {contentView}
                        >
                            <Text style = { title }>{Job.title}</Text>
                            <ScrollView
                                horizontal = {true}
                                showsHorizontalScrollIndicator = {false}
                                style = {skillsListView } >
                                {
                                    Job.skills.map((l,i)=>(
                                        <Skills key = {i} skill = {l}/>
                                    ))
                                }
                            </ScrollView>
                            <JobDetails details = {Job.details} lines = {2} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
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
                        <Text style = {titleText}>Job Request Canceled</Text>
                    </View>

                    <View style = { messageView }>
                    <Text style = {messageText}>{Item.Message}</Text>
                    </View>

                    <View style = {contentContainer}>
                        <Text style = {messageText}>Job details: </Text>
                        <TouchableOpacity style = {contentView}
                            onPress = {props.onPress}
                        >
                            <Text style = { title }>{Job.title}</Text>
                            <ScrollView
                                horizontal = {true}
                                showsHorizontalScrollIndicator = {false}
                                style = {skillsListView } >
                                {
                                    Job.skills.map((l,i)=>(
                                        <Skills key = {i} skill = {l}/>
                                    ))
                                }
                            </ScrollView>
                            <JobDetails details = {Job.details} lines = {2} />
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
