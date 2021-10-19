/**
 * Event handler for 'Statistics' button.
 * Calculates following values fot the given text and displays them in corresponding fields:
 * 1. Count of characters;
 * 2. Count of spaces;
 * 3. Count of chars for vowels and consonants;
 * 4. Count of words.
 * @param {object} event - Event class
 */
function onStatisticsClicked(event) {
    document.getElementById('valCharCount').value  = document.getElementById('text').value.length - 1;
    document.getElementById('valWordsCount').value  = document.getElementById('text').value.replace(/ *n*r*t*/g, "").length - 1;
    document.getElementById('valSpacesCount').value = document.getElementById('valCharCount').value - document.getElementById('valWordsCount').value;
    document.getElementById('valVowelsCount').value = document.getElementById('text').value.match(/[aeiou]/gi).length - 1;
    document.getElementById('valConsonantsCount').value = document.getElementById('text').value.match(/[BCDFGHJKLMNPQRSTVWXYZ]/gi).length - 1;
    //TODO: Implement this function
    console.log('onStatisticsClicked called');
}

/**
 * Event handler for 'Statistics' button.
 * Removes all the even words in the given text (starting from 1) and displays result in corresponding field.
 * @param {object} event - Event class
 */
function onRemoveWordsClicked(event) {
    document.getElementById('valOddWords').value = document.getElementById('text').value.split(" ").slice(1, -1);
    //TODO: Implement this function
    console.log('onRemoveWordsClicked called');
}


/**********************************************/

function init() {
    const text = document.getElementById('text');
    text.value = txt;
}

document.addEventListener('DOMContentLoaded', init);
