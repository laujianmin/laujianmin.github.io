
  function copyToClipboard(content) {

    navigator.clipboard.writeText(content)
      .then(() => {
        alert('已复制到剪贴板');
      })
      .catch((error) => {
        console.error('复制失败:', error);
      });
  }