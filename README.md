# nmsl-gen

这是一个用于随机生成*美丽词语*的简单网页。

## 实现原理

```javascript
// 词典
const dictionary = [/* ... */]

// 一个基于 Math.random 的简单范围随机数函数
const rangeRandomInt = (i, x) => {/* ... */}

// 获取词汇
var phrase = "";
phrase = dictionary[rangeRandomInt(0, dictionary.length)]
```

## 贡献

为了贡献方便，词汇被单独存放在一个 JS 文件（`/nmsl-dictionary.js` ）中。任何人都可以发起 Pull Request 进行贡献。贡献之前，请确保词语以 `N` `M` `S` `L` 开头并具有一定的实际意义。

该项目在将来可能开展

- 程序层面的自动组词；
- 更多精彩短语的转换，例如 `FNMDP`（疯牛满地跑）、`NMLGB`（你们两个宝）、`WCNMB`（我吃柠檬吧）、`WDNMD（我带你们打）`、`WSLNM`（我是老农民）、`NMNTYS`（柠檬怒涛浴室）等。