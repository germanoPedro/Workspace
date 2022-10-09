import React, { useCallback, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Avatar, AirbnbRating } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Skills,JobDetails } from "../../../../../Client/JobRequests/Components/RequestComponents";

//This is the trust button
const QuoteButton = (props) => {
// import styling component
    const {colors} = useTheme();

    const QuoteButton = {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 16,
        marginHorizontal: 10,
        padding: 10,

        borderRadius: 10,

        backgroundColor: colors.grant,
    };

    const QuoteButtonText = {
        color: "#FFF",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 12,
        lineHeight: 13,
        textTransform: "uppercase",
        padding: 2,
        marginRight: 5,
    };
    return(
        <TouchableOpacity style = {QuoteButton} onPress ={props.onPress}>
            <Text style = {QuoteButtonText}>Give Quote</Text>
            <MaterialCommunityIcons name = "cash-multiple" size = {20} color = {"#FFF"} />
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
        padding: 9,
        maxWidth: "30%",

        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.border,

    };

    const MessageButtonText = {
        color : colors.text,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",

        fontSize: 12,
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
function Details(props){
    const { colors } = useTheme();

    const detailsView = {
        //Layout
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 16,
        margin: 5,

    };

    const jobTitles = {
        //Text styling
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 18,

        color: colors.text,

    };


    return(
        <View style = {detailsView}>
                <Text style={jobTitles}>{props.title}</Text>
                <ScrollView
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                  >
                    {
                        props.skills.map((skill,i)=>(
                            <Skills key = {i} skill = {skill}/>
                        ))
                    }
                </ScrollView>
                <JobDetails details = {props.details} lines = {3}/>
        </View>
    )
};


function BudgetView(props){
    const { colors } = useTheme();

    const budgetView = {
        flex: 2,
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 5,
        margin: 16,

        borderBottomWidth: 2,
        borderColor: colors.border ,
    };

    const budgetTitle = {
        //Text styling
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 15,
        lineHeight: 18,

        color: colors.lightText,
    };

    const budgetText = {
        //Text styling
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 25,
        lineHeight: 25,
        margin: 10,

        color: colors.darkGreen,
    };
    return(
        <View style={budgetView}>
            <Text style = {budgetTitle}>Budget</Text>
            <Text style = {budgetText}>{props.budget}</Text>
        </View>
    );
};


function DisplayDate(props){
    const {colors} = useTheme();
    const dateView = {
        flex: 2,
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 13,
        margin: 5,
    };

    const title = {
        alignItems: "center",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 15,
        lineHeight: 20,
        color: colors.lightText,

        padding: 3,
    }

    const date= {
        alignItems: "center",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        lineHeight: 20,
        color: colors.text,

        padding: 6,
    };

    return(
        <View style = { dateView }>
            <Text style = {title}>Date of Request</Text>
            <Text style = { date }>{props.dateSet}</Text>
        </View>
    );
};

function ClientButton(props){
    const {colors} = useTheme();

    const clientView = {
        flex: 2,
        flexDirection: "column",
        alignitems: "flex-start",
        padding: 16,
        margin: 4,

    };

    const title = {
        alignItems: "center",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 20,
        color: colors.lightText,

    };

    const buttonClient = {
        flex : 1,
        flexDirection: "row",
        alignItems: "center",

        padding : 15,
    };

    const clientName = {
        alignItems: "center",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 20,
        color: colors.text,

        margin: 10,
    };

    const text = {
        alignItems: "center",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 20,
        color: colors.text,

    };

    const profileRating = {
        margin: 10,

    };

let name = props.name;
let initials = name.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase();

    return(
        <View style = {clientView}>
            <Text style = {title}>Client</Text>
            <TouchableOpacity
              style = { buttonClient }
              onPress = {props.onPress}
            >
                <Avatar
                    title = {initials}
                source = {{ uri: props.image }}
                    size = "small"
                    rounded
                    overlayContainerStyle={{backgroundColor: '#a8a8a8'}}
                    activeOpacity={0.7}
                />
                <Text style = { clientName }>{props.name}</Text>
            <View style = {{flex: 1,flexDirection: "row-reverse" }}>
                <MaterialCommunityIcons name = "chevron-right" size = {25} color = { colors.lightText } />
            </View>
            </TouchableOpacity>
        </View>
    )
};


//This is the card component
function ClientsJobsCard(props){

    ///////////////////////////////////////////// Styling components ////////////////////////////////////////////////
    const { colors } = useTheme();

    const cardView = {
        flex: 1,
        flexDirection:"row",
        alignItems: "flex-start",
        justifyContent: "center",

        padding: 15,

        borderRadius: 8,
        borderBottomWidth:2,
        borderBottomColor: colors.border,
        overflow: 'hidden',
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
        alignItems: "flex-start",
        justifyContent: "center",
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

    };

    const dateView = {
        flex : 1,
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        maxHeight: 80,
    };

    const lightText = {
        color : colors.lightText,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "center",
        fontSize: 12,
        lineHeight: 16,
    };

///////////////////////////////////////////// Styling components ////////////////////////////////////////////////


    return(
            <View style = {cardView}>
                <View
                    style = {detailsView}
                    >
                    <Details
                        title = {props.Data.title}
                        skills = {props.Data.skills}
                        details = {props.Data.details}
                    />
                    <View
                    style = {promotedView}
                    >
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
                        <View style = {dateView}>
                            <Text style = {lightText}>{props.Data.date}</Text>
                            <Text style = {lightText}>{props.Data.replies} Replies</Text>
                        </View>
                    </View>
                </View>
            </View>
    )

};

export {
    Details,
    BudgetView,
    DisplayDate,
    ClientButton,
    MessageButton,
    QuoteButton,
    ClientsJobsCard,
}
