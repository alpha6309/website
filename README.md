# 網站維護說明

# 目錄說明
* [/pages](/pages)
首頁、關於我們、出版品
* [/assets/images](/assets/images)
圖片目錄，儘量以子目錄分類圖片
* [/posts](/posts)
最新活動消息
* [/_introduction](/_introduction)
關於讀經
* [/_testimony](/_testimony)
讀經見證
* [/_jewish](/_jewish)
猶太教育
* /_data 網站設定資料
* /example 範例網頁

# 設定
## 選單
[/_data/navigation.yml](/_data/navigation.yml)

## 相關資源
[/_data/external_links.yml](/_data/external_links.yml)
## 出版品
[/_data/books.yml](/_data/books.yml)

## 首頁事工簡介
[/_data/projects.yml](/_data/projects.yml)
## 團隊
[/_data/team.yml](/_data/team.yml)

# 最新活動消息
* 檔名格式必須為 `yyyy-mm-dd-文章文稱.md` 例如 `2019-05-28-親子朗誦課程`
* 文章前面一對三個橫線 `---` 中間夾的內容是文章的「前置設定」，不會顯示在網頁上： 
```
---
layout: post
title: "花兒姐姐的親子朗誦小學堂"
date: 2019-05-28 00:00:00 +0800
...
---
```
## 新增消息
複製一篇現有文章，修改內容以及前置設定的中的 title、date，日期越近的會排在越左邊。