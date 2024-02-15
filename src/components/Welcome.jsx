const Welcome = ({ post, serverpost }) => {
    const hundleServerbutton = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(obj => {
                serverpost(obj.posts)
            })
    }

    return <center>
        {post.length === 0 && <div>
            <h2>There is no Post</h2>
            <button className="badge text-bg-primary hashtag" onClick={hundleServerbutton}>Retrive Posts From the Server</button>
        </div>}
    </center>
}

export default Welcome;
