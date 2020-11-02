class Tab{
    constructor(id){
        this.main = document.querySelector(id);
        this.ul = this.main.querySelector("ul");
        this.li = this.ul.querySelectorAll(".tab-nav-li");
        // console.log(this.li);
        this.init();
    }
    init () {
        this.toggleTab();
    }
    clearClass () {
        for (let i = 0; i < this.li.length; i++){
            this.li[i].classList.remove("activte");
            // console.log(i);
        }
    }
    toggleTab () {
        this.clearClass();
        for (let i = 0; i < this.li.length; i++){
            this.li[i].addEventListener("click", function () {
                this.classList.add("activte");
            })
            // console.log(i);
        }
    }
    addTab () {
        
    }
    removeTab () {
        
    }
    editTab () {
        
    }
}
window.addEventListener("load", function () {
    let tab = new Tab("#tab");
    
})