/* the '+' operator is overloaded */
"" + 1 + 0 // * + "1" + 0 -> "1" + 0 -> "1" + "0" -> "10"
"" - 1 + 0 // 0 - 1 + 0 -> 1
true + false // 1 + 0 -> 1
6 / "3" // 6 / 3 -> 2
"2" * "3" // 2 * 3 -> 6
4 + 5 + 'px' // 9 + 'px' -> '9px'
'$' + 4 + 5  // '$4' + 5 -> '$45'
"4" - 2 // 4 - 2 -> 2
"4px" - 2 // NaN - 2 -> Nan
7 / 0 // Infinity
" -9" + 5 // " -9 " + "5"  -> " -9 5"
" -9"  -5 // " -9 " -"5"  -> " -14"
null + 1 // 0 + 1 -> 1
undefined + 1 // NaN + 1 -> NaN
" \t \n" - 2 // 0 - 2 