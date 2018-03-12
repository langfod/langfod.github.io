

const setButton = (buttonNum) => {
    document.querySelectorAll(".button-selected").forEach(button => button.classList.remove("button-selected"))
    document.querySelectorAll("button[value='" + buttonNum + "']").forEach(b => b.classList.add("button-selected"))
}

const flipArticle = (articleNum) => {
    const currentElem = articleGenerator.current();
    if (!currentElem.classList.value.includes("hidden")) {
        currentElem.classList.add("hidden")
    }
    newArticleElem = (articleNum != undefined) ? articleGenerator.set(articleNum) : articleGenerator.next()
    newArticleElem.classList.remove("hidden")
}

const flipCaret = (elem) => {
    const caretDown = "fa-caret-down";
    const caretUp = "fa-caret-right";
    if (elem.className.includes(caretDown)) {
        elem.classList.replace(caretDown, caretUp)
    } else {
        elem.classList.replace(caretUp, caretDown)
    }
}

const toggleHide = (elem) => elem.classList.toggle("hide")
const toggleModal = () => document.querySelector("aside").classList.toggle("show-modal")


const lauchTheListeners = () => {

    document.querySelector("aside").addEventListener("click", () => toggleModal());
    document.querySelector("#about_me_btn").addEventListener('click', () => toggleModal());

    document.querySelector("button#project-left").addEventListener('click', () => {
        flipArticle(articleGenerator.getIndex() - 1);
        setButton(articleGenerator.getIndex());
    });

    document.querySelector("button#project-right").addEventListener('click', () => {
        flipArticle(articleGenerator.getIndex() + 1);
        setButton(articleGenerator.getIndex());
    });


    document.querySelector(".main_top_header_top-arrow").addEventListener('click', (event) => {
        toggleHide(document.querySelector("header nav"))
        toggleHide(document.querySelector("footer nav"))
        toggleHide(document.querySelector("footer address"))
        flipCaret(event.target)
    });

    document.querySelectorAll(".article-content-arrow").forEach(a => a.addEventListener('click', (event) => {
        flipCaret(event.target)
        const elemContainerId = event.target.parentNode.parentNode.id
        toggleHide(document.querySelector("#" + elemContainerId + " .article-content"))
        toggleHide(document.querySelector("#" + elemContainerId + " .imageHolder"))
    }));

    [".nav_project_1", ".nav_project_2", ".nav_project_3", ".nav_project_4", ".nav_project_5"].forEach(button => document.querySelectorAll(button).forEach(b =>
        b.addEventListener('click', () => {
            flipArticle(b.value);
            setButton(b.value);
        })));
}

const jsModuloIsDumb = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor

class simpleGenerator {
    constructor(list) {
        this.list = list
        this.currentIndex = 0;
    }

    prev() {
        this.currentIndex = jsModuloIsDumb(--this.currentIndex, this.list.length)
        return this.list[this.currentIndex]
    }

    next() {
        this.currentIndex = jsModuloIsDumb(++this.currentIndex, this.list.length)
        return this.list[this.currentIndex]
    }

    current() { return this.list[this.currentIndex] }

    set(toIndex) {
        this.currentIndex = jsModuloIsDumb(toIndex, this.list.length)
        return this.list[this.currentIndex]
    }

    getIndex() {
        return this.currentIndex;
    }
}

const run = () => {
    articleGenerator = new simpleGenerator(document.querySelectorAll('article'));

    flipArticle(0);
    setButton(0);
    lauchTheListeners();
}


run()
