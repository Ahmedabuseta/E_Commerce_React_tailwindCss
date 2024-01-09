/**
 * Wraps text if it exceeds the maximum length.
 * @param {string} text - The input text to be wrapped.
 * @param {number} [max=50] - The maximum length before wrapping. Default is 50.
 * @returns {string} - The wrapped text or the original text if it's within the maximum length.
 */
export function textWarp (text:string , max :number = 50):string{
    if(text.length >= 50 ) return `${text.slice(0,max)}...`
    return text
}