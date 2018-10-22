const myNews = [
  {
    author: "Саша Печкин",
    text: "В четверг, четвертого числа..."
  },
  {
    author: "Просто Вася",
    text: "Считаю, что $ должен стоить 35 рублей!"
  },
  {
    author: "Max Frontend",
    text: "Прошло 2 года с прошлых учебников, а $ так и не стоит 35"
  },
  {
    author: "Гость",
    text: "Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru"
  }
];

const App = () => {
  return (
    <React.Fragment>
      <News data={myNews} />
      <Comments />
    </React.Fragment>
  );
};

const News = props => {
  return props.data.map((item, index) => {
    return (
      <div key={index}>
        <p className="news__author">{item.author}:</p>
        <p className="news__text">{item.text}</p>
      </div>
    );
  });
};

const Comments = () => {
  return <p> No comments</p>;
};

ReactDOM.render(<App />, document.getElementById("root"));
