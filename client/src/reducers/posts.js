export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            console.log('create');
            return [...posts, action.payload];
        default:
            console.log('posts');
            return posts;
    }
}