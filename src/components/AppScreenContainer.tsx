import { View, ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { backgroundImage } from '../utils/sources';
import AppStatusBar from './AppStatusBar';
import { windowHeight, windowWidth } from '../utils/styles';
import { PropsWithChildren } from 'react';

const AppScreenContainer = ({ children }: PropsWithChildren) => {
    return <View
        style={{ flex: 1 }}>
        <AppStatusBar />
        <ImageBackground
            source={backgroundImage}
            style={styles.image}
            imageStyle={styles.image}>
            <SafeAreaView style={styles.mask}>
                {children}
            </SafeAreaView>
        </ImageBackground>
    </View>
}

export default AppScreenContainer;

export const styles = StyleSheet.create({
    mask: {
        width: windowWidth,
        height: windowHeight,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.75)',
    },
    image: {
        width: windowWidth,
        height: windowHeight,
    },
});