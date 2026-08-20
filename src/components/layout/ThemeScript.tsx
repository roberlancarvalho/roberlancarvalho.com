// Ported from the old _document.js — runs before hydration to avoid a
// flash of the wrong theme. body.dark/body.light + localStorage, same as
// before; MenuBar's theme toggle reads/writes the same window.__* globals.
const THEME_SCRIPT = `
(function() {
  window.__onThemeChange = function() {};
  function setTheme(newTheme) {
    window.__theme = newTheme;
    document.body.className = newTheme;
    window.__onThemeChange(newTheme);
  }
  var preferredTheme;
  try {
    preferredTheme = localStorage.getItem('theme');
  } catch (err) {}
  window.__setPreferredTheme = function(newTheme) {
    setTheme(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (err) {}
  };
  setTheme(preferredTheme || 'dark');
})();
`

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
}
