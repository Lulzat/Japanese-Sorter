// Japanese Character Names
var myArray = ['アルフォンス (Alphonse)', 'リンディス (Lyndis)', 'アンナ (Anna)', 
'ルフレ (Robin)', 'カミラ (Camilla)', 'クロム (Chrom)','ノノ (Nowi)', 
'リズ (Lissa)', 'ルキナ (Lucina)', 'シャロン (Sharena)', 'ヘクトル (Hector)', 'アクア (Azura)'];

// Hiragana & Katakana Characters
var kana = ['あ', 'ア', 'い', 'イ', 'う', 'ウ', 'え', 'エ', 'お', 'オ', 'か', 'カ', 'が', 'ガ', 'き', 
'キ', 'ぎ', 'ギ', 'く', 'ク', 'ぐ', 'グ', 'け', 'ケ', 'げ', 'ゲ', 'こ', 'コ', 'ご', 'ゴ', 'さ', 'サ', 
'ざ', 'ザ', 'し', 'シ', 'じ', 'ジ', 'す', 'ス', 'ず', 'ズ', 'せ', 'セ', 'ぜ', 'ゼ', 'そ', 'ソ', 'ぞ', 
'ゾ', 'た', 'タ', 'だ', 'ダ', 'ち', 'チ', 'ぢ', 'つ', 'ツ', 'づ', 'て', 'テ', 'で', 'デ', 'と', 'ト', 
'ど', 'ド', 'な', 'ナ', 'に', 'ニ', 'ぬ', 'ヌ', 'ね', 'ネ', 'の', 'ノ', 'は', 'ハ', 'ば', 'バ', 'ぱ', 
'パ', 'ひ', 'ヒ', 'び', 'ビ', 'ぴ', 'ビ', 'ふ', 'フ', 'ぶ', 'ブ', 'ぷ', 'プ', 'へ', 'ヘ', 'べ', 'ベ', 
'ぺ', 'ペ', 'ほ', 'ホ', 'ぼ', 'ボ', 'ぽ', 'ポ', 'ま', 'マ', 'み', 'ミ', 'む', 'ム', 'め', 'メ', 'も', 
'モ', 'や', 'ヤ', 'ゆ', 'ユ', 'よ', 'ヨ', 'ら', 'ラ', 'り', 'リ', 'る', 'ル', 'れ', 'レ', 'ろ', 'ロ', 
'わ', 'ワ', 'を', 'ヲ', 'ん', 'ん'];

// Get dropdown from DOM        
var dropdown = document.getElementById("dropdown");

// Loop through Array
for (var i = 0; i < myArray.length; ++i) {
// Append the element to the end of Array list
     dropdown[dropdown.length] = new Option(myArray[i], myArray[i]);
}
// End list generation

// Function for ordering list
var aChar;
var bChar;

function orderFunc() {
    myArray.sort(function (a, b) {
        return CharCompare(a, b, 0);
    });
    document.getElementById("dropdown").option = myArray;
// Get dropdown element from DOM

    document.getElementById('dropdown').options.length = 1;

// reloop through the array
    for (var i = 0; i < myArray.length; ++i) {
// Append sorted element to the end of Array list
    dropdown[dropdown.length] = new Option(myArray[i], myArray[i]);
    }
}

// Function to develop "dictionary"
function CharCompare(a, b, index) {
    if (index == a.length || index == b.length)
        return 0;
        aChar = kana.indexOf(a.toUpperCase().charAt(index));
        bChar = kana.indexOf(b.toUpperCase().charAt(index));
    if (aChar != bChar)
        return aChar - bChar
    else
        return CharCompare(a, b, index + 1)
}