export const toggleTheme = (main: HTMLElement | null, toggle: 'Dark' | 'Main') => {
	if (main) {
		if (toggle === 'Dark') {
			main.classList.remove('themeMain');
			main.classList.add('themeDark');
		}

		else if (toggle === 'Main') {
			main.classList.remove('themeDark');
			main.classList.add('themeMain');
		}
	} else return;
};
