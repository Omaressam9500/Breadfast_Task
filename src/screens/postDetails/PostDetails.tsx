import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import { IPostItem } from "../../hooks/posts/interfaces";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useGetPostComments } from "../../hooks/posts/postComments";
import { Colors, Fonts, Pixel } from "../../constants/styleConstants";
import { Container } from "../../components/Containers";
import { useNavigation } from "@react-navigation/core";
import { CommentComponent } from "../../components/CommentComponent/CommentComponent";


export const PostDetails: FC = () => {
    type RootStackParamList = {
        routes: { post: IPostItem, };
    };
    const { goBack } = useNavigation();
    const [selectedView, setSelectedView] = useState(0)

    const route = useRoute<RouteProp<RootStackParamList, 'routes'>>();
    let post = route.params.post
    const [postComments, setPostComments] = useState([])
    useEffect(() => {
        mutateAsync()
    }, [])
    const {
        mutateAsync,
    
    } = useGetPostComments(
        (response) => {
            let { data } = response
            if (data)
                setPostComments(data)
        },
    )
    const renderCommentsView = () => {
        return (
            <View>
                <FlatList
                    data={postComments}
                    legacyImplementation
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item, index }) => {
                        {
                            return (
                                <View style={style.itemView}>

                                    <CommentComponent
                                        comment={item}
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
        )
    }
    const renderDetailsView = () => {
        return (
            <View>
                <Text style={style.descTitle}>Title</Text>

                <View style={[style.dataView,]}>
                    <Text style={style.titleTxtVal}>{post.title}</Text>
                </View>

                <View>
                    <Text style={style.descTitle}>Content</Text>
                    <View style={[style.dataView,]}>
                        <Text style={style.titleTxtVal}>{post.body}</Text>

                    </View>
                </View>
            </View>
        )
    }
    return (
        <Container>


            <TouchableOpacity
                style={style.headerView}
                onPress={goBack} >
                <Image source={require('../../assets/icons/backIcn.png')} />
                <Text style={style.headertitleTxt}>Post Details</Text>

            </TouchableOpacity>
            {
                <View style={style.mainFilterView}>

                    <TouchableOpacity style={[style.filterView, selectedView === 0 ? {
                        backgroundColor: Colors.mainTitleColor
                    } : { backgroundColor: Colors.mainColor }]}
                        onPress={() => {
                            setSelectedView(0)
                        }}>
                        <Text style={[style.filterTxt, selectedView === 0 ? { color: Colors.white } : { color: Colors.mainTitleColor }]}>Details</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[style.filterView, selectedView === 1 ? { backgroundColor: Colors.mainTitleColor } : { backgroundColor: Colors.mainColor }]}
                        onPress={() => {
                            setSelectedView(1)

                        }}>
                        <Text style={[style.filterTxt, selectedView === 1 ? { color: Colors.white } : { color: Colors.mainTitleColor }]}>Comments</Text>
                    </TouchableOpacity>
                </View>

            }

            <ScrollView style={style.mainView}>

                {selectedView === 0 ?
                    renderDetailsView()
                    : renderCommentsView()}

            </ScrollView>
        </Container>
    )
}
const style = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: Colors.screenBackgroundColor,
    },
    dataView: {
        backgroundColor: Colors.white,
        borderRadius: 10,
        paddingHorizontal: Pixel(16),
        paddingVertical: Pixel(10),
        marginHorizontal: Pixel(20),
        marginTop: Pixel(16)
    },
    itemView:{
        marginBottom: Pixel(20) 
    },

    titleTxtVal: {
        color: Colors.mainTextColor,
        fontSize: Pixel(16),
        fontFamily: Fonts.bold

    },
    descTitle: {
        marginHorizontal: Pixel(20),
        color: Colors.mainTitleColor,
        marginTop: Pixel(18),
        fontSize: Pixel(20),
        fontFamily: Fonts.bold
    },

    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Pixel(25)
    },
    headertitleTxt: {
        color: Colors.mainTitleColor,
        fontSize: Pixel(22),
        fontFamily: Fonts.bold,
        marginLeft: Pixel(20)
    },
    mainFilterView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: Pixel(20)
    },
    filterView: {
        backgroundColor: Colors.mainColor,
        borderRadius: Pixel(20),
        height: Pixel(40),
        width: Pixel(100),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.mainTitleColor,
        borderWidth: 1
    },
    filterTxt: {
        fontSize: Pixel(15),
        color: 'white'
    },
    listContentStyle: {
        marginTop: Pixel(23), paddingHorizontal: Pixel(20),
        paddingBottom: Pixel(140),
        paddingTop: 0,
    }
})