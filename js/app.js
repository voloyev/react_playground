var Comments = React.createClass({
    render: function () {
        return(
            <div className = "comments">
                <h2>Comments</h2>
                <textarea></textarea>
                <p>
                    <input type="submit" value="Send" />
                </p>
            </div>
       );
    }
});

var News = React.createClass({
    render: function() {
        return (
            <div className = "news">
                <h2>Here some news</h2>
                <Comments />
            </div>
        );
    }
});

var App = React.createClass({
    render: function(){
        return (
            <div className = "app">
                <h1>Hi, I am react component, and here are the news</h1>
                <News />
            </div>
        );
    }

});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);