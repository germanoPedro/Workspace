import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AuthContext } from '../components/context';
import { useTheme } from '@react-navigation/native';

export function DrawerContent(props) {

    const Theme = useTheme();

    const { toggleTheme, signOut } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View
                  style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title theme = {Theme} style={styles.title}>John Doe</Title>
                                <Caption theme = {Theme} style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph  theme = {Theme} style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption  theme = {Theme} style={styles.caption}>Jobs</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph  theme = {Theme} style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption  theme = {Theme} style={styles.caption}>Trusters</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section
                        theme = {Theme}
                      style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="home-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="account-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="graph-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Analytics"
                            onPress={() => {props.navigation.navigate('AnalyticsScreen')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="open-in-new"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Promotion"
                            onPress={() => {props.navigation.navigate('PromotionScreen')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="cog-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="account-check-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section
                        theme = {Theme}
                      title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text
                                theme = {Theme}
                                >Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={Theme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section  theme = {Theme} style={styles.bottomDrawerSection}>
                <DrawerItem
                    theme = {Theme}
                    icon={({color, size}) => (
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                  onPress = {()=>{
                      signOut()
                    console.log('signout')
                    }}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
