# TextZip v1
v0.1.0 以降の `ImageDeviceController` で読み込むことができるフォーマットです

## 定義
```typescript
// 画像のサイズ情報
type Rect = {
  width: number;
  height: number;
}

// マニフェスト内の 1 ファイル分の情報
type ManifestItem = {
  path: string;   // 画像データへの相対パス
  format: string; // テクスチャフォーマット（TextureFormat の文字列表現）
  rect: Rect;     // 画像の幅・高さ
  extensions?: {  // 機能ごとの拡張情報（任意）
    [ext_name: string]: unknown;
  };
}

// TextZip v1 のマニフェスト全体
type Manifest = {
  files: ManifestItem[];   // 画像ファイルの一覧
  manifestVersion: number; // マニフェスト仕様のバージョン
  requiredFeatures: string[]; // 読み込みに必須となる機能
  extensions: string[];       // あればよい追加機能
}
```

`format` には Unity の `TextureFormat` に対応する文字列を指定します。  
代表的な値としては次のようなものがあります。

- `"RGB24"`
- `"RGBA32"`
- `"ARGB32"`

`ImageDeviceController` 側では、不明なフォーマット名が指定された場合はエラーとして扱われ、読み込みに失敗します。

## サンプルデータ
```json
{
  "files": [
    {
      "path": "0.rawimage",
      "format": "RGB24",
      "rect": {
        "width": 1920,
        "height": 1080
      },
      "extensions": {
        "note": "1ページ目",
        "tag": "title"
      }
    },
    {
      "path": "1.rawimage",
      "format": "RGB24",
      "rect": {
        "width": 1920,
        "height": 1080
      },
      "extensions": {
        "note": "2ページ目"
      }
    }
  ],
  "manifestVersion": 1,
  "requiredFeatures": ["RGB24"],
  "extensions": ["note", "tag"]
}
```
