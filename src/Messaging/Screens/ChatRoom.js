
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useTheme } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

//Import firebase and firestore
/*import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";*/


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//
// -------------------------------------- DONT CHANGE THE CODE BELOW -----------------------------------------------------------------------------------------------
//import and store firebase config data
////import {firebaseConfigData} from '../../../firebaseConfig';

//store firebaseconfig data in a variable
////const firebaseConfig = firebaseConfigData; 


/*if(firebase.apps.length === 0){
  initializeApp(firebaseConfig);
};*/

//const db = getFirestore(firebaseApp);
//const auth = getAuth(firebaseApp);
// ------------------------------------------- DONT CHANGE THE CODE ABOVE ----------------------------------------------------------------------------------------------

export default function ChatRoomScreen({navigation, route}){

    //Get current logged in user id
//    const [user] = useAuthState(auth);

    const chatroom = route.params.item
    //Get message subcollection in the current chatroom using chatroom id and store in messages ref
    //const messagesRef = db.collection("ChatRooms").doc(chatroom.chatroom_uid).collection("Messages");

    //Get the last 25 messages from chatroom while listening to any changes in the collection
    const [messages, setMessages] = React.useState([]);
    /*React.useEffect(() => {
        messagesRef.orderBy("timestamp", "asc").limit(25).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()));
        });
    }, []);*/


    //get currently loged in user user id and store in uid
    const uid = firebase.auth().currentUser.uid;


/////////////////////////////////////////////////////////// Styling components ////////////////////////////////////////////////////////
    const {colors} = useTheme();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Create Message component
    const MessageCard = (props) => {
        //convert timestamp into readable date format
        const date = new Date(props.message.timestamp.seconds * 1000);

        const getTime = (date) => {
            var hours = date.getHours();
            var minutes = "0" + date.getMinutes();
            //Remove the seconds from the time
            var formattedTime = hours + ':' + minutes.substr(-2);

            return formattedTime;
        };
        
        /////////////////////////////////////////////////////////// Styling components ////////////////////////////////////////////////////////
            const {colors} = useTheme();

            //Create a chat blue bubble that will align to the right of the screen
            const bubbleRight = {
                backgroundColor: colors.secondary,
                borderRadius: 20,
                padding: 10,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 10,
                marginTop: 10,
                maxWidth: '70%',
                alignSelf: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',
            };

            //Create a chat grey bubble that will align to the left of the screen
            const bubbleLeft= {
                backgroundColor: colors.border,
                borderRadius: 20,
                padding: 10,
                marginLeft: 10,
                marginRight: 10,
                marginBottom: 10,
                marginTop: 10,
                maxWidth: '70%',
                alignSelf: 'flex-start',
                flexDirection: 'row',
                alignItems: 'center',

            };

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        var time = getTime(date);
        return(
            uid == props.message.uid?
                <View style={bubbleRight}>
                    <View style={{marginRight: 10}}>
                            <Text style={{fontSize: 14, color: colors.white }}>{props.message.text}</Text>
                    </View>
                    <View style={{alignItems: 'flex-end', justifyContent:'flex-end'}}>
                        <Text style={{fontSize: 11, color: colors.white}}>{time}</Text>
                    </View>
                </View>
            :
                <View style={bubbleLeft}>
                    <View style={{marginRight: 10}}>
                            <Text style={{fontSize: 14, color: colors.text}}>{props.message.text}</Text>
                    </View>
                    <View style={{alignItems: 'flex-end', justifyContent:'flex-end'}}>
                        <Text style={{fontSize: 11, color: colors.lightText}}>{time}</Text>
                    </View>
                </View>
        )
    }


/*
console.log(chatroom.chatroom_uid)
return(
        <FlatList 
            style={{flex: 1}} 
            data={messages} 
            renderItem={({item}) => <MessageCard message={item}/>}
        />
    )*/
}