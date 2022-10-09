
import React, { useCallback, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Avatar, AirbnbRating } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// This is the component for the job completion, it will only show 2 lines and a read more/ read less for the user to expand and shrink text
const JobDetails = (props) => {
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
        lineHeight: 18,
    };
    const readMore = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 15,
        lineHeight: 21,
        marginTop: 10,
        color: colors.lightText,
        textAlign: "center",
        color: colors.lightText,

    };

    return (
        <View style = {{flex:1, height: "100%"}}>
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


//This is the skills tag with the golden border
const Skills = (props) => {
    const {colors} = useTheme();
    //skills list tex
    const skillsListText = {
        flex: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        padding: 8,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#DDBA00",


        //Text styling
        color: colors.text,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "center",
        fontSize: 13,
        lineHeight: 18,
    };

    return(
        <Text style = {skillsListText} >{props.skill}</Text>
    )
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
    //skills list view
    const skillsListView = {
        flex: 3,
        flexDirection: "row",
    };


    return(
        <View style = {detailsView}>
                <Text style={jobTitles}>{props.title}</Text>
                <ScrollView
                    horizontal = {true}
                    showsHorizontalScrollIndicator = {false}
                    style = {skillsListView } >
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
        fontWeight: "bold",
        fontSize: 18,
        lineHeight: 18,

        color: colors.text,
    };

    const budgetText = {
        //Text styling
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: 20,
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
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 20,
        color: colors.text,

        padding: 3,
    }

    const date= {
        alignItems: "center",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 15,
        lineHeight: 20,
        color: colors.lightText,

        padding: 6,
    };

    const JobDone = {
        alignItems: "center",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 15,
        lineHeight: 20,
        color: colors.grant,
    };

    return(
        <View style = { dateView }>
            <Text style = {JobDone}>{props.done ? "Job Done" : null}</Text>
            <Text style = {title}>Date of Request</Text>
            <Text style = { date }>{props.dateSet}</Text>
            <Text style = {title}>Date Completed</Text>
            <Text style = { date }>{props.dateCompleted}</Text>
        </View>
    );
};

const worker = {
    name: 'Chris Jackson',
    time: "2021/02/05",
    location: "North Pretoria",
    rating: 2,
    description: "I am a full stack web developer, I have worked on many projects and helped many people get up and running with their business websites and personal website portfolios, With me you will get an affordable website with the the highest of qualities",
    avatar: "https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300",
    available: true,
    travelDistance: "5km",
    trusters: 341,
    reporters: 1,
    totalJobs: 56,
    skills: [ {key: "Computer"},
            {key: "Technology"} ]
};
function WorkerButton(props){
    const {colors} = useTheme();

    const workerView = {
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
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 20,
        color: colors.text,

    };

    const buttonWorker = {
        flex : 1,
        flexDirection: "row",
        alignItems: "center",

        padding : 15,
    };

    const workerName = {
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
        <View style = {workerView}>
            <Text style = {title}>Worker</Text>
            <TouchableOpacity
              style = { buttonWorker }
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
                <Text style = { workerName }>{props.name}</Text>
            <View style = {{flex: 1,flexDirection: "row-reverse" }}>
                <MaterialCommunityIcons name = "chevron-right" size = {25} color = { colors.lightText } />
            </View>
            </TouchableOpacity>
            <AirbnbRating
                count={5}
                defaultRating={props.rating}
                size={20}
                showRating = {false}
                isDisabled
                style = { profileRating }
            />
        </View>
    )
};

function JobCompletedDetails({navigation,route}){
    const { colors } = useTheme();
    const item = worker;
    return(
        <ScrollView style = {{flex:1}}>
          <Details
            title = {route.params.item.title}
            skills = {route.params.item.skills}
            details = {route.params.item.details}
          />
        <BudgetView budget = {route.params.item.budget}/>
        <DisplayDate
            dateSet = { route.params.item.dateSet }
            dateCompleted = { route.params.item.dateCompleted }
            done = {route.params.item.done}
        />
        <WorkerButton
            image = {worker.avatar}
            name = {worker.name}
            rating = {worker.rating}
            onPress = {() => navigation.navigate('ClientViewWorkerProfile', {item})}
        />
        </ScrollView>
    )

}

export default React.memo(JobCompletedDetails, );
