# VK PDF Viewer

PDF.jsをComposerとnpmで管理し、WordPressテーマやプラグインで利用するためのライブラリです。

## 使い方

Composer の require に登録
```
composer require vektor-inc/vk-pdf-viewer
```

autoload.php を読み込み
```
require_once dirname( __FILE__ ) . '/vendor/autoload.php';
```

本体を読み込んで実行
```
use VektorInc\VK_Swiper\vkPdfViewer;
new vkPdfViewer();
vkPdfViewer::enqueue_swiper();
```

---

## Change log

Nothing
