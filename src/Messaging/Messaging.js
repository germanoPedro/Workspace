import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useTheme } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

//Import messaging component
import {MessageCard} from './Components/MessageComponents';

//Import firebase and firestore
/*import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";*/


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//
/* -------------------------------------- DONT CHANGE THE CODE BELOW -----------------------------------------------------------------------------------------------
//import and store firebase config data

import {firebaseConfigData} from '../../firebaseConfig';
const firebaseApp = firebase.initializeApp({ firebaseConfigData });
//store firebaseconfig data in a variable
const firebaseConfig = firebaseConfigData; 


if(firebase.apps.length === 0){
  initializeApp(firebaseConfig);
};

var db = getFirestore(firebaseApp);

// ------------------------------------------- DONT CHANGE THE CODE ABOVE ----------------------------------------------------------------------------------------------
*/

export default function Messaging({navigation}){

//Create react array hook varaible for chatrooms
const [chatrooms, setChatrooms] = React.useState([]);

const addNewChatroom= (item) => {
    setChatrooms([...chatrooms, item]);
}

//get currently loged in user user id and store in uid
//const uid = firebase.auth().currentUser.uid;

/*
useEffect(() => {
    //Create message object
        var dummy_data= {
                key: '1',
                chatroom_uid: "z2rrX3vndAPgkERZ01bcqTnTzui2",
                sending_user: {
                    username : 'theawesomejess',
                    name: "Dorothy Smith",
                    profile_pic:  'https://i.pravatar.cc/300?img=1',
                },
                //Example of a message received that has not been opened yet
                message: {
                    text: "Hello there",
                    uid: "z2rrX3vndAPgkERZ01bcqTnTzui2",
                    timestamp: '2021/12/08, 10:56:50',
                    //Sending section
                    read: true,
                    delivered: false,
                },
                current_uid: 'dummy id', 
                unread_count: 0,
            }
        

    //Get the chatrooms from the ChatRooms collection in firestore where the current user is in the users array 
    db.collection('ChatRooms').where('users', 'array-contains', uid).onSnapshot(snapshot => {
        snapshot.forEach((chatroom) => {
            //Get the user that is not equal to the current user
            var other_user = chatroom.data().users.filter(user => user !== uid);
            console.log(other_user[0]);
            //Get the other user from users collection using other_user
            db.collection('Users').doc(other_user[0]).get().then(user => {
                //Store in sending_user variable
                var sending_user = user.data();

                //Messages reference
                //const messageRef = db.collection('ChatRooms').doc(chatroom.id).collection('Messages'); 
                //Listen to the latest message of the chatroom
                messageRef.orderBy('timestamp', 'desc').limit(1).onSnapshot(snapshot=> {
                    //Store the latest message in a variable
                    var latest_message = snapshot.docs[0].data();
                    console.log("Last message","=>",latest_message);

                    //convert firebase timestamp to readable date
                    var timestamp= new Date(latest_message.timestamp.seconds * 1000);



                    //listen to realtime updates of all the unread messages in the chatroom where uid is not equal to current logged in user
                    messageRef.where('uid', '!=', uid).where('read', '==', false).onSnapshot(snapshot => {
                        //Store the number of unread messages in a variable
                        var unread_count = snapshot.size;

                        //Create chatroom object
                        var chatroom_obj = {
                            chatroom_uid: chatroom.id,
                            sending_user: sending_user,
                            message: {
                                text: latest_message.text,
                                uid: latest_message.uid,
                                timestamp: timestamp,
                                read: latest_message.read,
                                delivered: latest_message.delivered,
                            },
                            unread_count: unread_count,
                        };

                        //check if the chatroom uid exists in the chatroom array, if it does not then add a new chatroom if it does then update the message section
                        if(chatrooms.filter(chatroom => chatroom.chatroom_uid === chatroom_obj.chatroom_uid).length === 0){
                            addNewChatroom(chatroom_obj);
                        }
                    });
                });
            });
        });
        
    });
}, []);*/



/////////////////////////////////////////////////////////// Styling components ////////////////////////////////////////////////////////
    const {colors} = useTheme();
    const title_view  = {
        flex: 1,
        flexDirection:"column",
        justifyContent: "center",

    };
    const title = {
        color : colors.text,

        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 28,
        margin : 10,
    };

    const content_view = {
        flex: 1,
        backgroundColor: colors.card,
        maxHeight: "12%",
        minHeight: "12%",
        paddingHorizontal: 5,
        flexDirection: "row",
        justifyContent: "center",
    };

    //Align the icon to the rign of the screen 
    const icon_style = {
    };


    //Message Styling
    const messages_view = {
        flex: 1,
        backgroundColor: colors.background,
    }

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
        backgroundColor: colors.secondary, 
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

return(
        <View style = {title_view}>
            <View style = {content_view}>
                <Text style = {title}>Chats</Text>
                <View style = {{ flexDirection: 'row-reverse', flex: 1,padding: 15, }}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons style = {icon_style} name = "magnify" color = {colors.lightText} size = {25}/>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList

                style = { messages_view}

                data = {chatrooms}
                renderItem = {({item}) => 
                <TouchableOpacity 
                        onPress = {() => {
                            //set unread_count to 0 
                            console.log(uid)
                            navigation.navigate('ChatRoomScreen', {item})}}
                >
                    <MessageCard Data= {item} CurrentUser = {uid}/>
                </TouchableOpacity>
                } 
                keyExtractor = {item => item.id}

            />
            <View style = {Button}>
                <TouchableOpacity style = { JobButton }>
                    <MaterialCommunityIcons name = "plus" size = {15} color = {colors.background} /><MaterialCommunityIcons name = "message" size = {25} color = {colors.background} />
                </TouchableOpacity>
            </View>
            
       </View>
    )
}
