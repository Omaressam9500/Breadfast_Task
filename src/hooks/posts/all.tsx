import { useMutation, useQuery } from "react-query";
import { axiosAPI } from "../../constants/Config";
import { showMessage } from "react-native-flash-message";



export const useGetPosts = (onSuccess?: (data: any) => void) => {
    return useMutation(
        () => axiosAPI.get(`posts`,),
        {
            onSuccess: (data) => {
                onSuccess && onSuccess(data);
            },
            onError: (error) => {
                showMessage({ message: "Something went wrong" })

            }
        },
    );
};
