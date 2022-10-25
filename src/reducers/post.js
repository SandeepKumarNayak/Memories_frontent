const postReducer = (state={isLoading:true,posts:[]},action) =>{
    switch(action.type){
        case 'START_LOADING':
            return {...state,isLoading:true}
        case 'END_LOADING':
            return {...state,isLoading:false}
        case 'FETCH_ALL':
            return {posts:action.payload};
        case 'FETCH_BY_ID':
            return {...state,post:action.payload.post}
        case 'DELETE':
            return {...state,posts:state.filter((post)=> post._id !== action.payload)};
        case 'CREATE':
            return {...state,posts:[...state,action.payload]};
        case 'LIKE':
            return {...state,posts:state.posts.map((post)=>post._id===action.payload._id?action.payload:post)}
        case 'UPDATE':
            return {...state,posts:state.posts.map((post)=>post._id===action.payload._id?action.payload:post)};
        default:
            return state;
    }
} 

export default postReducer;