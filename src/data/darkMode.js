export default function isDarkMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}