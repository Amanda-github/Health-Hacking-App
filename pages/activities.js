import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from "react-native";
import { Card, ThemeProvider, colors } from "react-native-elements";
import RNPickerSelect from 'react-native-picker-select';

const Activities = () => {
    return (
        <ThemeProvider>
            <View>
                <Text>
                    <h1>Activities page</h1>{" "}
                </Text>
                <Card style={{ width: 2000 }}>
                    <Text style={{ margin: 20 }}>
                        <h2>'BARCHART or something'</h2>
                        {/* <BarChart></BarChart> */}
                    </Text>
                </Card>
            </View>
        </ThemeProvider >
    )
}

export default Activities

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: 300,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 1,
        backgroundColor: 'white'

    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
        borderRadius: 1,
        backgroundColor: 'white'
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    },
    background: {
        width: '100%',
        height: '100%',
    }
})







// const Activities = () => {
//     return (
//         <ThemeProvider>
//             <View>
//                 <Card style={{ width: 2000 }}>
//                     <RNPickerSelect
//                         placeholderTextColor={{ color: 'black' }} placeholder={{ label: 'sports' }} onValueChange={(value) => console.log(value)}
//                         items={[
//                             { label: 'Football', value: 'football' },
//                             { label: 'Baseball', value: 'baseball' },
//                             { label: 'Hockey', value: 'hockey' },
//                         ]}
//                     />

//                 </Card>
//                 <Card style={{ width: 2000 }}>

//                 </Card>
//             </View>
//         </ThemeProvider>
//     );
// };
// export default Activities;
