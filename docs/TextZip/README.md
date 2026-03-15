---
sidebar_position: 3
---

# TextZip

`ImageDeviceController` で読み込むことができる、画像群を「zip + マニフェスト」でまとめたフォーマットです。  
現在は主に次のバージョンが存在します。

- **TextZip v0**:  
  - 単純な配列形式のマニフェストです。  
  - 各要素は `path` と `rect.width / rect.height` を持つだけのシンプルな構造で、古いバージョンとの互換性を保つ用途に向いています。
- **TextZip v1**:  
  - ルートオブジェクトに `files`, `manifestVersion`, `requiredFeatures`, `extensions` を持つ拡張版マニフェストです。  
  - 各ファイルごとに `format`（`TextureFormat` 文字列）や任意拡張フィールド（`extensions`）を記述でき、機能要件や追加メタ情報を扱うことができます。

なお、TextZip をもとにした拡張フォーマットとして **EIA v1 (Efficient Image Archive v1)** も存在します。  
これは差分エンコーディングと LZ4 圧縮を用いて、スライドや UI スクリーンショットのような画像シーケンスをより高効率に扱うためのフォーマットです。  
詳細は [EIA v1 のドキュメント](./eia-v1.md) および [ImageDeviceController リポジトリの EIA v1 仕様書](https://github.com/o-tr/imageslide-converter/tree/master/docs) を参照してください。

変換用サービスも提供しています  
https://slide.ootr.jp/
