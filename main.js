const myNews = [
  {
    id: 1,
    author: "Саша Печкин",
    text: "В четверг, четвертого числа...",
    bigText:
      "в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж."
  },
  {
    id: 2,
    author: "Просто Вася",
    text: "Считаю, что $ должен стоить 35 рублей!",
    bigText:
      "в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж."
  },
  {
    id: 3,
    author: "Max Frontend",
    text: "Прошло 2 года с прошлых учебников, а $ так и не стоит 35",
    bigText:
      "в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж."
  },
  {
    id: 4,
    author: "Гость",
    text: "Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru",
    bigText:
      "в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж."
  }
];

const myNews1 = [];

const App = () => {
  return (
    <React.Fragment>
      <h3>News</h3>
      <News data={myNews} />
    </React.Fragment>
  );
};

// const Article = props => {
//   const { author, text, bigText } = props.data;

//   return (
//     <div className="article">
//       <p className="news__author">{author}:</p>
//       <p className="news__text">{text}</p>
//       <a href="#" className="news__readmore">
//         Details
//       </a>
//       <p className="news__big-text">{bigText}</p>
//     </div>
//   );
// };

// const News = props => {
//   let newsTemplate = null;
//   if (props.data.length) {
//     newsTemplate = props.data.map(item => {
//       return <Article key={item.id} data={item} />;
//     });
//   } else {
//     newsTemplate = <p>No News</p>;
//   }

//   return (
//     <div className="news">
//       {newsTemplate}
//       {props.data.length ? (
//         <strong className="news__count">Total news: {props.data.length}</strong>
//       ) : null}
//     </div>
//   );
// };

class Article extends React.Component {
  state = {
    visible: false
  };
  handleReadMoreClick = e => {
    e.preventDefault();
    this.setState({ visible: true });
  };

  render() {
    const { author, text, bigText } = this.props.data;
    return (
      <div className="article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
        {!this.visible && (
          <a
            onClick={this.handleReadMoreClck}
            href="#"
            className="news__readmore"
          >
            Details
          </a>
        )}
        {this.visible && <p className="news__big-text">{bigText}</p>}
      </div>
    );
  }
}

class News extends React.Component {
  renderNews = () => {
    const { data } = this.props;
    let newsTemplate = null;

    if (data.length) {
      newsTemplate = data.map(function(item) {
        return <Article key={item.id} data={item} />;
      });
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>;
    }

    return newsTemplate;
  };
  render() {
    const { data } = this.props;

    return (
      <div className="news">
        {this.renderNews()}
        {data.length ? (
          <strong className={"news__count"}>
            Всего новостей: {data.length}
          </strong>
        ) : null}
      </div>
    );
  }
}

// News.propTypes = {
//   data: PropTypes.shape({
//     author: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//     bigText: PropTypes.string.isRequired
//   })
// };

ReactDOM.render(<App />, document.getElementById("root"));
