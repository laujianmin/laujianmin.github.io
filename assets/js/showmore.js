function toggle_vis(id) {
  var element = document.getElementById(id);
  var buttonElement = document.querySelector(`button[data-id="${id}"]`);
  var newsList = document.getElementById("newsList");

  if (element.style.display === "none") {
    element.style.display = "block";
    buttonElement.textContent = "Show Less";
    newsList.appendChild(buttonElement.parentNode); // 移动按钮的父节点到最末尾
  } else {
    element.style.display = "none";
    buttonElement.textContent = "Show More";
    newsList.insertBefore(buttonElement.parentNode, element); // 移动按钮的父节点到之前的位置
  }
  // 更新 data-id 属性
  buttonElement.setAttribute("data-id", id)
}
