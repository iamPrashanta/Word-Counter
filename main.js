
function getInfo() {
    let str = document.getElementById("inputbox");
    let detecter = document.getElementById("lang_detecter");
    let lang_html = document.getElementById("lang_html");
    let lang_php = document.getElementById("lang_php");
    let lang_javascript = document.getElementById("lang_javascript");

    let word_w = document.getElementById("w_count");
    let word_wc = document.getElementById("wc_text");

    let character_c = document.getElementById("c_count");
    let character_cc = document.getElementById("cc_text");

    let paraghaph_p = document.getElementById("p_count");
    let paraghaph_pc = document.getElementById("pc_text");

    let sentence_sc = document.getElementById("sen_count");
    let sentence_sen = document.getElementById("sen_text");

    let reg_html = /(<html|<\/html|html>)/gim;
    let reg_javascript = /(<script>|((var)|(let)|(const)|(function\(?\)?)|\(\)))/gim;
    let reg_php = /((<\?php|\?>))/gim;

    //word count
    let wordCount = str.value.match(/[a-z]{0,}\w+/gim);
    word_w.innerHTML = (wordCount.length);
    if (wordCount.length > 1) {
        word_wc.innerHTML = " Words";
    } else {
        word_wc.innerHTML = " Word";
    }

    // //character count
    let characterCount = str.value.match(/[a-z0-9&~`'";:<>/\\\?|()*^%$#@!. ,]/gim);
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
    let sentence_count = str.value.match(/[a-z0-9]\s*?(\.)/gim);
    sentence_sc.innerText = (sentence_count.length);
    if (sentenceCount.length > 1) {
        sentence_sen.innerHTML = " Sentences";
    } else {
        sentence_sen.innerHTML = " Sentence";
    }

    //for language detections
    let isHtmlCodeExisting = reg_html.test(str.value);
    if (isHtmlCodeExisting) {
        detecter.style.display = "block";
        lang_html.style.display = "contents";
    } else {
        lang_html.style.display = "none";
    }
    let isPhpCodeExisting = reg_php.test(str.value);
    if (isPhpCodeExisting) {
        detecter.style.display = "block";
        lang_php.style.display = "contents";
    } else {
        lang_php.style.display = "none";
    }
    let isJavaScriptCodeExisting = reg_javascript.test(str.value);
    if (isJavaScriptCodeExisting) {
        detecter.style.display = "block";
        lang_javascript.style.display = "contents";
    } else {
        lang_javascript.style.display = "none";
    }
    if (!isHtmlCodeExisting && !isPhpCodeExisting && !isJavaScriptCodeExisting) {
        detecter.style.display = "none";
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


//clear text field
function cls() {
    let str_field = document.getElementById("inputbox");
    if (!str_field.value.length == 0) {
        var conf_sms = confirm('are you sure ?');
        if (conf_sms == true) {
            str_field.value = "";
        }
    } else {
        alert('Textfiels already Cleared');
    }
}




//\b[a-z].*? //select first letters of all words
//[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]* //select all words
//["']?[A-Z][^.?!]+((?![.?!]['"]?\\s["']?[A-Z][^.?!]).)+[.?!'"]+ //select all paragraph
//[A-Z][^\.][^\.]* //select every sentence
//(<html|<\/html|html>) //html
//