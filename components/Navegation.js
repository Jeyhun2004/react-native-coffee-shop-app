import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import react from 'react';

const image = { uri: 'https://t3.ftcdn.net/jpg/01/58/81/20/360_F_158812043_pAFl73ukqGEigWrdFfgsHZ4AiPOQodMT.jpg' };

const Navegation = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image} />
            <TextInput
                    placeholder="Write anythink"
                    placeholderTextColor="white" 
                    style={styles.input}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       height: 150,
       marginTop: 20,
    },
    image: {
        justifyContent: 'center',
        height: 190,
    },
    input: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10, 
        padding: 10,
        marginEnd: 10,
        marginLeft: 10,
        marginTop: 9,
    },
});

export default Navegation;