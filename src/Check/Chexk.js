// import React, {useEffect, useState} from 'react';
// import {FlatList, SafeAreaView, StyleSheet, Image} from 'react-native';

// const BASE_URI = 'https://source.unsplash.com/random?sig=';
// const Check = () => {
//   const [data, setDate] = useState([]);
//   useEffect(() => {
//     fetchMore();
//   }, []);
//   const fetchMore = () => {
//     setDate(prevState => [
//       ...prevState,
//       ...Array.from({length: 10}).map((_, i) => i + 1 + prevState.length),
//     ]);
//   };
//   return (
//     <SafeAreaView>
//       <FlatList
//         data={data}
//         style={styles.list}
//         numColumns={1}
//         onEndReached={fetchMore}
//         keyExtractor={e => e}
//         renderItem={({item}) => (
//           <Image source={{uri: BASE_URI + item}} style={styles.item} />
//         )}
//       />
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   list: {
//     width: '100%',
//     backgroundColor: '#fff',
    
//   },
//   item: {
//     marginVertical:10,
//     borderRadius:10,
//     aspectRatio: 1,
//     width: '97%',
//     marginHorizontal:10,
//     flex: 1,
//     height:400
//   },
// });
// export default Check;
// import React, { useState, useCallback } from 'react';
// import { View, SafeAreaView, Text } from 'react-native';

// import MonthPicker from 'react-native-month-year-picker'

// const Check = () => {
//   const [date, setDate] = useState(new Date());
//   const [show, setShow] = useState(false);

//   const showPicker = useCallback((value) => setShow(value), []);

//   const onValueChange = useCallback(
//     (event, newDate) => {
//       const selectedDate = newDate || date;

//       showPicker(false);
//       setDate(selectedDate);
//     },
//     [date, showPicker],
//   );

//   return (
//     <SafeAreaView>
//       <Text>Month Year Picker Example</Text>
//       <Text>{moment(date, "MM-YYYY")}</Text>
//       <TouchableOpacity onPress={() => showPicker(true)}>
//         <Text>OPEN</Text>
//       </TouchableOpacity>
//       {show && (
//         <MonthPicker
//           onChange={onValueChange}
//           value={date}
//           minimumDate={new Date()}
//           maximumDate={new Date(2025, 5)}
//           locale="ko"
//         />
//       )}
//     </SafeAreaView>
//   );
// };

// export default Check;