//用于获取状态
import store from "@/redux/store";
// import defaultTheme from "@/styles/theme/theme-default.less";
// import darkTheme from "@/styles/theme/theme-dark.less";
/**
 * @description 全局主题设置
 * */

const useTheme = () => {
	// 登录后刷新页面
	store.subscribe(() => {
		const { weakOrGray } = store.getState()
		// const { themeConfig }
		// switch (key) {
		// 	case value:

		// 		break;

		// 	default:
		// 		break;
		// }
		// if (darkTheme) {
		// 	import("@/styles/theme/theme-dark.less")
		// } else {
		// 	import("@/styles/theme/theme-default.less")
		// }

		// 灰色 色弱
		console.log(weakOrGray);
		switch (weakOrGray) {
			case "gray":
				document.body.style.filter = "grayscale(1)";
				localStorage.setItem("weakOrGray", weakOrGray)
				break;
			case "weak":
				document.body.style.filter = "invert(80%)";
				localStorage.setItem("weakOrGray", weakOrGray)
				break;
			case false:
				document.body.style.removeProperty("filter");
				localStorage.removeItem("weakOrGray")
				break;
			default:
				break;
		}
	})
	// 灰色 色弱
	switch (localStorage.getItem("weakOrGray")) {
		case "gray":
			document.body.style.filter = "grayscale(1)";
			break;
		case "weak":
			document.body.style.filter = "invert(80%)";
			break;
		default:
			document.body.style.removeProperty("filter");
			break;
	}
	return

	const initTheme = () => {
		console.log(weakOrGray);
		// 灰色和弱色切换
		const body = document.documentElement;
		if (!weakOrGray) body.setAttribute("style", "");
		if (weakOrGray === "weak") document.body.style.filter = "invert(80%)";
		if (weakOrGray === "gray") body.setAttribute("style", "filter: grayscale(1)");

		// 切换暗黑模式
		let head = document.getElementsByTagName("head")[0];
		const getStyle = head.getElementsByTagName("style");
		if (getStyle.length > 0) {
			for (let i = 0, l = getStyle.length; i < l; i++) {
				if (getStyle[i]?.getAttribute("data-type") === "dark") getStyle[i].remove();
			}
		}
		let styleDom = document.createElement("style");
		styleDom.dataset.type = "dark";
		styleDom.innerHTML = isDark ? darkTheme : defaultTheme;
		head.appendChild(styleDom);
	};
	initTheme();

	return {
		initTheme
	};
};

export default useTheme;
