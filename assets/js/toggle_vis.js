function toggle_vis(id) {
    var element = document.getElementById(id);
    var linkElement = document.querySelector(`a[href="javascript:toggle_vis('${id}')"]`);
    var newsList = document.getElementById("newsList");
  
    if (element.style.display === "none") {
        element.style.display = "block";
        linkElement.textContent = "Show Less";
  
        // 移动 "Show Less" 链接到最末尾
        var toggleLink = document.getElementById("toggleLink");
        newsList.appendChild(toggleLink);
    } else {
        element.style.display = "none";
        linkElement.textContent = "Show More";
  
        // 移动 "Show More" 链接到之前的位置
        var toggleLink = document.getElementById("toggleLink");
        newsList.insertBefore(toggleLink, element);
    }
  
    // 更新 href 链接
    linkElement.setAttribute("href", `javascript:toggle_vis('${id}')`);
  }
  