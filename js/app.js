var my_news = [
    {
        author: 'Volodymyr',
        text: 'Today is Monday'
    },
    {
        author: 'Bob',
        text: 'Tomorrow will be Tuesday'
    }
];

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
        var data = this.props.data;
        var newsTemplate = data.map(function(item, index){
            return (
                <div key={index}>
                    <p className = "news__author">{item.author}:</p>
                    <p className = "news__text">{item.text}:</p>
                </div>
            );
        });
        return (
            <div className = "news">
                <h2>Here some news</h2>
                {newsTemplate}
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
                <News data={my_news} />
            </div>
        );
    }

});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
