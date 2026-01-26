# 📝 Publications
<p><strong>Selected Publications</strong> (<em>Note: * indicates Corresponding authors.</em>)</p>

{% assign all_pubs = site.data.selected_publications.journal | concat: site.data.selected_publications.conference | sort: "date" | reverse%} 
{% for link in all_pubs %}
<div class='paper-box'>
  <div class='paper-box-image'>
    <div><div class="badge">{{ link.journal_short }}</div><img src='{{ link.image }}' alt="sym" width="100%"></div>
  </div>
  <div class='paper-box-text' style="position: relative;" >
    <div class="title"><a href="{{ link.doi }}">{{ link.title }}</a></div>
    <div class="author">{{ link.authors }}</div>
    <p></p>
    <div class="periodical"><em>{{ link.conference}} {{link.journal}}, {{link.date}}.</em></div>
    <li>{{ link.notes }} <strong><span class='show_paper_citations' data='{{ link.cited }}'></span></strong></li>
    <li>{{ link.keywords }}</li>

    <div class="links">
      {% if link.pdf %}
      <a href="{{ link.pdf }}" class="small-btn" role="button" target="_blank" style="font-size:12px;">PDF</a>
      <!-- <button class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12.5px;" onclick="window.location.href='{{ link.pdf }}'">PDF</button> -->
      {% endif %}
      {% if link.code %}
      <a href="{{ link.code }}" class="small-btn" role="button" target="_blank" style="font-size:12px;">Code</a>
      {% endif %}
      {% if link.page %}
      <a href="{{ link.page }}" class="small-btn" role="button" target="_blank" style="font-size:12px;">Page</a>
      {% endif %}
      {% if link.bibtex %}
      <button class="small-btn" role="button" target="_blank" style="font-size:12.5px;" onclick="copyToClipboard(`{{ link.bibtex }}`)">BibTex</button>
      {% endif %}
      {% if link.slices %}
      <a href="{{ link.slices }}" class="small-btn" role="button" target="_blank" style="font-size:12px;">Slices</a>
      {% endif %}
      {% if link.others %}
      {{ link.others }}
      {% endif %}

    </div>
  </div>
</div>
{% endfor %}

<p><strong>All publications:</strong> </p>
{% assign all_pubs = site.data.publications.journal | concat: site.data.publications.preprint | concat: site.data.publications.conference | sort: "date" | reverse%}
{% for link in all_pubs %}  
<div class='paper-box-text'>
    <p>[{{ forloop.index }}] {{ link.authors }}. {{ link.title }}.<em>{{ link.conference}} {{link.journal}}, {{link.date}}</em>. 
    {% if link.code %}
      <a href="{{ link.code }}">[Code]</a>
    {% endif %} 
    <font color="#ff0000">{{ link.notes }}</font> </p>
</div>
{% endfor %}

<span id="total_cit" style="display: none; text-align: right; color: #888 !important;"></span>

