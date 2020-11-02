let that;
class Tab{
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);
        this.ul = this.main.querySelector("ul");
        this.li = this.ul.querySelectorAll(".tab-nav-li");
        this.sections = this.main.querySelector(".tab-section");
        this.section = this.sections.querySelectorAll(".tab-section-item")
        this.add = this.main.querySelector(".tab-add");
        // console.log(this.li);
        this.init();
    }
    // 初始化样式
    init () {
        this.clearClass();
        this.toggleTab();
        for (let i = 0; i < this.li.length; i++) {
            if (i == 0) {
                this.li[i].classList.add("activte");
                this.section[i].style.display = "block";
            }
            this.li[i].setAttribute("data-index", i);
        }
        this.addTab()

    }
    // 清除样式
    clearClass () {
        for (let i = 0; i < this.li.length; i++){
            this.li[i].classList.remove("activte");
            // console.log(this.section[i]);
            this.section[i].style.display = "none"
            // console.log(i);
        }
    }
    // 标签切换
    toggleTab () {
        for (let i = 0; i < this.li.length; i++){
            this.li[i].addEventListener("click", function () {
                that.clearClass();
                this.classList.add("activte");
                that.section[i].style.display = "block";
                // console.log(this.hasAttribute("data-index"));
                // console.log(this.getAttribute("data-index"));
                // this.att
            })
            // console.log(i);
        }
    }
    // 添加标签
    addTab () {
        this.add.addEventListener("click", function () {
            var li = '<li class="tab-nav - li"><span>测试</span><span class="remove">x</span></li>';
            that.ul.insertAdjacentHTML("beforeend", li);
            console.log(li);
        })
        this.toggleTab();
    }
    // 移除标签
    removeTab () {
        
    }
    // 编辑标签
    editTab () {
        
    }
}
window.addEventListener("load", function () {
    let tab = new Tab("#tab");
    
})