# トラブルシュート
## このデバイスをImageDeviceControllerの管理対象に追加してください
`ImageTab` や `ImageSlide` など `ImageDeviceController` の管理下に置かれる必要があるスクリプトが、管理下に置かれていない場合に表示されます  
`ImageDeviceController` > `_OotrDeviceController.prefab` をシーンに配置し、`Device List`に該当端末を追加してください

## ビルドに失敗する
ターミナルに表示されているエラーを確認してください

### Device [deviceName] is referenced by multiple ImageDeviceControllers
端末が複数の `ImageDeviceController` の管理下に配置されている場合に発生します  
一つの端末を重複して管理することはできないため、いずれか一つの `ImageDeviceController` のみに管理されるように修正を行ってください

### Device [deviceName] is not assigned to any ImageDeviceController
`ImageTab` や `ImageSlide` など `ImageDeviceController` の管理下に置かれる必要があるスクリプトが、管理下に置かれていない場合に表示されます  
`ImageDeviceController` > `_OotrDeviceController.prefab` をシーンに配置し、`Device List`に該当端末を追加してください