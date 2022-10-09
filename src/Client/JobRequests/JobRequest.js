import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';

import { Skills, DeleteButton, DoneButton,JobDetails } from "./Components/RequestComponents";

const jobRequestData = [
    {
        title: "Photography",
        skills: ["Arts"],
        done: true,
        budget: "R100",
        details: "I need a photographer for my sisters wedding.",
        dateSet: "20/12/2019", // dd/mm/yyyy
        dateCompleted: "25/12/2019", // dd/mm/yyyy
    },
    {
        title: "Clown",
        skills: ["Funny", "Entertainment", "Events"],
        done: false,
        budget: "R1000",
        details: "I am looking for a clown who will be coming to my brothers birthday party. And he needs to be verry funny and must have a red nose but it must not look like IT,yk the clown from the horror movie coz even though it wasn't scary it was just creepy coz if you think about it it's basically a pedo clown and that's weird ",
        dateSet: "20/12/2019", // dd/mm/yyyy
    }
];


//This is the tag for showing the job has already been completed
const JobComplete = (props) => {
    const {colors} = useTheme();
    const jobDoneText = {
        //Text styling
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 15,
        lineHeight: 20,

        color: "#086300",

    };
    const [done, setDone] = useState(props.done);
    return (
        <Text style = {jobDoneText}>{done ? 'Job Done':null}</Text>
    )
};


//The code below is for the entire request card, showing the details, buttons and title
const RequestCard = (props) => {

    ///////////////////////////////////////////////////////////////////////////////////////Styling////////////////////////////////////////////////////////////////////////////////////
    const { colors } = useTheme();

    //Views styling
    const cardView = {
        //Positioning and layout
        flex :1,
        flexDirection: "row",
        padding: 10,
        backgroundColor: colors.card,
        margin: 5,

        //Border
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
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

    const buttonView = {
        //Layout
        flex: 3,
        flexDirection: "column",
        alignItems : "center",
        justifyContent : "center",
        margin: 2,
        padding: 5,

        //dimensions
        maxHeight: 140,
        maxWidth:"30%",

        backgroundColor: colors.card,

    }

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

    //skills list view
    const skillsListView = {
        flex: 3,
        flexDirection: "row",
    };

    const date = {
        //Text styling
        color: colors.text,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 20,

        //Layout
        padding: 2,
    };

    const contentContainer = {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    }

    return(
        <View style = { cardView }>
          <View style = {contentContainer}>
            <TouchableOpacity style = {contentView}
                onPress = {props.onPress}
            >
                <Text style = { title }>{props.title} </Text>
                <ScrollView
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                    style = {skillsListView } >
                    {
                        props.skills.map((l,i)=>(
                            <Skills key = {i} skill = {l}/>
                        ))
                    }
                </ScrollView>
                <JobDetails details = {props.details} lines = {2} />
            </TouchableOpacity>
          </View>
          <View style = { buttonView }>
            <JobComplete done = {props.done}/>
            <Text style = { date }>{props.date}</Text>
            <DoneButton done = {props.done}/>
            <DeleteButton/>
          </View>
        </View>
    )
};

function JobRequest({navigation}){
    const { colors } = useTheme();

    ///////////////////////////////////////////////////////////////////////////////////////Styling////////////////////////////////////////////////////////////////////////////////////
    const Button = {
        //Give the button an absolute value to never change
        position: "absolute",
        top: "85%",
        left: "75%",
        width: 60,
        height: 60,
        borderRadius: 40,
    };

    const JobButton = {
        //Positioning of elelments
        flex: 1,
        flexDirection: "row",
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,
        position: "absolute",

        //Styling, color etc
        backgroundColor: '#DDBA00',
        borderRadius: 40,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return(
        <View style = {{ height: "100%" }}>
          <FlatList
            data = {jobRequestData}
            renderItem ={({item}) =>
                <RequestCard
                    title = {item.title}
                    skills = {item.skills}
                    details = { item.details }
                    done = {item.done}
                    date = {item.done ? item.dateCompleted : item.dateSet} //When the item is completed it will show the date it is completed, but when it is not completed it will show the date is set
                  onPress = {() => navigation.navigate(item.done ? 'JobCompletedDetails':'JobRequestDetails', { item })}
                ></RequestCard>
            }
            keyExtractor={(item, index) => index.toString()}
          />
            <View style = {Button}>
                <TouchableOpacity style = { JobButton }>
                    <MaterialCommunityIcons name = "plus" size = {15} color = {colors.background} /><MaterialCommunityIcons name = "wrench" size = {25} color = {colors.background} />
                </TouchableOpacity>
            </View>
        </View>

    )
}
export default React.memo(JobRequest,DeleteButton,DoneButton, JobComplete, JobDetails, RequestCard );
