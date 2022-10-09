import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-paper';
import { JobDetails } from "../../Client/JobRequests/Components/RequestComponents";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SettingsScreen = () => {
  const {colors} = useTheme();
  //////////////////////////////Style ///////////////////////

  const ProfileView = {
    flexDirection: 'row',
    alignItems:'center',
    margin: 15,

    borderBottomWidth: 2,
    borderBottomColor: colors.border
  };

  //Text Views
  const TextView = {
    margin : 15,
    flexDirection : 'column',
    justfyContent: "center",
  };

  const descriptionView ={
    width : "80%",
  };

  const title = {
    color : colors.text,
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 23,
  };

  const caption = {
    color : colors.lightText,
    fontSize: 14,
    lineHeight: 16,

  };

  const User = {
    name: "John Doe",
    username: "@j_doe",
  };

  ///Settings

  const settings = {

  };


  const settingsButton = {
    margin : 10,
    padding: 15,
    flex: 1,
    flexDirection : 'row',
  }

  const settingsButtonText = {
    marginLeft : 15,
    color : colors.text,
    fontFamily : "Roboto",
    fontSize: 16,
  }

  ////////////////////////// Style ///////////////////////////



    return (
      <ScrollView>
        <View style={ProfileView}>
            <Avatar.Image
                style = {{margin: 10}}
                source={{
                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                }}
                size={100}
            />
            <View style={TextView}>
              <Text style={title}>{User.name}</Text>
              <Text style={caption}>{User.username}</Text>
            </View>
        </View>
        <View style = {settings}>
          {/* Account button */}
          <TouchableOpacity style = { settingsButton }>
            <MaterialCommunityIcons name = "account-outline" size = {25} style = {{ color : colors.lightText}} color = { colors.text }/>
            <Text style = {settingsButtonText}>Account</Text>
            <View style = {{flex: 1,flexDirection: "row-reverse" }}>
                <MaterialCommunityIcons name = "chevron-right" size = {25} color = { colors.lightText } />
            </View>
          </TouchableOpacity>

          {/* Privacy button */}
          <TouchableOpacity style = { settingsButton }>
            <MaterialCommunityIcons name = "lock-outline" size = {25} style = {{ color : colors.lightText}} color = { colors.text }/>
            <Text style = {settingsButtonText}>Privacy & Security</Text>
            <View style = {{flex: 1,flexDirection: "row-reverse" }}>
                <MaterialCommunityIcons name = "chevron-right" size = {25} color = { colors.lightText } />
            </View>
          </TouchableOpacity>

          {/* Support button */}
          <TouchableOpacity style = { settingsButton }>
            <MaterialCommunityIcons name = "account-check-outline" size = {25} style = {{ color : colors.lightText}} color = { colors.text }/>
            <Text style = {settingsButtonText}>Support</Text>
            <View style = {{flex: 1,flexDirection: "row-reverse" }}>
                <MaterialCommunityIcons name = "chevron-right" size = {25} color = { colors.lightText } />
            </View>
          </TouchableOpacity>

          {/* About button */}
          <TouchableOpacity style = { settingsButton }>
            <MaterialCommunityIcons name = "information-outline" size = {25} style = {{ color : colors.lightText}} color = { colors.text }/>
            <Text style = {settingsButtonText}>About</Text>
            <View style = {{flex: 1,flexDirection: "row-reverse" }}>
                <MaterialCommunityIcons name = "chevron-right" size = {25} color = { colors.lightText } />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
};

export default SettingsScreen;
