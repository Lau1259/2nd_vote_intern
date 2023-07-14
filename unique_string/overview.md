# Attempt #1

This attempt uses the current time and the Math.random() function to create a unique character and string.
One important thing to note is that the smaller the length of the output the higher the probability of getting a repeated string. In testing, having a length of 8 or higher tended to significantly decrease the occurence of duplicates.

# Attempt #2

This attempt uses a unit32array which will act as a source for the alfanumeric strings. This array is populated with the help of the `Math.random()` function and then that data converted to a string to add letters to the string. This is repeated until sufficient characters have been created to fulfill the length requirement. I was attempting to emuluate the behavior of the `getRandomValues()` function of the crypto API.

# Attempt #3

This attempt uses the crypto api that is only available in browsers. This handles the creation of the UUID which significantly diminishes the likeliness of duplicate values being formed.

## Sources

- [Generate random string/characters in JavaScript](https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript)
- [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
