const API_ADRESS = 'https://warsawjs-21-api.herokuapp.com';

function transformJsonResponse(response){
    if (!response.ok){
        return Promise.reject(response);
    }
    return response.json()
}

export function login({username, password}){
    return fetch(`${API_ADRESS}/auth`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( {username, password} ),
        }).then(transformJsonResponse);
}

export function readPostList(){
    return fetch(`${API_ADRESS}/posts`, {
        method: 'GET'
    }).then(transformJsonResponse);
}

export function createPost({username, title, image}){
    const body = new FormData();
    body.append('username', username);
    body.append('title', title);
    body.append('image', image);

    return fetch(`${API_ADRESS}/posts`,{
        method: "POST",
        body
    }).then(transformJsonResponse);
}

export function readPost(postID){
    return fetch(`${API_ADRESS}/posts/${postID}`, {
        method: 'GET'
    }).then(transformJsonResponse);
}

export function createComment( {postId, username, body, position: {x, y} } ){
    return fetch(`${API_ADRESS}/posts/${postId}/comments`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify( {postId, username, body, position: {x, y}} ),
    }).then(transformJsonResponse);
}