/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i)
        if (map.has(ch)) {
            map.set(ch, map.get(ch) + 1)
            if (map.get(ch) == 2) return ch;
        }
        else {
            map.set(ch, 1)
        }
    }
};