let that;
class Tab {
    constructor(id) {
        // 初始化自动调用
        that = this;
        this.main = document.querySelector(id);
        this.nav = this.main.querySelector(".tab-nav");
        this.ul = this.nav.querySelector("ul");

        this.add = this.nav.querySelector(".tab-add");
        // console.log(this.remove);

        this.sections = this.main.querySelector(".tab-section");

        this.updateNode();
        // console.log(this.tabLi);
        this.init();
    }

    init() {
        // 初始化

        // 移除默认样式
        this.removeScript();
        // 挂载切换标签页功能
        this.toggleTab();
        // 点击第一个标签页
        this.tabLi[0].click();
        // 添加标签页功能
        this.addTab();
        // 挂载移除标签页功能
        this.removeTab();
        // 挂载编辑标签页功能
        this.editTab();
    }

    updateNode() {
        // 更新节点
        this.tabLi = this.nav.querySelectorAll(".tab-nav-li");
        this.section = this.sections.querySelectorAll(".tab-section-item");
        this.remove = this.nav.querySelectorAll(".remove");
    }

    removeScript() {
        // 移除样式
        for (let i = 0; i < this.tabLi.length; i++) {
            this.tabLi[i].classList.remove("activate");
            this.section[i].style.display = "none";
            // console.log(this.section[i]);
        }
    }

    toggleTab() {
        // 标签栏切换
        for (let i = 0; i < this.tabLi.length; i++) {
            this.tabLi[i].addEventListener("click", function () {
                that.removeScript();
                this.classList.add("activate");
                that.section[i].style.display = "block";
            });
        }
    }

    addTab() {
        // 添加标签
        this.add.addEventListener("click", function () {
            // 添加节点
            let li =
                '<li class="tab-nav-li"><span>测试</span><span class="remove">x</span></li>';
            that.ul.insertAdjacentHTML("beforeend", li);
            let section =
                '<div class="tab-section-item">内容测试' +
                Math.random() +
                "</div>";
            that.sections.insertAdjacentHTML("beforeend", section);
            // 初始化并更新节点挂载事件
            that.updateNode();
            // 清除默认样式
            that.removeScript();
            // 每次添加节点都重新挂载一遍移除和切换功能
            that.toggleTab();
            that.removeTab();
            // 点击新添加的节点
            that.tabLi[that.tabLi.length - 1].click();

            that.editTab();
        });
    }

    removeTab() {
        // 移除标签
        for (let i = 0; i < this.tabLi.length; i++) {
            this.remove[i].addEventListener("click", function () {
                // 移除li
                this.parentNode.remove();
                // 移除section
                that.section[i].remove();
                // that.tabLi[i - 1].click();
                // that.tabLi[-1].click();
                console.log(that.tabLi[-1]);

                // console.log(that.tabLi[i - 1]);
                // that.tabLi[i - 1].click();
                // console.log(that.tabLi[index - 1]);
                // console.log(index);
                console.log();
            });
        }
    }

    editTab() {
        // 更改标签内容
        for (let i = 0; i < this.tabLi.length; i++) {
            this.tabLi[i].addEventListener("dblclick", function () {
                window.getSelection
                    ? window.getSelection().removeAllRanges()
                    : document.section.empty();
                let str = this.querySelector("span").innerHTML;
                // console.log(str);
                this.innerHTML = "<input type='text' class='editInput'>";
                this.input = this.querySelector("input");
                this.input.value = str;
                this.input.focus();
                this.input.addEventListener("blur", function () {
                    // console.log(11);
                    that.tabLi[i].innerHTML =
                        "<span>" +
                        this.value +
                        '</span><span class="remove">x</span>';
                });
                this.input.addEventListener("keyup", function (e) {
                    if (e.keyCode === 13) {
                        this.blur();
                    }
                });
            });
            this.section[i].addEventListener("dblclick", function () {
                window.getSelection
                    ? window.getSelection().removeAllRanges()
                    : document.section.empty();
                let str = this.innerHTML;
                // console.log(str);
                this.innerHTML = "<input type='text' class='editInput'>";
                this.input = this.querySelector("input");
                this.input.value = str;
                this.input.select();
                this.input.addEventListener("blur", function () {
                    // console.log(11);
                    this.parentNode.innerHTML = this.value;
                });
                this.input.addEventListener("keyup", function (e) {
                    if (e.keyCode === 13) {
                        this.blur();
                    }
                });
            });
        }
    }
}
window.addEventListener("load", function () {
    let tab = new Tab("#tab");
});
