# aidemy-simple-pack
アイデミーのアドベントカレンダーで使用するリポジトリです。
全体構成について： Dockerで簡易版Aidemyをつくってみよう (その1) ~全体構成とDockerのセットアップ~ (https://qiita.com/km42428/items/4e4653aa0e813282986b)
フロントエンドについて： Dockerで簡易版Aidemyをつくってみよう (その2) ~Reactによるフロントエンド~ (未発表)
バックエンドについて： Dockerで簡易版Aidemyをつくってみよう (その3) ~Expressによるbackend~ (未発表)
データベースについて： Dockerで簡易版Aidemyをつくってみよう (その4) ~mongodbによるデータベース~ (未発表)
実行サーバについて： Dockerで簡易版Aidemyをつくってみよう (その5) ~Pythonによる実行サーバ構築~ (未発表)

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
