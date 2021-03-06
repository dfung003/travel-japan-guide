import { Component } from "react";
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const formData = { ...this.state };
            delete formData.confirm;
            delete formData.error;
            // The promise returned by the signUp service method
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await signUp(formData);
            // Baby step
            this.props.setUser(user);
        } catch {
            // An error happened on the server
            this.setState({ error: 'Sign Up Failed - Try Again' });
        }
    };

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <input className="input-field" type="text" name="name" value={this.state.name} onChange={this.handleChange} required /> <br />
                        <label>Email</label>
                        <input className="input-field" type="email" name="email" value={this.state.email} onChange={this.handleChange} required /> <br />
                        <label>Password</label>
                        <input className="input-field" type="password" name="password" value={this.state.password} onChange={this.handleChange} required /> <br />
                        <label>Confirm</label>
                        <input className="input-field" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required /> <br />
                        <button type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}