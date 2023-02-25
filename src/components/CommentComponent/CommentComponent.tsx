import React, { FC } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";

import { Colors, Fonts, Pixel } from "../../constants/styleConstants";
import { ICommentItem } from "../../hooks/posts/interfaces";




interface ICommentComponent {
    comment: ICommentItem
}
export const CommentComponent: FC<ICommentComponent> = ({
    comment
}) => {

    return (
        <View style={style.mainView}
        >

            <View style={style.horizontalView}>
                <Image style={style.imageAavatar} source={require('../../assets/icons/avatar.jpg')} />

                <View style={style.dataView}>
                    <Text style={style.titleTxt} numberOfLines={2} >{comment.name}</Text>
                    <Text style={[style.titleTxt, { color: Colors.mainTitleColor }]} numberOfLines={2} >{comment.email}</Text>

                </View>

            </View>
            <Text style={style.descTxt} > {comment.body}</Text>
        </View>

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