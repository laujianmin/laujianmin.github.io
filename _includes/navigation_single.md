<div class="topnav">
    <a href="{{ site.affiliation_link }}"><img width="350" src="{{ site.affiliation_logo }}"></a>
    <div id="myLinks">
        {% for link in site.data.navigation.main %}
        {% if link.right %}
          <a class="normal right" href="{{ link.anchor}}">{{ link.title }}</a>
          {% else %}
          <a class="normal" href="{{ link.anchor }}">{{ link.title }}</a>
        {% endif %}
      {% endfor %}    
    </div>
  
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
    </a>
</div>

 
<script>
    function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    }
</script>
<script src="./assets/js/toggle_vis.js"></script>
<script src="./assets/js/vanilla-back-to-top.min.js"></script>
<script>addBackToTop({
         backgroundColor: '#fff',
         innerHTML: 'Back to Top',
         textColor: '#333'
       })
</script>
<style>
    #back-to-top {
    border: 1px solid #ccc;
    border-radius: 0;
    font-size: 15px;
    width: 100px;
    text-align: center;
    line-height: 30px;
    height: 30px;
    }
</style>
