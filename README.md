# `amazon` shortcode for Hugo

## shortcodes

### setup

set files as following tree

```tree
assets/
└── css
    └── amazon.css

layouts/
├── partials
│   └── extend_head.html (*)
└── shortcodes
    └── amazon.html

```

(*) add css link to `extend_head.html`

```html
{{- if .HasShortcode "amazon" -}}
{{- $amazon_css := resources.Get "css/amazon.css" | resources.Minify }}
<link rel="stylesheet" href="{{ $amazon_css.RelPermalink }}">
{{- end -}}
```

### usage

```md
{{< amazon
  url="https://amzn.to/3Uvctxj"
  title="ツイッター創業物語 金と権力、友情、そして裏切り"
  author="ニック・ビルトン"
  isbn="4532319331" >}}
```

show as

![上記shortcodeの表示例](image/example.png)
