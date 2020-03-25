# td-affiliate

如聯盟行銷，追蹤使用者連結

## 執行程式

```
npm start
```

## 環境配置

[eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)

```
// Code/File → Preferences → Settings

// These are all my auto-save configs
"editor.formatOnSave": true,
// turn it off for JS and JSX, we will do this via eslint
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},
// tell the ESLint plugin to run on save
"editor.codeActionsOnSave": {
  "source.fixAll": true
},
// Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
"prettier.disableLanguages": ["javascript", "javascriptreact"],
```

TypeScript and JavaScript validation can be turned off in VS Code with these two settings:
```
"typescript.validate.enable": false,
"javascript.validate.enable": false,
```