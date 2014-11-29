/**
 * @name		Shuffle Letters
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
 * @license		MIT License
 */

$(function mainCat () {
   $("#maincat").shuffleText();
});

$(function copyright () {
    $("#copy").shuffleText();
});

$(function mainCats1 () {
    $("#main01, #main02, #main03, #main04").shuffleText();
});

$(function mainCats2 () {
    $("#main05, #main06, #main07").shuffleText();
});

$(function about () {
    $("#abouttext, #developer").shuffleText();
});

$(function history () {
    $("#history01, #history02, #history03").shuffleText();
});

$(function phone () {
    $("#p1, #p2, #p3").shuffleText();
});

$(function tablet () {
    $("#tab01, #tab02, #tab03, #tab04, #tab05, #tab06, #tab07, #tab08, #tab09, #tab10, #tab11, #tab12, #tab13, #tab14, #tab15, #tab16, #tab17, #tab18, #tab19").shuffleText();
});

$(function watch() {
    $("#w1, #w2, #w3, #w4, #w5").shuffleText();
});

$(function galaxya() {
    $("#galaxya01, #galaxya02, #galaxya03, #galaxya04, #galaxya05, #galaxya06, #galaxya07, #galaxya08, #galaxya09, #galaxya10, #galaxya11, #galaxya12, #galaxya13, #galaxya14, #galaxya15, #galaxya16, #galaxya17, #galaxya18, #galaxya19, #galaxya20, #galaxya21, #galaxya22, #galaxya23, #galaxya24").shuffleText();
})

$(function galaxys() {
    $("#galaxys01, #galaxys02, #galaxys03, #galaxys04, #galaxys05, #galaxys06, #galaxys07, #galaxys08, #galaxys09, #galaxys10, #galaxys11, #galaxys12, #galaxys13, #galaxys14, #galaxys15, #galaxys16, #galaxys17, #galaxys18, #galaxys19, #galaxys20, #galaxys21, #galaxys22, #galaxys23, #galaxys24").shuffleText();
})

$(function galaxyu() {
    $("#galaxyu01, #galaxyu02, #galaxyu03, #galaxyu04, #galaxyu05, #galaxyu06, #galaxyu07, #galaxyu08, #galaxyu09, #galaxyu10, #galaxyu11, #galaxyu12, #galaxyu13, #galaxyu14, #galaxyu15, #galaxyu16, #galaxyu17, #galaxyu18, #galaxyu19, #galaxyu20, #galaxyu21, #galaxyu22, #galaxyu23, #galaxyu24").shuffleText();
})

$(function galaxys5() {
    $("#galaxys501, #galaxys502, #galaxys503, #galaxys504, #galaxys505, #galaxys506, #galaxys507, #galaxys508, #galaxys509, #galaxys510, #galaxys511, #galaxys512, #galaxys513, #galaxys514, #galaxys515, #galaxys516, #galaxys517, #galaxys518, #galaxys519, #galaxys520, #galaxys521, #galaxys522, #galaxys523, #galaxys524, #galaxys525").shuffleText();
})

$(function galaxytabs105() {
    $("#galaxytabs10501, #galaxytabs10502, #galaxytabs10503, #galaxytabs10504, #galaxytabs10505, #galaxytabs10506, #galaxytabs10507, #galaxytabs10508, #galaxytabs10509, #galaxytabs10510, #galaxytabs10511, #galaxytabs10512, #galaxytabs10513, #galaxytabs10514, #galaxytabs10515, #galaxytabs10516, #galaxytabs10517, #galaxytabs10518, #galaxytabs10519, #galaxytabs10520, #galaxytabs10521, #galaxytabs10522, #galaxytabs10523, #galaxytabs10524, #galaxytabs10525, #galaxytabs10526, #galaxytabs10527").shuffleText();
})

$(function gears() {
    $("#gears01, #gears02, #gears03, #gears04, #gears05, #gears06, #gears07, #gears08, #gears09, #gears10, #gears11, #gears12, #gears13, #gears14, #gears15, #gears16, #gears17, #gears18, #gears19, #gears20, #gears21, #gears22, #gears23, #gears24, #gears25, #gears26, #gears27, #gears28").shuffleText();
})

$(function () {
    $("#giotitle, #gio01, #gio02").shuffleText();
})

$(function () {
    $("#krp01, #krp02, #krp03, #krp04, #krp05, #krp06, #krp07, #krp08, #krp09, #krp10, #krp11, #krp12, #krp13, #krp14, #krp15, #krp16, #krp17, #krp18, #krp19, #krp20, #krp21, #krp22").shuffleText();
});

(function ($) {

    $.fn.shuffleText = function (prop) {

        var options = $.extend({
            "step": 8,			// How many times should the letters be changed
            "fps": 25,			// Frames Per Second
            "text": "", 			// Use this text instead of the contents
            "callback": function () { }	// Run once the animation is complete
        }, prop)

        return this.each(function () {

            var el = $(this),
				str = "";


            // Preventing parallel animations using a flag;

            if (el.data('animated')) {
                return true;
            }

            el.data('animated', true);


            if (options.text) {
                str = options.text.split('');
            }
            else {
                str = el.text().split('');
            }

            // The types array holds the type for each character;
            // Letters holds the positions of non-space characters;

            var types = [],
				letters = [];

            // Looping through all the chars of the string

            for (var i = 0; i < str.length; i++) {

                var ch = str[i];

                if (ch == " ") {
                    types[i] = "space";
                    continue;
                }
                else if (/[a-z]/.test(ch)) {
                    types[i] = "lowerLetter";
                }
                else if (/[A-Z]/.test(ch)) {
                    types[i] = "upperLetter";
                }
                else {
                    types[i] = "symbol";
                }

                letters.push(i);
            }

            el.html("");

            // Self executing named function expression:

            (function shuffle(start) {

                // This code is run options.fps times per second
                // and updates the contents of the page element

                var i,
					len = letters.length,
					strCopy = str.slice(0);	// Fresh copy of the string

                if (start > len) {

                    // The animation is complete. Updating the
                    // flag and triggering the callback;

                    el.data('animated', false);
                    options.callback(el);
                    return;
                }

                // All the work gets done here
                for (i = Math.max(start, 0) ; i < len; i++) {

                    // The start argument and options.step limit
                    // the characters we will be working on at once

                    if (i < start + options.step) {
                        // Generate a random character at thsi position
                        strCopy[letters[i]] = randomChar(types[letters[i]]);
                    }
                    else {
                        strCopy[letters[i]] = "";
                    }
                }

                el.text(strCopy.join(""));

                setTimeout(function () {

                    shuffle(start +1);

                }, 1000 / options.fps);

            })(-options.step);


        });
    };

    function randomChar(type) {
        var pool = "";

        if (type == "lowerLetter") {
            pool = "abcdefghijklmnopqrstuvwxyz0123456789";
        }
        else if (type == "upperLetter") {
            pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        }
        else if (type == "symbol") {
            pool = ",.?/\\(^)![]{}*&^%$#'\"";
        }

        var arr = pool.split('');
        return arr[Math.floor(Math.random() * arr.length)];
    }

})(jQuery);