
export function darkMode(theme:string){

    localStorage.theme = theme;
if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}