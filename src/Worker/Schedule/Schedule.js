import { useTheme } from '@react-navigation/native';
import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import { Details } from "../Jobs/subScreens/assets/components/components";
import {JobCostCard} from "./ScheduleComponents";

const testIDs = require('./testIds');

const today = new Date();
class AgendaScreen extends React.PureComponent{
  constructor(props) {
    super(props);

    this.state = {
      items: {}
    };
  };


  render() {
    //use theme from props
    const {theme} = this.props
    return (
      <Agenda
        testID={testIDs.agenda.CONTAINER}
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={today}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#43515c'},
        //    '2017-05-09': {textColor: '#43515c'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        theme={{
          ...theme,
          calendarBackground: theme.colors.card ,
          backgroundColor: theme.colors.background,
          indicatorColor: theme.colors.indicatorColor,
        }}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        // hideExtraDays={false}
      />
    );
  }

  loadItems(day) {
      const newItems = {
        '2021-06-23': [{
                title: "Photography",
                skills: ["Arts"],
                done: false,
                rating: null,
                budget: "R100",
                details: "I need a photographer for my sisters wedding.",
                dateSet: "20/12/2019", // dd/mm/yyyy
                dateCompleted: "25/12/2019", // dd/mm/yyyy
                User:     {
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
                                },
        }],
        '2021-06-29': [{
                title: "Photography",
                skills: ["Arts"],
                done: false,
                rating: null,
                budget: "R100",
                details: "I need a photographer for my sisters wedding.",
                dateSet: "20/12/2019", // dd/mm/yyyy
                dateCompleted: "25/12/2019", // dd/mm/yyyy
                User:     {
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
                                },
        }],
        '2021-06-14': [{
                title: "Photography",
                skills: ["Arts"],
                done: true,
                rating: 4,
                budget: "R100",
                details: "I need a photographer for my sisters wedding.",
                dateSet: "20/12/2019", // dd/mm/yyyy
                dateCompleted: "25/12/2019", // dd/mm/yyyy
                User:     {
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
                                },
        }],
        '2021-05-25': [{
                title: "Photography",
                skills: ["Arts"],
                done: true,
                rating: 4,
                budget: "R100",
                details: "I need a photographer for my sisters wedding.",
                dateSet: "20/12/2019", // dd/mm/yyyy
                dateCompleted: "25/12/2019", // dd/mm/yyyy
                User:     {
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
                                },
        }],
        '2021-06-25': [{
                title: "Photography",
                skills: ["Arts"],
                done: true,
                rating: 4,
                budget: "R100",
                details: "I need a photographer for my sisters wedding.",
                dateSet: "20/12/2019", // dd/mm/yyyy
                dateCompleted: "25/12/2019", // dd/mm/yyyy
                User:     {
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
                                },
        }],
      };
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems
      });
        }

  renderItem(item) {
    ///////////////////////////////////////////// Styling components ////////////////////////////////////////////////
    const {theme} = this.props
    const {colors} = theme;

    const contentView = {
        //Layout
        flex: 2,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 10,
        margin: 10,

        //Dimensions
        backgroundColor: colors.card,

        borderRadius: 15,
    };

///////////////////////////////////////////// Styling components ////////////////////////////////////////////////

    const Client = item.User;

    return (
      <TouchableOpacity
        testID={testIDs.agenda.ITEM}
        style={[styles.item, {height: item.height}]}
        onPress={() => {
          const client = item.User
          this.props.navigation.navigate('JobScheduleDetailsScreen', { item, client })}}
        style = {contentView}
      >
        <JobCostCard
            item = {item}
            done = {item.done}
        />
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});

// wrap class in function and export to use theme
export default function(props) {
  const theme = useTheme();

  return <AgendaScreen {...props} theme={theme}/>
}
