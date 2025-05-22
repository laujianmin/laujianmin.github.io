# 💬 Services
<ul style="margin:0 0 5px;">

  {% assign journal_reviews = site.data.service.main | where: "event", "Journal_Reviews" %}
  {% if journal_reviews.size > 0 %}
    <h4>[Journal Reviews]</h4>
    {% for service in journal_reviews %}
        <li>
          <!-- {{ service.event }} for  -->
          {% if service.href %}  
            <a href="{{ service.href }}">{{ service.object }} ({{ service.date }})</a>
          {% else %}
            {{ service.object }} ({{ service.date }})
          {% endif %}.
        </li>
    {% endfor %}
  {% endif %}

  <!-- 会议审稿（仅在存在数据时显示整个版块） -->
  {% assign conference_reviews = site.data.service.main | where: "event", "Conference_Reviews" %}
  {% if conference_reviews.size > 0 %}
    <h4>[Conference Reviews]</h4>
    {% for service in conference_reviews %}
      <li>
        <!-- {{ service.event }} for  -->
        {% if service.href %}  
          <a href="{{ service.href }}">{{ service.object }} ({{ service.date }})</a>
        {% else %}
          {{ service.object }} ({{ service.date }})
        {% endif %}.
      </li>
      {% endfor %}
  {% endif %}
  

  <!-- 其他类型服务：助教、 -->
  {% for service in site.data.service.main %}
    {% if service.event == 'Assistant' %}
      <li>Teaching assistant for <em>{{ service.object }}</em> courses ({{ service.date }}).</li>
    {% endif %}
  {% endfor %}
</ul>

<!-- # 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.

# 📖 Educations
- *2019.06 - 2022.04 (now)*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.
- *2015.09 - 2019.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.

# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->