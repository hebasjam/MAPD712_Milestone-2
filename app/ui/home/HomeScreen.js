import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await fetch("https://21e4390f-5866-4b0e-90a3-b9adf27d1f32.mock.pstmn.io/patients");
        const jsonResponse = await response.json();
        setData(jsonResponse);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchUsersData();
  }, []);

  const renderAppointmentItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleAppointmentPress(item)}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.date}>{"11:00 AM"}</Text>
    </TouchableOpacity>
  );

  const handleAppointmentPress = (appointment) => {
    // Handle the press event (e.g., navigate to appointment details)
    console.log('Appointment Pressed:', appointment);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hello,</Text>
        <Text style={[styles.headerText, styles.boldText]}> Dr Jane!</Text>
      </View>

      <Text style={styles.sectionTitle}>Today's Appointments</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAppointmentItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#0582b9',
  },
  boldText: {
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#012433',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'column',
    margin: 8,
    backgroundColor: 'white',
    alignItems: 'left',
    width: '100%',
    height: 70,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    padding: 15, // Adjust padding as needed
    borderWidth: 1,
    borderColor: '#ddd',
  },
  name: {
    marginVertical: 4, // Adjust margin as needed
  
  },
  date: {
    marginTop: 4,
    width: '100%',
    backgroundColor: '#0582b9',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
