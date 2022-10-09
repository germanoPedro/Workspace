import React, { useCallback, useState } from 'react'
import { View, Text,TouchableOpacity  } from 'react-native'
import { useTheme } from '@react-navigation/native';
//This is the skills tag with the golden border
function Skills(props){
    const {colors} = useTheme();
    //skills list tex
    const skillsListText = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "center",
        fontSize: 12,
        lineHeight: 16,

        padding : 8,
        margin: 4,
        color: colors.text,

        borderWidth: 2,
        borderRadius: 8,
        borderColor: colors.primary,
    };

    return(
        <Text style = {skillsListText} >{props.skill}</Text>
    )
};



//Buttons
const DeleteButton = (props) => {
    const { colors } = useTheme();

    const textStyleDelete = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 12,

        textAlign: "center",
        color : "white"
    };
    //Delete Button
    const Delete = {
        backgroundColor:colors.warning,

        //Layout
        flex : 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 7,

        padding: 10,
        height: 36,
        width: "100%",

        borderRadius: 10,
    };

    return (
        <View style = {{ flex: 2, flexDirection: "row", width: "100%" }}>
            <TouchableOpacity style = {Delete} onPress={props.onPress}>
                <Text style = {textStyleDelete} >Delete</Text>
            </TouchableOpacity>
        </View>
    )
};

//Done button has specfic rendering conditions
// if the job is done use should unselect the item from being done, but if it id done user should be able to select the item as done
const DoneButton = (props) => {
    const { colors } = useTheme();

    const textStyleDone = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 12,

        textAlign: "center",
        color : "white"
    };
    //Done Button
    const Done = {
        backgroundColor:colors.grant,

        //Layout
        flex : 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 7,

        padding: 10,
        height: 36,
        width: "100%",

        borderRadius: 10,
    };

    const [done, setDone] = useState(props.done);
    return (
        <View style = {{ flex: 2, flexDirection: "row", width: "100%" }}>
            {
                done ?
                    null
                :
                <TouchableOpacity style = {Done} onPress={props.onPress}>
                    <Text style = {textStyleDone} >Done</Text>
                </TouchableOpacity>
            }
        </View>
    )
};



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
        fontSize: 13,
        lineHeight: 20,
    };
    const readMore = {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: 21,
        marginTop: 10,
        color: "#838383",
        textAlign: "center",

    };

    return (
        <View style = {{}}>
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
export {
    Skills,
    DeleteButton,
    DoneButton,
    JobDetails,
}
