import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AceEditor from "react-ace";

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
function getExercise(exerciseId) {
  return exercises.find(el => {
    return el.exerciseId === exerciseId;
  });
}

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
const Exercises = () => (
  <div>
    <h2>Exercises</h2>
    <p>エクササイズの一覧です</p>
    <ul>
      {(exercises || []).map(exercise => {
        return (
          <li key={exercise.exerciseId}>
            <Link to={"/exercises/" + exercise.exerciseId} key={exercise.exerciseId}>
              {exercise.title}
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);
class Exercise extends Component {
  constructor() {
    super();
    this.state = {
      exerciseId: "",
      title: "",
      script: ""
    };
    this.onChange = this.onChange.bind(this)
  }

  async componentDidMount() {
    const exercise = getExercise(this.props.match.params.id);
    if (exercise) {
      this.setState({
        exerciseId: exercise.exerciseId,
        title: exercise.title,
        script: exercise.script
      });
      return
    }
    this.setState({
      exerciseId: "",
      title: "",
      script: ""
    });
  }

  onChange(newValue) {
    this.setState({
      script: newValue
    });
  }
  run() {
    alert(`以下のコードが実行されます\n\n${this.state.script}`)
  }
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