enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

export default function useTheme() {
  function changeTheme(theme: Theme) {
    useHead({
      htmlAttrs: {
        "data-theme": theme,
      },
    });
  }

  return { Theme, changeTheme };
}
