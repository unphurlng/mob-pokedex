const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

const PER_PAGE = 20;

export default function loadPages(pokedexLength, callback) {
    const totalPageCount = Math.ceil(pokedexLength / PER_PAGE);
    totalPages.textContent = totalPageCount;
    
    
    let currentPageNumber = 1;
    
    function updatePaging() {
        currentPage.textContent = currentPageNumber;
        const pageOptions = {
            currentPage: currentPageNumber,
            perPage: PER_PAGE
        };
        
        console.log(pageOptions);
        
        previousButton.disabled = currentPageNumber === 1;
        nextButton.disabled = currentPageNumber === totalPageCount;
        
        callback(pageOptions);
    }
    updatePaging();
    
    nextButton.addEventListener('click', () => {
        currentPageNumber++;
        updatePaging();
    });

    previousButton.addEventListener('click', () => {
        currentPageNumber--;
        updatePaging();
    });


}