let that;
class Tab {
    constructor(id) {
        // 初始化自动调用
        that = this;
        this.main = document.querySelector(id);
        // console.log(this.main);
        this.getNode(this.main);

        this.init();
        this.toggleTab();
    }

    getNode(rootNode) {
        // 获取节点
        this.nav = rootNode.querySelector(".tab-nav");
        this.tabLi = this.nav.querySelectorAll(".tab-nav-li");

        this.add = this.nav.querySelector(".tan-add");
        this.remove = this.nav.querySelector(".remove");

        this.sections = rootNode.querySelector(".tab-section");
        this.section = this.sections.querySelectorAll(".tab-section-item");
    }

    updateNode() {
        // 更新节点
    }

    init() {
        // 初始化
        for (let i = 0; i < this.tabLi.length; i++) {
            this.tabLi[i].classList.remove("activate");
            this.section[i].style.display = "none";
            // console.log(this.section[i]);
        }
    }
    clickTab() {}

    toggleTab() {
        // 标签栏切换
        for (let i = 0; i < this.tabLi.length; i++) {
            this.tabLi[i].addEventListener("click", function () {
                that.init();
                this.classList.add("activate");
                that.section[i].style.display = "block";
            });
        }
    }

    addTab() {
        // 添加标签
    }

    removeTab() {
        // 移除标签
    }

    editTab() {
        // 更改标签内容
    }
}
window.addEventListener("load", function () {
    let tab = new Tab("#tab");
});
