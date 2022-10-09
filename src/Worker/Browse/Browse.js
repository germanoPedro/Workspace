import React, { Component, useCallback, useEffect, useState } from 'react';

import { Image, Button, FlatList, View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { ListItem, Avatar, Rating, AirbnbRating, SearchBar } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

import { NavigationContainer, useNavigation, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


        //--------------------------------------------------This is a dictionary of job categories ----------------------------------------------------------------
const DATA =[ {
                id: 1,
                category: "Business & Proffessional",
                skill: [ "Accounting", "Auditors", "Business Consultants", "Cellphone Repairs", "Company Registrations", "Debt Collection", "Debt Counselling", "Estate Agents",
                        "Financial Advisors", "Graphic Designers", "Insurance", "Loans", "Medical Aid", "Printing", "Recruitment Agencies", "Signs", "Stationery"
                    ],
                image: require("../../../assets/CategoryCardImages/BusinessProfessional.png"),
            },
            {
                id: 2,
                category: "Cars & Automotive",
                skill: ["Auto Electricians", "Auto Glass", "Batteries", "Brake and Clutch", "Car aircon Regas & Repairs", "Car Tracking", "Car Window Tinting", "Brake and Clutch",
                        "Car Aircon Regas & Repairs", "Car Tracking", "Car Window Tinting", "Engine Overhauls", "Fuels", "Gearboxes", "Mechanics", "Panel Beaters", "Towing", "Tow Bars"],
                image: require("../../../assets/CategoryCardImages/CarsAutomotive.png"),
            },
            {
                id: 3,
                category: "Computers & Technology",
                skill: ["Apple Repairs", "Computers", "Computer Courses", "Computer Repairs", "DSTV Installers", "Internet Solutions", "Laptop Repairs", "Logo Design", "Networking",
                        "Office Equipment", "Printer Cartridges", "Website Designers"],
                image: require("../../../assets/CategoryCardImages/ComputersTechnology.png"),
            },
            {
                id: 4,
                category: "Events",
                skill: ["Birthday Cakes", "Cake Shops", "DJ's", "Dressmakers", "Event Decorations", "Event Planners", "Florists", "Make Up Artists", "Party Planner", "Photographer", "Tent Hire",
                        "Venues", "Videographers"],
                image: require("../../../assets/CategoryCardImages/Events.png"),
            },
            {
                id: 5,
                category: "Family Care",
                skill: ["Baby Sitter" , "Creches", "Day Care Centeres", "Pre-Schools"],
                image: require("../../../assets/CategoryCardImages/FamilyCare.png"),
            },
            {
                id: 6,
                category: "Health, Wellness & Beauty ",
                skill: ["Beauty Salons", "Chiropractor", "Counsellors", "Dentists", "Dermatologists", "Dieticians", "Hair Salons", "Laser Clinics", "Marriage Counsellors", "Massage Therapists",
                        "Medical Suppliers", "Plastic Surgeons", "Personal Trainers", "Physiotherapist", "Psychologist"],
                image: require("../../../assets/CategoryCardImages/HealthWellnessBeauty.png"),
            },
            {
                id: 7,
                category: "Home, Building & Trade",
                skill: ["Air Conditioning", "Aluminium doors and Windows", "Appliance repairs", "Architects", "Awnings", "Balustrades", "Bathroom Renovations", "Blinds", "Borehole Drillers",
                        "Builder","Building Materials", "Burglar Bars", "Carpenters", "Carpeting", "Carpet Cleaning", "Carports", "Caterers", "Ceiling Installers", "Cleaning Materials", "Cleaning Services",
                    "Concrete Slabs", "Curtains", "Doors", "Drywalls", "Electricians", "Electric Fencing", "Fencing", "Flooring", "Fridge Repairs", "Garage Doors", "Garage Door Motors", "Gardeners",
                        "Gas Installers", "Gas Suppliers", "Gates", "Gate Motors", "Generators", "Glass Works", "Guttering", "Handymen", "High Pressure Cleaning", "Home Improvements", "Interior Designing",
                        "Irrigation", "Kitchen Renovations", "Laminate Flooring", "Landscaping", "Laundry Services", "Locksmiths", "Marble amd Granite Suppliers", "Movers", "Office Cleaning", "Palisade Fencing",
                        "Painters", "Paving", "Personal Protection Equipment", "Plant Hire", "Plastering", "Plumbers", "Pest Control", "Pool Cleaning", "Precast Fencing", "Prepaid Electricity Meters", "Roofing",
                        "Rubble Removal", "Security Gates", "Shadeports", "Shower Doors", "Skip Hire", "Solar Systems", "Solar Geysars", "swimming Pool Builders", "Swimming Pool Supplies", "Tar Surfacing",
                        "Thatch Roofing", "Tiling", "Tlb Hire", "Toilet Hire", "Town Planners", "Tree Felling", "TV installers", "Tv repairs", "Upholsteres", "Upholstery Cleaning", "Waterproofing", "Welders",
                        "Wendy Houses", "Window Cleaning", "Window Tinting", "Wire Mesh Fencing", "Wooden Decking"
                    ],
                image: require("../../../assets/CategoryCardImages/HomeBuildingTrade.png"),
            },
            {
                id: 8,
                category: "Hospitality",
                skill: ["Team Building"],
                image: require("../../../assets/CategoryCardImages/Hospitality.png"),
            },
            {
                id: 9,
                category: "Legal",
                skill: ["Conveyancers", "Divorce Lawyers", "Labour Lawyers", "Lawyers"],
                image: require("../../../assets/CategoryCardImages/Legal.png"),
            },
            {
                id: 10,
                category: "Lessons",
                skill: ["Driving Lessons", "Firearm Training", "First Aid", "Forklift Training", "Life Coaches", "Make Up Courses", "Sewing & Fashion Lessons"],
                image: require("../../../assets/CategoryCardImages/Lessons.png"),
            },
            {
                id: 11,
                category: "Pets",
                skill: ["Groomers"],
                image: require("../../../assets/CategoryCardImages/Pets.png"),
            },
            {
                id: 12,
                category: "Security",
                skill: ["Access Control", "Alarm Systems", "Armed Rosponse", "Car Alrams", "CCTV", "Fire Safety", "Private Investigators", "Security", "Security Training", "Tracing"],
                image: require("../../../assets/CategoryCardImages/Security.png"),
            },
            {
                id: 13,
                category: "Transport",
                skill: ["Couriers", "School Transport", "Shuttle Services", "Taxis", "Transportation", "Travel Agents"],
                image: require("../../../assets/CategoryCardImages/Transport.png"),
            },

        ]

const CategoryButton = (props) => {
    const categoryButtons= {
        height: 470,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 3,
        backgroundColor: 'transparent',
        shadowColor: "#000",
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

        };
    const background = {
        flex: 1,
        justifyContent: 'flex-end',
    };

    const textBackground ={
        padding: 20,
        borderRadius: 10,
    };
    const categoryText = {
        alignSelf: "center",
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 17,
        lineHeight: 22,
        /* identical to box height, or 129% */

        letterSpacing: 1.592,

        color: "#FFFFFF",

    };
     //////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    return (
    <TouchableOpacity
        color = 'white'
        shadowColor = 'black'
        style = {categoryButtons}
        onPress = {props.onPress}
    >
        <ImageBackground source={props.image}
            style = {background}
            imageStyle= {{ borderRadius: 14 }}
        >
            <LinearGradient
                //Background Linear gradient
                colors={['transparent', 'rgba(52, 52, 52, 0.65)']}
                style = {textBackground}
            >
                <Text style = {categoryText} >{props.category}</Text>
            </LinearGradient>
        </ImageBackground>
    </TouchableOpacity>
    );
};

function Browse({navigation}){
   const { colors } = useTheme();
/////////////////////////////////////////////////////////// Styling components ////////////////////////////////////////////////////////

const view ={
    backgroundColor: colors.background,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}

const content = {
    width : '100%',
    paddingHorizontal: 10,
    maxWidht: '70%',
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //FlatList Optimization, use Item layout so that flatlist doesn't neet to calculate item layout
    const ITEM_HEIGHT = 470;
    const getItemLayout = useCallback(
        (data, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index
        }),
        []
    );

    return(
        <View
                style = { view }
        >
          <FlatList

            showsHorizontalScrollIndicator={false}
            style = { content }

            //--------------------------------------------------This is a dictionary of job categories ----------------------------------------------------------------
            data = {DATA}

            //---------------------------------------------------------------------------------------------------------------------------------------------------------------------
            renderItem = {({item}) =>
                <CategoryButton
                    item={item}
                    image ={item.image}
                    category={item.category}
                    onPress = {() => navigation.navigate('JobScreen', {item} )}
                />
                        }

            keyExtractor={(item, index) => index.toString()}

            //optimization
            initialNumToRender = {3}
            getitemLayout = {getItemLayout}
          />
        </View>
    )
};

function areEqual(prevProps, nextProps){
    return prevProps.image === nextProps.image && prevProps.category === nextProps.category;
};
//Exporting the memoized function
export default React.memo(Browse, CategoryButton, areEqual);
