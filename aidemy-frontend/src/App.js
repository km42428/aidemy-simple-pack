import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AceEditor from "react-ace";

// マスターデータ
const exercises = [
  {
    exerciseId: "exercise1",
    title: "1. Hello world",
    script: "# Hello worldを出力しましょう\n"
  },
  {
    exerciseId: "exercise2",
    title: "2. コメントの入力",
    script: "# 3 + 5 の結果を出力しましょう\n"
  }
];

// exerciseIdからexerciseを取得する関数
function getExercise(exerciseId) {
  return exercises.find(el => {
    return el.exerciseId === exerciseId;
  });
}

// 表示される土台の部分
// Link: クリック時にtoで指定されたページに遷移
// Route: 特定のurlの時に表示するコンポーネントを定義
const App = () => (
  <BrowserRouter>
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <hr />
      <Route exact path="/" render={props => <Exercises />} />
      <Route
        path="/exercises/:id"
        render={props => <Exercise match={props.match} />}
      />
    </div>
  </BrowserRouter>
);

// exerciseの一覧
const Exercises = () => (
  <div>
    <h2>Exercises</h2>
    <p>エクササイズの一覧です</p>
    <ul>
      {(exercises || []).map(exercise => {
        return (
          <li key={exercise.exerciseId}>
            <Link
              to={"/exercises/" + exercise.exerciseId}
              key={exercise.exerciseId}
            >
              {exercise.title}
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);
// 特定のexerciseの演習部分
class Exercise extends Component {
  constructor() {
    super();
    this.state = {
      exerciseId: "",
      title: "",
      script: ""
    };
    this.onChange = this.onChange.bind(this); // はじめにonChangeをthisにbindしておく
  }

  // コンポーネントのレンダリングが終了したら呼び出される
  componentDidMount() {
    const exercise = getExercise(this.props.match.params.id);
    if (exercise) {
      this.setState({
        exerciseId: exercise.exerciseId,
        title: exercise.title,
        script: exercise.script
      });
      return;
    }
    this.setState({
      exerciseId: "",
      title: "",
      script: ""
    });
  }

  // エディタに入力があるたびに呼び出され、stateを変更する
  onChange(newValue) {
    this.setState({
      script: newValue
    });
  }

  // RUN押下時に呼び出される関数。現状alertを表示するのみ。
  run() {
    alert(`以下のコードが実行されます\n\n${this.state.script}`);
  }

  // 実際の表示部分
  render() {
    return (
      <div>
        <h2>Exercise</h2>
        <p>{this.state.title}</p>
        <AceEditor
          mode="python"
          onChange={this.onChange}
          editorProps={{ $blockScrolling: true }}
          editorSetting="editorLightTheme"
          theme="tomorrow"
          value={this.state.script}
        />
        <input type="button" value="RUN" onClick={this.run.bind(this)} />
      </div>
    );
  }
}

export default App;
