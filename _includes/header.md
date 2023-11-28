<header>     
  {% if site.avatar %}
  <a class="image avatar"><img src="{{ site.avatar }}" alt="avatar" /></a>
  {% endif %}

  <h1>{{ site.title }}</h1>

  {% if site.position %}
  <position style="font-size:1.10rem;">{{ site.position }}</position>
  <br>
  {% endif %}
  {% if site.affiliation %}
  <a href="{{ site.affiliation_link }}" rel="noopener"><autocolor>{{ site.affiliation }}</autocolor></a>
  <br>
  {% endif %}
  {% if site.email %}
  <email>{{ site.email }}</email>
  {% endif %}
  {% if site.email2 %}
  <br>
  <email>{{ site.email2 }}</email>
  {% endif %}
  
  <br>
  <br>

  {% if site.link_type == 'text' %}
  [<a href="{{ site.google_scholar }}">Google Scholar</a>]
  <br>
  [<a href="{{ site.cv_link }}">Curriculum Vitae</a>]
  <br>
  {% endif %}

  {% if site.link_type == 'icon' %}
  <div class="social-icons">
    {% if site.google_scholar %}
    <a style="margin: 0 5px 0 0" href="{{ site.google_scholar }}">
      <i class="ai ai-google-scholar" style="font-size:1.2rem"></i>
    </a>  
    {% endif %}

    {% if site.cv_link %}
    <a style="margin: 0 5px 0 0" href="{{ site.cv_link }}">
      <i class="ai ai-cv" style="font-size:1.3rem;"></i>
    </a>
    {% endif %}

    {% if site.github_link %}
    <a style="margin: 0 5px 0 0" href="{{ site.github_link }}">
      <i class="fab fa-github"></i>
    </a>
    {% endif %}

    {% if site.linkedin %}
    <a style="margin: 0 5px 0 0" href="{{ site.linkedin }}">
      <i class="fab fa-linkedin"></i>
    </a>
    {% endif %}

    {% if site.twitter %}
    <a style="margin: 0 0 0 0" href="{{ site.twitter }}">
      <i class="fab fa-x-twitter"></i>
    </a>
    {% endif %}
  </div>
  {% endif %}
  <br>
</header>