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

<i>**Jianmin Liu**</i> is currently a Ph.D. student at Xi'an Jiaotong University specializing in **Federated Learning** and **Large Language Models**, under the supervision of Associate Prof. **[Li Yan](https://liyan2015.github.io/)**. Prior to this, he obtained a master's degree in Cyberspace Security from Fujian Normal University under the supervision of Prof. *[Hui Lin](https://ccs.fjnu.edu.cn/0d/98/c16741a331160/page.htm)* and Associate Prof. *[Xiaoding Wang](https://xiaodingwang.github.io/WangXiaoding.github.io/)*, focusing on research related to spatiotemporal traffic data in smart cities. Currently, his research is expecting to promote large language models to a more secure, low-cost and privacy-protected new stage. He possesses a strong sense of initiative and hope to have the opportunity to explore interesting and meaningful things with you.

<span class='anchor' id='news'></span>
{% include_relative includes/news.md %}

<span class='anchor' id='publications'></span>
{% include_relative includes/publications.md %}

<span class='anchor' id='services'></span>
{% include_relative includes/services.md %}

<!-- <span class='anchor' id='contact'></span>
{% include_relative includes/contact.md %} -->


<script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=002d72&w=300&t=tt&d=aJXbRAq8L914nem5MbNfBr6sHx9heTatErrk5KvM6hA&co=ffffff&cmo=6fcac7&cmn=21ee21&ct=9f498a'></script>

{% include_relative includes/footer.md %}

