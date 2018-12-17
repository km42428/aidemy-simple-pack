// 必要なパッケージの読み込み
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS"
  );
  next();
});

// expressでAPIサーバを使うための準備
var router = express.Router();

// エクササイズマスターデータ
const exercises = [
  {
    exerciseId: "exercise1",
    title: "1. Hello world",
    script: "# Hello worldを出力しましょう\n",
    answer: "# Hello worldを出力しましょう\nprint('Hello world')"
  },
  {
    exerciseId: "exercise2",
    title: "2. コメントの入力",
    script: "# 3 + 5 の結果を出力しましょう\n",
    answer: "# 3 + 5 の結果を出力しましょう\nprint(3 + 5)"
  }
];

/**
 * 特定のエクササイズを抽出する関数
 * @param exerciseId - エクササイズID
 * */
function getExercise(exerciseId) {
  return exercises.find(el => {
    return el.exerciseId === exerciseId;
  });
}

/* -------- 以下にAPIを記述 -------- */

router.route("/").get(async function(_req, res) {
  res.json({});
});
router.route("/exercises").get(async function(_req, res) {
  if (!exercises) {
    res.status(404).json({
      code: 404,
      msg: "Exercises not found"
    });
  }
  res.json(exercises);
});
router.route("/exercises/:exerciseId").get(async function(req, res) {
  console.log(req.params);
  const exercise = getExercise(req.params.exerciseId);
  if (!exercise) {
    res.status(404).json({
      code: 404,
      msg: "Exercise not found"
    });
  }
  res.json(exercise);
});

/* -------- 以上にAPIを記述 -------- */

// ルーティング登録
app.use("/v1", router);

// port4000番で出力を受ける
app.listen(4000);
