import React, { useCallback, useState } from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { useTheme } from '@react-navigation/native';
import { Avatar, AirbnbRating } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Badge} from 'react-native-elements';

// This is the component for the job completion, it will only show 2 lines and a read more/ read less for the user to expand and shrink text
const MessageText= (props) => {
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

    };

    return (
        <View style = {{flexDirection: 'row'}}>
            <Text
                onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : props.lines}
                style={details}>{props.details}</Text>
        </View>
    )
}

//This is the chatroom card component
function MessageCard(props){
    ///////////////////////////////////////////// Styling components ////////////////////////////////////////////////
    const {colors} = useTheme();

    const cardView = {
        flex: 1,
        flexDirection:"column",
        alignItems: "flex-start",
        justifyContent: "center",

        backgroundColor: colors.card,
        borderTopWidth: 1,
        borderTopColor: colors.border,
        overflow: 'hidden',
        flexDirection: 'row',
        padding: 15,
    };


    const usernameText = {
        color : colors.text,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 17,
        lineHeight: 18,

    }

    const dateText = {
        color : colors.lightText,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 18,

    }

    const dateTextUnread = {
        color : colors.secondary,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        lineHeight: 18,

    } 

    const date_view = {
        flex:1,
        flexDirection: "row-reverse",
    }

    const messageText = {
        color : colors.text,
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,

        flex:1,
        flexDirection: "row",
        justifyContent: "flex-start", 
        padding : 6,
    };

    const userView = {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    };

    
    const usernameTextView = {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        padding : 0,
        margin: 5,
        marginLeft: 10,
    }

    const message_title = {
        flex:1,
        flexDirection: "row",
        justifyContent: "flex-start", 
    }

    const message_count_view = {
        flex:1,
        maxWidth: "10%",
        flexDirection: "row-reverse",
    } 


    const message_view = {
        flex:1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    }

    const icon_style = {

    }


///////////////////////////////////////////// Styling components ////////////////////////////////////////////////

    //get the user data from the props and store it in variable
    const chatroom = props.Data;
    const current_user = props.CurrentUser;

    console.log("Message sent by current user =>",current_user == chatroom.message.uid);

    console.log("Chatroom datetime", chatroom.message.timestamp)
    //Create a function to show only time if datetime is today, show 'yesterday' if datetime is day before and show date if datetime is not today
    const getDate = (date) => {
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate()-1);
        const date_time = new Date(date);
        const date_time_today = new Date(today);
        const date_time_yesterday = new Date(yesterday);
        if(date_time.getDate() == date_time_today.getDate() && date_time.getMonth() == date_time_today.getMonth() && date_time.getFullYear() == date_time_today.getFullYear()){
            //return the time of date_time without seconds and
            const time = `${date_time.getHours()}:${date_time.getMinutes()}`;
            return time;
               
        }
        else if(date_time.getDate() == date_time_yesterday.getDate() && date_time.getMonth() == date_time_yesterday.getMonth() && date_time.getFullYear() == date_time_yesterday.getFullYear()){
            return 'Yesterday';
        }
        else{
            return date_time.toLocaleDateString();
        }
    }


    const getInitials = (name) => {
        let initials = name.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase();
        return(initials)
    };
    //Get the initials of the name
    let initials = getInitials(chatroom.sending_user.name);
    console.log(chatroom.sending_user.name)
    return(
        <View style = {cardView}>
            <View style = {userView}>
            <Avatar
                title = {initials}
                source = {{ uri: chatroom.sending_user.profile_pic}}
                size = "medium"
                rounded
                overlayContainerStyle={{backgroundColor: '#a8a8a8'}}
                activeOpacity={0.7}
            />
            {current_user== chatroom.message.uid? 
                <View style={usernameTextView}>
                    <View style = {message_title}>
                        <Text style = {usernameText}>{chatroom.sending_user?.name}</Text>
                        <View style = {date_view}>
                            <Text style = {dateText}>{getDate(chatroom.message.timestamp)}</Text>
                        </View>
                    </View>
                    <View style = {messageText} >
                        <View style = {message_view}>
                            
                            {chatroom.message.read? 
                                <MaterialCommunityIcons style = {icon_style} name = "check-all" color = {colors.secondary} size = {14}/>
                            :
                                chatroom.message.delivered? 
                                    <MaterialCommunityIcons style = {icon_style} name = "check-all" color = {colors.lightText} size = {14}/>
                                :
                                    <MaterialCommunityIcons style = {icon_style} name = "check" color = {colors.lightText} size = {14}/>
                            }
                            <MessageText details = {chatroom.message.text} lines = {1} />
                        </View>
                    </View>
                </View>
                :
                <View style={usernameTextView}>
                    <View style = {message_title}>
                        <Text style = {usernameText}>{chatroom.sending_user.name}</Text>
                        <View style = {date_view}>
                            <Text style = {chatroom.unread_count < 1? dateText : dateTextUnread }>{getDate(chatroom.message.timestamp)}</Text>
                        </View>
                    </View>
                    <View style = {messageText} >
                        <View style = {message_view}>
                            <MessageText details = {chatroom.message.text} lines = {1} />
                        </View>
                        <View style = {message_count_view}>
                            {chatroom.unread_count <1 ?  null: <Badge value = {chatroom.unread_count} status = "primary" />}
                        </View>
                    </View>
                </View>
            
            }
        </View>
        </View>
    )

};

export {MessageCard};