import React, {FC} from "react";
import { StyleSheet, View} from "react-native";
import {Colors, Pixel} from "../../constants/styleConstants";

import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const SkeletonLoader: FC = () => {

    return (
        <>
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item width={100} height={12} borderRadius={4}
                                          marginLeft={5}
                                          marginBottom={5}
                />
            </SkeletonPlaceholder>
            <View style={styles.container}>

                <SkeletonPlaceholder borderRadius={4}>
                    <SkeletonPlaceholder.Item width={110} borderRadius={4} marginBottom={7}/>
                    <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" justifyContent={"space-between"}>
                        <SkeletonPlaceholder.Item>
                            <SkeletonPlaceholder.Item width={110} height={15} borderRadius={4} marginBottom={7}/>
                            <SkeletonPlaceholder.Item width={110} borderRadius={4} marginBottom={7}/>
                            <SkeletonPlaceholder.Item
                                marginTop={6}
                                width={70}
                                height={10}
                                borderRadius={4}
                            />
                        </SkeletonPlaceholder.Item>

                        <SkeletonPlaceholder.Item alignItems={"flex-end"}>
                            <SkeletonPlaceholder.Item width={85} height={10} borderRadius={4} marginBottom={7}/>
                            <SkeletonPlaceholder.Item width={110} borderRadius={4} marginBottom={7}/>

                            <SkeletonPlaceholder.Item
                                marginTop={6}
                                width={65}
                                height={10}
                                borderRadius={4}
                            />
                        </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder>
            </View>
        </>
    )
};


const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: Colors.secondBackgroundColor,
        marginBottom: Pixel(16),
        padding: Pixel(16),
        borderWidth: 1.5,
        borderColor: "#E6E8E8",
        borderRadius: Pixel(10),
        paddingBottom: 20,
        marginTop: 7
    },
});

export default SkeletonLoader;


