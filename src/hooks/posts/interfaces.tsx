
export interface IPostItem {
    id: number,
    user_id: number,
    title: string,
    body: string
}
export interface ICommentItem {
    id: number,
    post_id: number,
    email: string,
    body: string,
    name:string
}
