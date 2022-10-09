import React, { useCallback, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

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
        lineHeight: 20,
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

    };

    return (
        <View style = {{flex:1}}>
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
function CancelButton(props){
    const { colors } = useTheme();

    const CancelButton = {
        //Layout
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        margin: 8,

        maxWidth: 200,

        //Styling
        backgroundColor: colors.warning,
        borderRadius: 10,
    };

    const CancelButtonText = {
        //Text styling
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 13,
        lineHeight: 13,

        color: colors.white,

    };

    return(
        <TouchableOpacity style = {CancelButton}>
          <Text style = {CancelButtonText}>Cancel</Text>
        </TouchableOpacity>
    )
};

function PromoteButton(props){
    const { colors } = useTheme();

    const PromoteButton = {
        //Layout
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        margin: 8,

        maxWidth: 200,

        //Styling
        backgroundColor: colors.grant,
        borderRadius: 10,
    };

    const PromoteButtonText = {
        //Text styling
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 13,
        lineHeight: 13,

        color: colors.white,

    };

    return(
        <TouchableOpacity style = {PromoteButton}>
          <Text style = {PromoteButtonText}>Promote</Text>
        </TouchableOpacity>
    )
};


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
        borderColor: colors.primary,


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


    const viewButtons = {
        flex : 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 13,
        margin: 5,
    };

    return(
        <View style = {{flex:1}}>
            <TouchableOpacity style = { detailsView }>
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
            </TouchableOpacity>
            <View style = {viewButtons}>
                <CancelButton/>
                <PromoteButton/>
            </View>
        </View>
    )
};


function BudgetView(props){
    const { colors } = useTheme();

    const budgetView = {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 16,
        margin: 5,

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

function JobRequestDetails({route}){
    const { colors } = useTheme();

    return(
        <ScrollView>
          <Details
            title = {route.params.item.title}
            skills = {route.params.item.skills}
            details = {route.params.item.details}
          />
        <BudgetView budget = {route.params.item.budget}/>
        </ScrollView>
    )

}

export default React.memo(JobRequestDetails, );
