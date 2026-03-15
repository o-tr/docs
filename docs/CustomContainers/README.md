---
sidebar_position: 3
---

# 独自コンテナフォーマット

`ImageDeviceController` で読み込むことができる、画像群をまとめたフォーマットです。  
現在は主に次のバージョンが存在します。

- [**TextZip v0**](./textzip-v0.md):  
  - 単純な配列形式のマニフェストです。  
  - 各要素は `path` と `rect.width / rect.height` を持つだけのシンプルな構造で、古いバージョンとの互換性を保つ用途に向いています。

- [**TextZip v1**](./textzip-v1.md):  
  - ルートオブジェクトに `files`, `manifestVersion`, `requiredFeatures`, `extensions` を持つ拡張版マニフェストです。  
  - 各ファイルごとに `format`（`TextureFormat` 文字列）や任意拡張フィールド（`extensions`）を記述でき、機能要件や追加メタ情報を扱うことができます。

- [**EIA v1 (Efficient Image Archive v1)**](./eia-v1.md):
  - TextZip をもとにした拡張フォーマット
  - 差分エンコーディングと LZ4 圧縮を用いて、スライドや UI スクリーンショットのような画像シーケンスをより高効率に扱うためのフォーマットです。  
  - 詳細は [ImageDeviceController リポジトリの EIA v1 仕様書](https://github.com/o-tr/imageslide-converter/tree/master/docs) を参照してください。

変換用サービスも提供しています  
https://slide.ootr.jp/
