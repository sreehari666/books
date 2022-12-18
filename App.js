import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button,FlatList, ScrollView} from 'react-native';
import { getAllBooks,addBook,deleteAllBooks } from './realm';

export default function App() {
  const [title,setTitle] = useState('')
  const [auther,setAuther] = useState('')
  const [details,setDetails] = useState('')
  const [books,setBooks] = useState(getAllBooks)
  const [count,setCount] = useState(books.length+1)

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.recordID}</Text>
      <View style={{marginRight:5,width:'50%'}}>
        <Text>{item.title}</Text>
        <Text>{item.auther}</Text>
      </View>
      <View style={{flexDirection:'row',width:'50%',justifyContent:'flex-end',}}>
        <Text style={{marginRight:8}}>{item.details}</Text>
      </View>
      
    </View>

  );

  return (
    
      <View style={styles.container}>
        <TextInput style={styles.title} placeholder="Enter book title" onChangeText={e=>setTitle(e)} />
        <TextInput style={styles.title} placeholder="Enter auther" onChangeText={e=>setAuther(e)} />
        <TextInput style={styles.title} placeholder="Enter details" onChangeText={e=>setDetails(e)} />
        <View style={styles.btnContainer}>
          <Button title='Add' onPress={()=>{
            addBook(count.toString(),title,auther,details)
            setCount(count+1)
            setBooks(getAllBooks)
          }} />
          <Button title='Delete all' color='red' onPress={()=>{
             deleteAllBooks();
             setBooks(getAllBooks)
             setCount(1)
            }} />
        </View>
        <ScrollView>

        
          <FlatList
            data={books}
            renderItem={renderItem}
            keyExtractor={item => item.recordID}
           />
        
        </ScrollView>
        
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  title:{
    width:'100%',
    height:50,
    borderWidth:1,
    borderColor:'#000',
    borderRadius:5,
    paddingLeft:20,
    marginTop:10,
  },
  btnContainer:{
    height:100,
    width:'100%',
    justifyContent:'space-between',
    marginTop:10,
  },
  itemContainer:{
    height:60,
    width:'100%',
    backgroundColor:'#eee',
    alignItems:'center',
    justifyContent:'center',
    marginTop:5,
    flexDirection:'row',
    padding:8
  }
});
