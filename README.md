# aidemy-simple-pack

アイデミーのアドベントカレンダーで使用するリポジトリです。

- 全体構成について： Docker で簡易版 Aidemy をつくってみよう (その 1) 全体構成と Docker のセットアップ (https://qiita.com/km42428/items/4e4653aa0e813282986b)
- フロントエンドについて： Docker で簡易版 Aidemy をつくってみよう (その 2) React によるフロントエンド (https://qiita.com/km42428/items/989dac5e7450501c452d)
- バックエンドについて： Docker で簡易版 Aidemy をつくってみよう (その 3) Express による backend (未発表)
- データベースについて： Docker で簡易版 Aidemy をつくってみよう (その 4) mongodb によるデータベース (未発表)
- 実行サーバについて： Docker で簡易版 Aidemy をつくってみよう (その 5) Python による実行サーバ構築 (未発表)

# フォアグラウンドでの起動方法

```
cd /path/to/aidemy-simple-pack
docker-compose build
docker-compose up
```

`Ctrl` + `C` で停止できます。

# バックグラウンドでの起動方法

```
cd /path/to/aidemy-simple-pack
docker-compose build
docker-compose up -d
```

## 停止コマンド

```
docker-compose down
```
