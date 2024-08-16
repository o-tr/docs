# v0.0.x から移行される方向け

想定されるユースケースでは `ImageSlide` と `ImageTab` のどちらか片方のみを使用する可能性が高く、両方を一つに同梱する事によるメリットがあまりないと考えられたため、v0.1.0 以降のリリースはパッケージが分割されています  
以前のバージョンで使用されていたプレハブは以下のように分割されています

- [ImageDeviceController](/docs/Packages/ImageDeviceController/)
  - ImageDeviceController (旧: _ootrDeviceController)
- [ImageScreen](/docs/Packages/ImageScreen/)
  - ImageScreen
- [ImageTab](/docs/Packages/ImageTab/)
  - ImageTab
  - ImageTab-Standalone
- [ImageSlide](/docs/Packages/ImageSlide/)
  - ImageSlide

この内、 `ImageDeviceController` は他のパッケージの依存関係に指定されているため、手動で追加する必要はありません

## 一括で導入したい場合
`ImageGimmicksPack` パッケージを導入することで全パッケージを一括で導入できます  

## 手動で構成したい場合

主に想定される構成は以下のとおりですが、必ずしもこのとおりである必要はありません
- 画像を表示したい場合
  - `ImageTab`のみ
- 画像を表示し、投影したい場合
  - `ImageTab`、`ImageScreen`
- プレゼンを行いたい場合
  - `ImageSlide`、`ImageScreen`

## パッケージの導入方法
[ootr's vpm repository](/docs/vpm/) をVCCに追加することで、パッケージ一覧から各パッケージを追加することができるようになります  
