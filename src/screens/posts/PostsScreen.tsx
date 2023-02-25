import React, { FC, useContext, useEffect, useState, useRef } from "react";
import {  StyleSheet, Text, View,FlatList } from "react-native";

import { Colors, Fonts, Pixel } from "../../constants/styleConstants";
import { Container } from "../../components/Containers";
import { useGetPosts } from "../../hooks/posts/all";
import { PostComponent } from "../../components/PostComponent/PostComponent";
import SkeletonLoader from "../../components/loaders/SkeletonLoader";

export const PostsScreen: FC = () => {
    const [postsList, setPostsList] = useState([])
    useEffect(() => {
        mutateAsync()
    }, [])
    const {
        mutateAsync,
        isIdle,
        
        error,
    } = useGetPosts(
        (response) => {
            let { data } = response
            if (data)
                setPostsList(data)
        },
    );
    return (
        <Container>
            <View style={style.mainView}>
                <View style={style.headerView}>
                    <Text style={style.headertitleTxt}>User Posts</Text>

                </View>
                {(isIdle) && (
                    [1, 2, 3, 4].map((value, index, array) => {
                        return (
                            <SkeletonLoader key={value.toString()}/>
                        );
                    })
                )}

                <FlatList
                    data={postsList}
                    legacyImplementation
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item, index }) => {
                        {
                            return (
                                <View style={style.itemView}>

                                    <PostComponent
                                        post={item}
                                    />
                                </View>

                            )
                        }
                    }}
                    contentContainerStyle={style.listContentStyle}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />


            </View>

        </Container >
    )
}

const style = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: Colors.screenBackgroundColor,
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: Pixel(25)
    },
    itemView:{
        marginBottom: Pixel(20) 
    },

    headertitleTxt: {
        color: Colors.mainTitleColor,
        fontSize: Pixel(22),
        fontFamily: Fonts.bold,
        marginTop: Pixel(15)
    },
    titleTxt: {
        color: '#15294B',
        fontSize: Pixel(16),
        fontFamily: Fonts.bold

    },
    listContentStyle: {
        marginTop: Pixel(23), paddingHorizontal: Pixel(20),
        paddingBottom: Pixel(140),
        paddingTop: 0,
    }
})
