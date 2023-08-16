import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

import Bolo1Image from 'assets/bolo_1.png'; 
import Bolo2Image from 'assets/bolo_2.png';
import Bolo3Image from 'assets/bolo_3.png';
import Bolo4Image from 'assets/bolo_4.png';
import Bolo5Image from 'assets/Boloteria.png';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.logoContainer}>
      <Image style={styles.logoImage} source={Bolo5Image} resizeMode="contain" />
      </View>

      <Text style={styles.header}>Bolos Deliciosos</Text>
      
      <View style={styles.boloContainer}>
        <Image style={styles.boloImage} source={Bolo1Image} />
        <Text style={styles.boloTitle}>Bolo de oreo</Text>
         <Text style={styles.boloTitle}>R$ 80,00</Text>
        <Text style={styles.boloDescription}>O bolo de Oreo é uma festa para os sentidos. Ele combina a adorada crocância do biscoito Oreo com a suavidade do bolo, criando uma sinfonia de texturas e sabores.</Text>
      </View>

      <View style={styles.boloContainer}>
        <Image style={styles.boloImage} source={Bolo2Image} />
        <Text style={styles.boloTitle}>Bolo de chocolate</Text>
         <Text style={styles.boloTitle}>R$ 55,00</Text>
        <Text style={styles.boloDescription}>O bolo de chocolate é uma indulgência clássica e reconfortante. Com suas camadas ricas e fofas de massa de chocolate, é um deleite para os amantes do cacau..</Text>
      </View>

       <View style={styles.boloContainer}>
        <Image style={styles.boloImage} source={Bolo3Image} />
        <Text style={styles.boloTitle}>Bolo de frutas vermelhas</Text>
        <Text style={styles.boloTitle}>R$ 70,00</Text>
        <Text style={styles.boloDescription}>O bolo de frutas vermelhas é uma criação delicada que combina a suavidade do bolo com a frescura e acidez das frutas vermelhas.</Text>
      </View>

      <View style={styles.boloContainer}>
        <Image style={styles.boloImage} source={Bolo4Image} />
        <Text style={styles.boloTitle}>Bolo red velvet</Text>
        <Text style={styles.boloTitle}>R$ 95,00</Text>
        <Text style={styles.boloDescription}>O bolo Red Velvet é um clássico da confeitaria, conhecido por sua cor vermelha única e textura macia.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: "#FFF4E9",
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boloContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  boloImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  boloTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  boloDescription: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 17,
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: 'center',
    marginBottom: 40,
  },
  logoImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default App;

