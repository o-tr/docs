# TextZip v0
v0.0.2 以降のすべての `ImageDeviceController` で読み込むことができるフォーマットです

マニフェストは **JSON 配列** で表現され、各要素が 1 つの画像ファイルに対応します。  
各要素にはファイルへのパス (`path`) と、画像サイズ (`rect.width` / `rect.height`) が必須で含まれます。

## 定義
```typescript
type Rect = {
  width: number;
  height: number;
}

type ManifestItem = {
  path: string;
  rect: Rect
}

type Manifest = ManifestItem[];
```

## サンプルデータ
```json
[
  {
    "path": "0.rawimage",
    "rect": {
      "width": 612,
      "height": 792
    }
  },
  {
    "path": "1.rawimage",
    "rect": {
      "width": 612,
      "height": 792
    }
  }
]
```
