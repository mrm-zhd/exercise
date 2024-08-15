async function getPosts(){
    const postUrl = "https://jsonplaceholder.typicode.com/posts";
    const options = {
        method: "GET",
    }
    req = await fetch(postUrl,options);
    const postData = await req.json();

    printPosts(postData)
    //console.log(postData);
}

const printPosts = (postList) => {
    postList.forEach((post) => {
        const postTag = createPost(post);
        postTag.setAttribute("class", "present");
        document.getElementById("show-post").appendChild(postTag);
    });
}

const createPost = (post) => {
    const pTag = document.createElement("div");
    pTag.innerText = post.title;
    return pTag;
}
getPosts();

function addPost(title, body) {
    const postUrl = "https://jsonplaceholder.typicode.com/posts";
    const options = {
        method: "POST",
        body: JSON.stringify({
            title: 'title',
            body: 'body',
            userId: 1,
          }),

    }
    fetch(postUrl, options);
}