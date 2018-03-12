describe('PortfolioAppTesting', () => {

    let articleElements, article3, article2, article1, articleGenerator
    // articleGenerator = new simpleGenerator(articleElements)
    describe('ArticleGenerator', () => {
        beforeEach(() => {
             article1 = document.createElement("article");// class="new-card"
            article1.setAttribute("id", "article1");
            //article1.setAttribute("class", "hidden");
            document.querySelector("body").appendChild(article1);

            article2 = document.createElement("article");// class="new-card"
            article2.setAttribute("id", "article2");
            article1.setAttribute("class", "hidden");
            document.querySelector("body").appendChild(article2);

            article3 = document.createElement("article");// class="new-card"
            article3.setAttribute("id", "article3");
            article3.setAttribute("class", "hidden");
            document.querySelector("body").appendChild(article3);

            articleElements = document.querySelectorAll('article')
            //articleGenerator = new simpleGenerator(articleElements);
        })

        describe('current method', () => {
            it("should return first article on initialization", () => {
                const articleGenerator = new simpleGenerator(articleElements)
                expect(articleGenerator.current()).toEqual(article1)
            })
        })
        describe('next method', () => {
            it("should return second article on initialization", () => {
                const articleGenerator = new simpleGenerator(articleElements)
                expect(articleGenerator.next()).toEqual(article2)
            })
        })
        describe('current method', () => {
            it("should return second article after next was run", () => {
                const articleGenerator = new simpleGenerator(articleElements)
                articleGenerator.next()
                expect(articleGenerator.current()).toEqual(article2)
            })
        })
        describe('set method', () => {
            it("should take a value to reset the index and return the new current", () => {
                const articleGenerator = new simpleGenerator(articleElements)

                expect(articleGenerator.set(1)).toEqual(article2)
                expect(articleGenerator.current()).toEqual(article2)
            })
        })
        describe('prev method', () => {
            it("should return third article from init (loop back around)", () => {
                const articleGenerator = new simpleGenerator(articleElements)
                expect(articleGenerator.prev()).toEqual(article3)
                expect(articleGenerator.current()).toEqual(article3)
            })
        })
        describe('getIndex method', () => {
            it("should return current index number always", () => {
                const articleGenerator = new simpleGenerator(articleElements)
                expect(articleGenerator.getIndex()).toEqual(0)
                articleGenerator.prev()
                expect(articleGenerator.getIndex()).toEqual(2)
            })
        })
        describe('flipArticle function ', () => {
            it("with no parameter should remove hidden class from current element, change to the next article, and add hidden class to new article", () => {
                var articleGenerator = new simpleGenerator(articleElements)
                flipArticle();
                a1 = document.querySelector("#article1")
                expect(a1.classList.value.include("hidden")).toBeFalsy()
                a2 = document.querySelector("#article2")
                expect(a1.classList.value.include("hidden")).toBeTruthy()
                expect(articleGenerator.current()).toEqual(article2)
            })
        })
        describe('flipArticle function ', () => {
            it("with an index should remove hidden class from current element, change to index article, and add hidden class to that article", () => {
                var articleGenerator = new simpleGenerator(articleElements)
                flipArticle(2);
                a1 = document.querySelector("#article1")
                expect(a1.classList.value.include("hidden")).toBeFalsy()
                a2 = document.querySelector("#article3")
                expect(a1.classList.value.include("hidden")).toBeTruthy()
                expect(articleGenerator.current()).toEqual(article3)
            })
        })
    })
    describe('jsModuloIsDumb function ', () => {
        it("should return the positive high value when getting a negative number", () => {
            expect(jsModuloIsDumb(-1, 43)).toEqual(42)
        })
    })
   
    describe('flipCaret function ', () => {
        it("should swap fa-caret-down for fa-caret-right", () => {
            underTest = document.createElement("div");// class="new-card"
            underTest.setAttribute("class", "fa-caret-down");
            expect(underTest.classList.value.includes("fa-caret-right")).toBeFalsy()
            flipCaret(underTest)
            expect(underTest.classList.value.includes("fa-caret-down")).toBeFalsy()
            expect(underTest.classList.value.includes("fa-caret-right")).toBeTruthy()

        })
    })
    describe('toggleHide function ', () => {
        it("should add hide class to an element if it does not have it", () => {
            underTest = document.createElement("div");
            expect(underTest.classList.value.includes("hide")).toBeFalsy()
            toggleHide(underTest)
            expect(underTest.classList.value.includes("hide")).toBeTruthy()
        })
    })
    describe('toggleHide function ', () => {
        it("should remove hide class from an element if it has it", () => {
            underTest = document.createElement("div");
            underTest.setAttribute("class", "hide");
            expect(underTest.classList.value.includes("hide")).toBeTruthy()
            toggleHide(underTest)
            expect(underTest.classList.value.includes("hide")).toBeFalsy()
        })
    })
    describe('toggleModal function ', () => {
        it("should add show-model class only to aside element if missing", () => {
            fakeTest = document.createElement("aside");
            underTest = document.createElement("div");
            document.querySelector("body").appendChild(fakeTest);
            document.querySelector("body").appendChild(underTest);
            expect(document.querySelectorAll("show-modal").length).toEqual(0)
            toggleModal()
            expect(document.querySelector("div").classList.value.includes("show-modal")).toBeFalsy()
            expect(document.querySelector("aside").classList.value.includes("show-modal")).toBeTruthy()
        })
    })
    describe('setButton function ', () => {
        it("should remove the button-selected class from any button with it and add it to specified button number by value", () => {
            testButton1 = document.createElement("button");
            testButton1.setAttribute("value", "0");
            testButton1.setAttribute("class", "button-selected");

            testButton2 = document.createElement("button");
            testButton2.setAttribute("value", "1");
            testButton2.setAttribute("class", "button-selected");

            testButton3 = document.createElement("button");
            testButton3.setAttribute("value", "2");
            testButton3.setAttribute("class", "button-selected");

            document.querySelector("body").appendChild(testButton1);
            document.querySelector("body").appendChild(testButton2);
            document.querySelector("body").appendChild(testButton3);
            expect(document.querySelectorAll(".button-selected").length).toEqual(3)
            setButton(1)
            expect(document.querySelectorAll(".button-selected").length).toEqual(1)
            expect(document.querySelector("button[value='1']").classList.value.includes("button-selected")).toBeTruthy()
        })
    })
/*
const setButton = (buttonNum) => {
    document.querySelectorAll(".button-selected").forEach(button => button.classList.remove("button-selected"))
    document.querySelectorAll("button[value='" + buttonNum + "']").forEach(b => b.classList.add("button-selected"))
                                <button value=3 class="nav_project_4 ">4</button>

}*/

})