import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeClosed, Library } from 'lucide-react';

const LoginPage = () => {
  const [isSad, setIsSad] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!document.querySelector("#password:focus") && !document.querySelector("#password:user-invalid")) {
        const eyes = document.getElementsByClassName('eye');
        for (let eye of eyes) {
          const x = eye.getBoundingClientRect().left + 10;
          const y = eye.getBoundingClientRect().top + 10;
          const rad = Math.atan2(event.pageX - x, event.pageY - y);
          const rot = (rad * (180 / Math.PI) * -1) + 180;
          eye.style.transform = `rotate(${rot}deg)`;
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleFocusPassword = () => {
    document.getElementById('face').style.transform = 'translateX(30px)';
    const eyes = document.getElementsByClassName('eye');
    for (let eye of eyes) {
      eye.style.transform = `rotate(100deg)`;
    }
  };

  const handleFocusOutPassword = (event) => {
    document.getElementById('face').style.transform = 'translateX(0)';
    setIsSad(!event.target.checkValidity());
    const eyes = document.getElementsByClassName('eye');
    for (let eye of eyes) {
      eye.style.transform = `rotate(215deg)`;
    }
  };


  function LoginForm() {
    return (
      <section className="form">
        <div className="logo">
          <Library />
        </div>
        <h1 className="form__title">Log in to your Account</h1>
        <p className="form__description">Welcome back! Please, enter your information</p>

        <form>
          <label className="form-control__label">Email</label>
          <input type="email" className="form-control" />

          <label className="form-control__label">Password</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              minLength="4"
              id="password"
              onFocus={handleFocusPassword}
              onBlur={handleFocusOutPassword}
            />
            {showPassword ? <EyeClosed onClick={togglePasswordVisibility} /> : <Eye onClick={togglePasswordVisibility} />}
          </div>
          <div className="password__settings">
            <label className="password__settings__remember">
              <input type="checkbox" />
              <span className="custom__checkbox">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              Remember me
            </label>

            <Link to="#" >Forgot Password?</Link>
          </div>

          <button
            type="submit"
            className="form__submit"
            id="submit"
            onMouseOver={() => setIsSad(!isSad)}
            onMouseOut={() => setIsSad(!isSad)}
          >
            Log In
          </button>
        </form>

        <p className="form__footer">
          Don't have an account?<br />
          <Link to="#" onClick={() => setIsLoginForm(false)}>Create an account</Link>
        </p>
      </section>
    )
  };

  function SignupForm() {
    return (
      <section className="form">
        <div className="logo">
          <Library />
        </div>
        <h1 className="form__title">Create an Account</h1>
        <p className="form__description">Welcome! Please, enter your information to sign up</p>

        <form>
          <label className="form-control__label">Name</label>
          <input type="text" className="form-control" />

          <label className="form-control__label">Email</label>
          <input type="email" className="form-control" />

          <label className="form-control__label">Password</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              minLength="4"
              id="password-signup"
              onFocus={handleFocusPassword}
              onBlur={handleFocusOutPassword}
            />
            {showPassword ? <EyeClosed onClick={togglePasswordVisibility} /> : <Eye onClick={togglePasswordVisibility} />}
          </div>

          <button
            type="submit"
            className="form__submit"
            id="submit-signup"
            onMouseOver={() => setIsSad(!isSad)}
            onMouseOut={() => setIsSad(!isSad)}
          >
            Sign Up
          </button>
        </form>

        <p className="form__footer">
          Already have an account?<br />
          <Link to="#" onClick={() => setIsLoginForm(true)}>Log in to your Account</Link>
        </p>
      </section>
    )
  }

  return (
    <main>
      {isLoginForm ? <LoginForm /> : <SignupForm />}

      <section className={`form__animation ${isSad ? 'sad' : ''}`}>
        <div id="ball">
          <div className="ball">
            <div id="face">
              <div className="ball__eyes">
                <div className="eye_wrap"><span className="eye"></span></div>
                <div className="eye_wrap"><span className="eye"></span></div>
              </div>
              <div className="ball__mouth"></div>
            </div>
          </div>
        </div>
        <div className="ball__shadow"></div>
      </section>
    </main>
  );
};

export default LoginPage;
