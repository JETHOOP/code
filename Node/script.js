    $(document).ready(
        function () {
            let validUsername = false;
            let validEmail = false;
            let validPassword = false;  

            $("#registerUsername").on("input", function () {
                let userName = $(this).val().trim();
                let regex = /^[A-Za-z0-9]+$/

                if (userName === "") {
                    $("#registerUsernameErr").text("Username can not be blank").css({ "color": "red" })
                    validUsername = false
                }
                else if (userName.length < 3 || userName.length > 20) {
                    $("#registerUsernameErr").text("username must be 3-20 characters").css({ "color": "red" })
                    validUsername = false
                }
                else if (!regex.test(userName)) {
                    $("#registerUsernameErr").text("Only letters and numbers are allowed").css({ "color": "red" })
                    validUsername = false
                }
                else {
                    $("#registerUsernameErr").text("")
                    validUsername = true
                }
                toggleSubmit()
            })

            $("#registerEmail").on("input", function () {
                let email = $(this).val().trim();
                let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

                if (email === "") {
                    $("#registerEmailErr").text("Email can not be empty").css({ "color": "red" })
                    validEmail = false;
                }
                else if (!regex.test(email)) {
                    $("#registerEmailErr").text("Invald Email Format").css({ "color": "red" })
                    validEmail = false;
                }
                else {
                    $("#registerEmailErr").text("")
                    validEmail = true;
                }
                toggleSubmit()
            })

            $("#registerPassword").on("input", function () {
                let password = $(this).val().trim()
                let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;

                if (password === "") {
                    $("#registerPasswordErr").text("Password can not be blank").css({ "color": "red" })
                    validPassword = false;
                }
                else if (!regex.test(password)) {
                    $("#registerPasswordErr").text("Enter a valid password").css({ "color": "red" })
                    validPassword = false;
                }
                else {
                    $("#registerPasswordErr").text("")
                    validPassword = true;
                }
                toggleSubmit()
            })

            function toggleSubmit() {
                $("#submitBtn").prop("disabled", !(validUsername && validEmail && validPassword))
            }
            $("#registerForm").on("submit", function (e) {
                e.preventDefault();
            })
        }
    )