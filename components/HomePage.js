import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Modal, Button, SafeAreaView } from "react-native";

const Coffee = [
    {
        id: 1,
        imageURL: "https://www.starbucksathome.com/tr/sites/default/files/2022-04/AppealShot%20-%20Vanilla%20Latte_25Jan.png",
        name: 'Latte',
        price: '10$',
        description: 'A creamy espresso-based coffee made with steamed milk and topped with a small amount of milk foam.',
    },
    {
        id: 2,
        imageURL: "https://atlas-content-cdn.pixelsquid.com/stock-images/coffee-cup-exD2AXD-600.jpg",
        name: 'Espresso',
        price: '6$',
        description: 'A strong and concentrated coffee shot brewed by forcing hot water through finely-ground coffee beans.',
    },
    {
        id: 3,
        imageURL: "https://www.starbucksathome.com/tr/sites/default/files/2022-04/CaffeAmericano_25Jan.png",
        name: 'Americano',
        price: '9$',
        description: 'A coffee made by diluting a shot of espresso with hot water, resulting in a milder and larger beverage.',
    },
    {
        id: 4,
        imageURL: "https://www.starbucksathome.com/tr/sites/default/files/styles/rdp_banner_image/public/2022-04/10032021_CAPPUCCINO_CS-min.png?itok=4cCanv-P",
        name: 'Cappuccino',
        price: '5$',
        description: 'A coffee drink consisting of equal parts of espresso, steamed milk, and milk foam, often dusted with cocoa or cinnamon.',
    },
    {
        id: 5,
        imageURL: "https://www.starbucksathome.com/tr/sites/default/files/styles/nutrition_instruction_image/public/2022-10/White%20Chocolate%20Mocha%20Cup.png?itok=Xin5nKTL",
        name: 'Chocolate Mocha',
        price: '11$',
        description: 'A delightful blend of espresso, steamed milk, and rich chocolate flavor, often garnished with whipped cream and chocolate shavings.',
    },
    {
        id: 6,
        imageURL: "https://coffeetreegroup.co.uk/wp-content/uploads/2020/10/FLAT-WHITE.jpg",
        name: 'Flat white',
        price: '7$',
        description: 'A smooth and velvety coffee made with espresso and microfoam milk, creating a creamy yet strong flavor profile.',
    },
];


const HomePage = ({ item }) => {
    const [visible, setVisible] = useState(false);

    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={show}>
                <Image
                    style={styles.imageURL}
                    source={{ uri: item.imageURL }}
                />
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textPrice}>{item.price}</Text>
            </TouchableOpacity>

            <Modal
                visible={visible}
                animationType="slide"
                transparent={true}
            >
                <SafeAreaView style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Image
                            style={styles.imageURL}
                            source={{ uri: item.imageURL }}
                        />
                        <Text style={styles.modalTextName}>{item.name}</Text>
                        <Text style={styles.modalDescription}>{item.description}</Text>
                        <Text style={styles.modalTextPrice}>{item.price}</Text>
                        <Button title="X" onPress={hide} style={{ backgroundColor: 'red' }}/>
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    );
};

const App = () => {
    return (
        <View style={styles.Div}>
            <FlatList
                data={Coffee}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <HomePage item={item} />}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 1,
        margin: 10,
    },
    Div: {
        marginBottom: 350,
        marginTop: 100,
    },
    textName: {
        margin: 10,
        fontSize: 19,
    },
    textPrice: {
        margin: 10,
        fontSize: 20,
        marginTop: -5,
    },
    imageURL: {
        width: 180,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },

    

    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        width: 300,
        alignItems: "center",
    },
    modalTextName: {
        fontSize: 24,
        fontWeight: "bold",
    },
    modalTextPrice: {
        fontSize: 20,
    },
    modalDescription:{
        marginHorizontal: 5,
        marginBottom: 20,
        marginTop: 20,
        fontSize: 15,
    },
    modalExit:{
        backgroundColor: 'red',
    }
});

export default App;
