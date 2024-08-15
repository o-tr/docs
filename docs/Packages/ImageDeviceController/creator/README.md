# ワールド制作者向け
[ImageTab](/docs/Packages/ImageTab/) や [ImageSlide](/docs/Packages/ImageSlide/) などのギミックで利用するコアライブラリです  
画像の読み込みのほか、各端末間の連携処理などを行います  
`ImageTab-Standalone` でも内部的に `ImageDeviceController` が使用されています

## 設定項目
### DeviceList
管理下に置かれている各ギミックの一覧です

## ZipLoadDelayFrames
TextZip形式のデータを読み込む際に処理間に挟む遅延を指定します  
この値を大きくすると負荷は分散しますが、読み込みに時間がかかるようになります

## Base64 Decode Part Size
TextZip形式のデータを読み込む際に一度に処理するデータ量を指定します  
この値を大きくすると負荷は集中しますが、読み込みが早くなります
