
function getInfo() {
    let str = document.getElementById("inputbox");

    let word_w = document.getElementById("w_count");
    let word_wc = document.getElementById("wc_text");

    let space_s = document.getElementById("s_count");
    let space_sc = document.getElementById("sc_text");

    let character_c = document.getElementById("c_count");
    let character_cc = document.getElementById("cc_text");

    let paraghaph_p = document.getElementById("p_count");
    let paraghaph_pc = document.getElementById("pc_text");

    let sentence_s = document.getElementById("sen_count");
    let sentence_sen = document.getElementById("sen_text");
    //word count
    let wordCount = str.value.match(/[a-z]{0,}\w+/gim);
    word_w.innerHTML = (wordCount.length);
    if (wordCount.length > 1) {
        word_wc.innerHTML = " Words";
    } else {
        word_wc.innerHTML = " Word";
    }
    //space count
    let spaceCount = str.value.match(/(\s)/gim);
    space_s.innerHTML = (spaceCount.length);
    if (spaceCount.length > 1) {
        space_sc.innerHTML = " Spaces";
    } else {
        space_sc.innerHTML = " Space";
    }

    // //character count
    let characterCount = str.value.match(/([A-Z]{0})\w/gim);
    character_c.innerHTML = (characterCount.length);
    if (characterCount.length > 1) {
        character_cc.innerHTML = " Characters";
    } else {
        character_cc.innerHTML = " Character";
    }

    //paraghaph count
    let paragraphCount = str.value.match(/^\s{0,}[a-z]/gim);
    paraghaph_p.innerHTML = (paragraphCount.length);
    if (paragraphCount.length > 1) {
        paraghaph_pc.innerHTML = " Paragraphs";
    } else {
        paraghaph_pc.innerHTML = " Paragraph";
    }

    //sentence count
    let sentenceCount = str.value.match(/[a-z0-9]\s*?(\.)/gim);
    sentence_s.innerHTML = (sentenceCount.length);
    if (sentenceCount.length > 1) {
        sentence_sen.innerHTML = " Sentences";
    } else {
        sentence_sen.innerHTML = " Sentence";
    }
}



function uppercase() {
    let strr = document.getElementById("inputbox");
    strr.value = strr.value.toUpperCase();
}
function lowercase() {
    let strr = document.getElementById("inputbox");
    strr.value = strr.value.toLowerCase();
}
function titlecase() {
    let strr = document.getElementById("inputbox");
    //method one
    // var select_words = strr.value.match(/[a-zA-Z]{0,}\w+/gim);
    // var titlecase_obj = [];
    // select_words.forEach(function (words) {
    //     titlecase_obj.push(words.charAt(0).toUpperCase() + words.substr(1).toLowerCase());
    // })
    // var objtostr = String(titlecase_obj);
    // var proper_title_case = objtostr.replace(/\,/gim, " ");
    // strr.value = (proper_title_case);

    //method two
    strr.value = strr.value.replace(/\b\w+/gim, function (s) { return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase(); });
}
function sentencecase() {
    let strr = document.getElementById("inputbox");

    strr.value = strr.value.replace(/[A-Z][^\.][^\.]*/gim, function (p) {
        return p.charAt(0).toUpperCase() + p.substr(1).toLowerCase();
    });
}


//\b[a-z].*? //select first letters of all words
//[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]* //select all words
//["']?[A-Z][^.?!]+((?![.?!]['"]?\\s["']?[A-Z][^.?!]).)+[.?!'"]+ //select all paragraph
//[A-Z][^\.][^\.]* //select every sentence