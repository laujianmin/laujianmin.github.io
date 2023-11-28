# laujianmin.github.io

This is the latest version of my homepage's source code. Feel free to use and share.

----
data:文件夹中的yml配置文件
    navigation：配置导航地址和页面，跳转到根目录对应的`md`文件
    publications:配置出版物详情页面
    settings：目前仅配置footer和联系页面。

layout：html网页的模板
    只继承写好的网页模板`md`文件，里面的语法动态调用配置文件中的具体内容来填充。

include：网页的具体实现
    设计到js和css排版的问题，一般不改动，可以微调。

assets：附件的存放位置
    CV的文件、
    论文封面图
    网站元素等

`Tips:`
包含文件的命令：`include`和`include_relative`
> {% include_relative _includes/news.md %}  从当前位置的相对路径进行文件包含
> include 从`_includes`文件夹进行文件包含

配置文件报错，检查缩进，使用空格不要用tab。


----
<br />
For more details, please refer to this repository: <https://github.com/yaoyao-liu/minimal-light> and <https://jekyll-themes.com/LeNPaul/academic>.

