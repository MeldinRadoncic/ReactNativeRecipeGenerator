import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Navbar from '../Navbar/Navbar';

import Form from '../Form/Form';
import DisplayData from '../DisplayData/DisplayData';
import { styles } from './home.styles';


const Home = ({ data }) => {
    const [
        receivedData,
        setReceivedData
      ] = useState(null);

    const handleFormSubmit = (data) => {
        setReceivedData(data);
      };


    return (
      <>  
      <View style={styles.container}>
        

{receivedData && data ? <DisplayData data={receivedData}/> :
<View><Text style={styles.mainHeading}>What do you have in your fridge?
        </Text>
        <Text style={styles.paragraph}>Just tell me what you have in your fridge and I will make a recipe for you.

</Text>
 <Form onSubmit={handleFormSubmit}/>
  </View>
  }   
        </View>
  </>
    );
    }

    export default Home;



    



