const textarea = document.getElementById('text');
const CharactersCount = document.getElementById('cC');
const WordsCount = document.getElementById('wC');

textarea.oninput = () => {
    let characters = textarea.value;
    CharactersCount.textContent = characters.replace(/\s/g, '').length;
    
    let words = textarea.value.split(' ').filter((item) => {
        return item != '';

    });
   WordsCount.textContent = words.length;
   
};