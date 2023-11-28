<footer id="footer-container">
    {% if site.footnote %}
        <div>
          <br>
          <a>{{ site.footnote }}</a>
        </div>
        {% endif %}
  <div style="font: 12px/1.2 Crimson Pro, serif">
    <p>
      <small>
      {% if site.imprint %}
      <a href="{{ site.imprint }}" rel="noopener"><autocolor>Imprint / Impressum</autocolor></a><br>
      {% endif %}
      {% if site.data_protection %}
      <a href="{{ site.data_protection }}" rel="noopener"><autocolor>Data Protection / Datenschutzhinweis</autocolor></a>
      {% endif %}
      </small>
    </p>
  </div>
  <br>
  <br>
</footer>