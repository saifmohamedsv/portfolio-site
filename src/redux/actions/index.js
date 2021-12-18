import { CHANGE_THEME } from "./type"

export const changeTheme = (value) => {
    return {
        type: CHANGE_THEME,
        payload: value
    }
}