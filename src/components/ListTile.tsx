import { View, Text, StyleSheet, Pressable, GestureResponderEvent } from "react-native"
import { LocalizationModel } from "../data/models/LocalizationModel"

type ListTileProps = {
    item: LocalizationModel,
    onPress: () => void,
}

export const ListTile = ({ item, onPress }: ListTileProps) => {
    return <Pressable onPress={onPress}>
        <View style={styles.container}>
            <Text style={styles.text}>{LocalizationModel.city(item)}
            </Text>
            <Text style={styles.text}>{item.country ?? ''}
            </Text>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: "rgba(255,255,255,0.2)",
        marginBottom: 2,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    text: {
        color: '#FFC107',
        fontSize: 25,
        fontWeight: 'bold',
    },
});