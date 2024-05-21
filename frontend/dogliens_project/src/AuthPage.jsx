import axios from "axios";
import dog from "./assets/dogliens.mp4";

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];

        axios
            .post("http://localhost:3001/authenticate", { username: value })
            .then((r) => props.onAuth({ ...r.data, secret: value }))
            .catch((e) => console.log("Auth Error", e));
    };

    return (
        <div className="background">
            <video autoPlay muted loop className="background-video">
                <source src= {dog} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Dogliens</div>
                <div className="form-subtitle">Set a username to get started</div>
                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit">
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthPage;
