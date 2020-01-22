export const ACTION_TYPE ={
    LOGIN_START : "LOGIN_START",
    LOGIN_SUCCESS : "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",

    REGISTER_START:"REGISTER_START",
    REGISTER_SUCCESS:"REGISTER_SUCCESS",
    REGISTER_FAIL:"REGISTER_FAIL"
}

export const validate = {
    name: (value) => /[a-z]+$/i.test(value) && value !== "",
    password: (value) => /^[0-9a-z]+$/i.test(value) && value !== "",
    email: (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) && value !== ""
}