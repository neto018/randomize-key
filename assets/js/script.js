function randomizeCharacter() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

function randomizeStringWithHyphens(str) {
    const segments = str.split('-');

    function randomizeSegment(segment) {
        const randomizedChars = segment.split('').map(() => randomizeCharacter());
        return randomizedChars.join('');
    }

    const randomizedSegments = segments.map(randomizeSegment);

    return randomizedSegments.join('-');
}

function randomizeKey() {
    const inputKey = document.getElementById('inputKey').value;
    const randomizedKey = randomizeStringWithHyphens(inputKey);
    document.getElementById('resultKey').value = randomizedKey;
}

function copyToClipboard() {
    const resultKey = document.getElementById('resultKey');
    resultKey.select();
    resultKey.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand('copy');
    alert('Copied the text: ' + resultKey.value);
}
