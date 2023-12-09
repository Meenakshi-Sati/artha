import "../Css/Artha.css";

function Signup() {

    let obj = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    const handleInput = (e, id) => {
        let value = e.target.value
        let response;
        if (id === "name") {
            response = getValidUsername(value)
        }
        else if (id === "email") {
            response = getValidEmail(value)
        }
        else if (id === "address") {
            response = getValidAddress(value)
        }
        else if (id === "password") {
            response = getValidPassword(value)
        }
        else if (id === "confirmPassword") {
            response = checkConfirmPassword(value)
        }
        obj[id] = response
        console.log(obj)

        Object.keys(obj).forEach(key => {
            console.log(obj[key])
        })
    }

    function getValidUsername(value) {
        if (value === "") {
            return "empty"
        }
        else {
            let pattern = /^[a-zA-Z]+$/
            if (pattern.test(value)) {
                return value
            }
            else {
                return "invalid"
            }
        }
    }

    function getValidEmail(value) {
        if (value === "") {
            return "empty"
        }
        else {
            let pattern = /^([a-zA-Z0-9]+)@gmail.com$/
            if (pattern.test(value)) {
                return value
            }
            else {
                return "invalid"
            }
        }
    }

    function getValidAddress(value) {
        if (value === "") {
            return "empty"
        }
        else {
            let pattern = /^([a-zA-Z0-9]+)$/
            if (pattern.test(value)) {
                return value
            }
            else {
                return "invalid"
            }
        }
    }

    let correctPassword
    function getValidPassword(value) {
        if (value === "") {
            return "empty"
        }
        else {
            let pattern = /^([a-zA-Z0-9]+)([^a-zA-Z0-9]+)$/
            if (pattern.test(value)) {
                correctPassword = value
                return value
            }
            else {
                return "invalid"
            }
        }
    }

    function checkConfirmPassword(value) {
        if (value === "") {
            return "empty"
        }
        else {
            if (value === correctPassword) {
                return value
            }
            else {
                return "doesn't match with password"
            }
        }
    }

    return (
        <div id="Signup-main-div">
            <div id="top-content">
                <h1>Artha AI</h1>
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quaerat numquam labore libero animi laboriosam quas velit exercitationem esse commodi, assumenda quidem provident.</h4>

                <div id="signup-content">
                    <form action="">
                        <label htmlFor="name">Name</label>
                        <input onChange={(e) => handleInput(e, "name")} id="name" type="text" placeholder="Enter Your Company Name" />
                        <div className="error-div"></div>
                        <label htmlFor="address">Address</label>
                        <input onChange={(e) => handleInput(e, "address")} id="address" type="text" placeholder="Enter Your Company Address" />
                        <div className="error-div"></div>
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => handleInput(e, "email")} id="email" type="text" placeholder="Enter Your Company Email Address" />
                        <div className="error-div"></div>
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => handleInput(e, "password")} id="password" type="text" placeholder="Enter Your Password" />
                        <div className="error-div"></div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input onChange={(e) => handleInput(e, "confirmPassword")} id="confirmPassword" type="text" placeholder="Confirm Your Password" />
                        <div className="error-div"></div>

                        <h2>Keep me updated about new features and improvements(by doing so you accept the terms and privacy policy)</h2>
                        <input type="checkbox" />
                        <button>Let's Start</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signup