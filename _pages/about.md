---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

*Zihang Zhen* is currently a Ph.D. student at Huazhong University of Science and Technology (HUST), under the supervision of Prof. *[Rui Zhang](https://www.ruizhang.info/)*. His research interests focus on **Recommendation Systems** and **Large Language Models**. Previously, he earned a master's degree from Fujian Normal University, where he studied under the guidance of Prof. *[Hui Lin](https://ccs.fjnu.edu.cn/0d/98/c16741a331160/page.htm)* and Associate Prof. *[Xiaoding Wang](https://xiaodingwang.github.io/WangXiaoding.github.io/)*, focusing on **Blockchain** and **Machine Learning**. To date, he has published several papers in CCF-A and SCI-Q1 journals and serves as a reviewer for them. In addition, his interests extend to **Embedded Software Development** and **Network Security**, areas in which he possesses substantial engineering experience.



{% include_relative includes/news.md %}

{% include_relative includes/publications.md %}

{% include_relative includes/services.md %}


<script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=828384&w=550&t=n&d=X1hE1r5O27mChe6EsSHp4RTz-niIHZKgJQQ2nT5mJ5k&co=ffffff&ct=000000&cmo=3a97c2&cmn=DF7983'></script>
