<template>
    <div>
        <div>
            <h1>Login</h1>
            <p>Welcome back! Please login to your account.</p>
        </div>
        <div>
            <form>
                <label>Username</label>
                <!-- <input
                    type="text"
                    name="username"
                    value={props.input.username}
                    onChange={props.handleChange}
                /> -->
                <label>Password</label>
                <div>
                    <!-- <input
                        type={props.hidden ? "password" : "text"}
                        name="password"
                        value={props.input.password}
                        onChange={props.handleChange}
                    />
                    <img
                        className="eye"
                        onClick={props.handleClick}
                        src={props.source}
                        alt="eye"
                    /> -->
                </div>
                <button>Log in</button>
            </form>
            <p>
                Don't have an account?
                <!-- <Link to="/register">Signup</Link> -->
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'LoginForm',
    props: {

    },
    components: {

    },
    emits: ['btn-click'],
    methods: {

    },
}
</script>