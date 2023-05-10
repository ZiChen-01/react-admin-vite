//用于获取状态
import store from "@/redux/store";
import { message } from "antd"
// import defaultTheme from "@/styles/theme/theme-default.less";
// import darkTheme from "@/styles/theme/theme-dark.less";
/**
 * @description 全局主题设置
 * */

const useTheme = () => {
	// 通知切换模式
	store.subscribe(() => {
		const { weakOrGray } = store.getState()
		// 灰色 色弱
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

	store.subscribe(() => {
		const { darkTheme } = store.getState()
		if (darkTheme) {
			localStorage.setItem("darkTheme", darkTheme)
			import("@/styles/theme/theme-dark.less")
			message.loading("正在切换深夜模式，请稍后")
			setTimeout(() => {
				window.location.reload()
			}, 2000);
		} else if (darkTheme == false) {
			import("@/styles/theme/theme-default.less")
			localStorage.removeItem("darkTheme")
			message.loading("正在切换白天模式，请稍后")
			setTimeout(() => {
				window.location.reload()
			}, 2000);
		}
	})
	if (localStorage.getItem("darkTheme")) {
		import("@/styles/theme/theme-dark.less")
	}

};

export default useTheme;
