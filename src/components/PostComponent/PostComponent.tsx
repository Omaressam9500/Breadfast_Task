import React, { FC} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity,  } from "react-native";

import { Fonts, Pixel } from "../../constants/styleConstants";
import { IPostItem } from "../../hooks/posts/interfaces";
import { useNavigation } from "@react-navigation/core";
import { Screens } from "../../constants/Screens";

interface IPostComponent {
    post: IPostItem
}
export const PostComponent: FC<IPostComponent> = ({
    post
}) => {
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity style={style.mainView}
            onPress={() => {
                navigate(Screens.POST_DETAILS,{
                    post:post
                })
            }}>

            <View style={style.horizontalView}>
                <Image style={style.imageAavatar} source={require('../../assets/icons/avatar.jpg')} />

                <View style={style.dataView}>
                    <Text style={style.titleTxt} numberOfLines={2} ellipsizeMode="tail">{post.title}</Text>
                </View>

            </View>
            <Text style={style.descTxt} numberOfLines={2} ellipsizeMode="tail" > {post.body}</Text>
        </TouchableOpacity>

    )
}
// notification
const style = StyleSheet.create({
    mainView: {
        backgroundColor: 'white',
        borderRadius: Pixel(15),
        paddingHorizontal: Pixel(15),
        paddingVertical: Pixel(15)

    },
    horizontalView: {
        flexDirection: 'row',


    },
    dataView: {
        marginLeft: Pixel(15)
    },
    titleTxt: {
        color: '#15294B',
        fontSize: Pixel(16),
        fontFamily: Fonts.bold,
        marginLeft: Pixel(5),
        maxWidth: Pixel(200)

    },
 
    descTxt: {
        color: '#64748B',
        fontSize: Pixel(14),
        fontFamily: Fonts.regular,
        marginTop: Pixel(10)

    },
    imageAavatar: {
        width: Pixel(40),
        height: Pixel(40),
        borderRadius: Pixel(20)
    }
})