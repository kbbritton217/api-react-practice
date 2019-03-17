import React, {Component} from 'react';

class Json extends Component {
    handleMakePost = (event) => {
        event.preventDefault();
        const post = event.target.post;
        this.props.handleMakePost(post);
    };
    render() {
        let postItems = [];
        this.props.post.map((post) => postItems.push(
            <div key={post.userId} value={post.title}>
              <p>Title: {post.title}</p>
              <p>Body: {post.body}</p>
            </div>
            ))

        return (
            <div>
                <button onClick={this.handleMakePost}>Make Post</button>
                <div>
                    {postItems}
                </div>
            </div>
        )
    }
}

export default Json;