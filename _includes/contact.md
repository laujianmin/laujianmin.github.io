<div class="row g-5 mb-5" id="contact">
  <div>
    <h2 style="margin: 60px 0px 10px;">Contact</h2>
    {% for contact in site.data.settings.contacts %}
    <div class="row g-5 mb-5">
      <div class="col-md-6">
        
        <!-- <h4>{{ contact.name }}</h4> -->
        <p>{{ contact.title }} | {{ contact.department }}</p>
        <p>{{ contact.institution }} | {{ contact.institution_address }}</p>
        <p>Phone: {{ contact.phone }}</p>
        <p>Email: {{ contact.email }}</p>
        <p>Office: {{ contact.office }}</p>
      </div>
      <!-- <div class="col-md-6">
        <img src="{{ site.github.url }}/{{ contact.image }}" alt="Contact" width="100%">
      </div> -->
    </div>
    {% endfor %}
  </div>
</div>
