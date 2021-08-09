


const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                autor:"T. Harv Eker"
            },
            {
                title: "O homem mais rico da Babilônia",
                autor:"George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                autor:"Robert & Sharon"
            }
        ]
    },
    {
        category: "Inteligência emocional",
        books: [
            {
                title: "Você é insubstituivel",
                autor:"Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                autor:"Augusto Cury"
            },
            {
                title: "Os 7 habitos das pessoas altamente eficazes",
                autor:"Stephen R. Covey"
            }
        ]
    }
]

countCategories(booksByCategory)

function countCategories(booksByCategory){
    document.querySelector("p.categoriesresult").innerHTML = (`The number of categories is: ${booksByCategory.length}`)
}

countAuthors(booksByCategory)

function countAuthors(booksByCategory){
    for (let category2 of booksByCategory) {
        document.querySelector("p.authorsresult").innerHTML = (`The number of categories is: ${category2.category} and ${category2.books.length}`)
        console.log(`${category2.category}`)
        console.log(`${category2.books.length}`)
    }
}

