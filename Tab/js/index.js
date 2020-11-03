let that;
class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);
        this.ul = this.main.querySelector("ul");
        this.sections = this.main.querySelector(".tab-section");
        this.add = this.main.querySelector(".tab-add");
        this.li = this.ul.querySelectorAll(".tab-nav-li");
        this.section = this.sections.querySelectorAll(".tab-section-item");
        // console.log(this.li);
        this.init();
        this.addTab();
    }
    // 初始化样式
    init() {
        // console.log(this.remove);
        this.getNode();

        for (let i = 0; i < this.li.length; i++) {
            // if (i == 0) {
            //     this.li[i].classList.add("activate");
            //     this.section[i].style.display = "block";
            // }
            this.li[i].setAttribute("data-index", i);
        }
        this.clearClass();
        this.toggleTab();
        that.li[0].click();
        this.removeTab();
    }
    // 重新获取样式
    getNode() {
        this.li = this.ul.querySelectorAll(".tab-nav-li");
        this.section = this.sections.querySelectorAll(".tab-section-item");
        this.remove = this.ul.querySelectorAll(".remove");
    }
    // 清除样式
    clearClass() {
        for (let i = 0; i < this.li.length; i++) {
            this.li[i].classList.remove("activate");
            // console.log(this.section[i]);
            this.section[i].style.display = "none";
            // console.log(i);
        }
    }
    // 标签切换
    toggleTab() {
        for (let i = 0; i < this.li.length; i++) {
            this.li[i].addEventListener("click", function () {
                that.clearClass();
                this.classList.add("activate");
                that.section[i].style.display = "block";
                // console.log(this.hasAttribute("data-index"));
                // console.log(this.getAttribute("data-index"));
            });
            // console.log(i);
        }
    }
    // 添加标签
    addTab() {
        this.add.addEventListener("click", function () {
            let li =
                '<li class="tab-nav-li"><span>测试</span><span class="remove">x</span></li>';
            that.ul.insertAdjacentHTML("beforeend", li);
            let section =
                '<div class="tab-section-item">内容测试' +
                Math.random() +
                "</div>";
            that.sections.insertAdjacentHTML("beforeend", section);
            that.init();
            // console.log(that.li.length);
            that.li[that.li.length - 1].click();
            // console.log(li);
        });
    }
    // 移除标签
    removeTab() {
        // TODO
        let index = 0;
        for (let i = 0; i < that.li.length; i++) {
            this.remove[i].addEventListener("click", function () {
                index = this.parentNode.getAttribute("data-index");
                console.log(this.parentNode.previousSibling);

                this.parentNode.remove();
                that.section[index].remove();

                that.li[index - 1].click();
            });

            // console.log(index);
        }
        // console.log(that.li[i].getAttribute("data-index"));
    }
    // 编辑标签
    editTab() {}
}
window.addEventListener("load", function () {
    let tab = new Tab("#tab");
});
