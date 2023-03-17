import React from 'react';
import './RegisterForm.scss';
import { useForm } from 'react-hook-form';
function RegisterForm() {
  const PublicURL = process.env.PUBLIC_URL;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {};

  return (
    <div className="WrapperRegisterForm">
      <div className="RegisterMain">
        <div className="RegisterImg">
          <img src={PublicURL + '/ImgRegister.png'} alt="ImgRegister" />
        </div>
        <div className="RegisterForm">
          <h2 className="FormTitle">Stay in the Know!</h2>
          <p className="FormSubTitle">
            Don't get left behind!
            <br /> Subscribe to our newsletters today!
          </p>
          <form className="RegisterFormMain" onSubmit={handleSubmit(onSubmit)}>
            <div className="FormInput">
              <input
                {...register('name', { required: true })}
                aria-invalid={errors.name ? 'true' : 'false'}
                placeholder="Name"
              />
            </div>
            {errors.name?.type === 'required' && <p role="alert">First name is required</p>}
            <div className="FormInput">
              <input
                className="FormInput"
                {...register('mail', { required: 'Email Address is required' })}
                aria-invalid={errors.mail ? 'true' : 'false'}
                placeholder="Email"
              />
            </div>
            {errors.mail && <p role="alert">{errors.mail?.message}</p>}

            <select className="FormSelect" {...register('Country')}>
              <option value="">Country</option>
              <option value="A">Country B</option>
              <option value="B">Country C</option>
              <option value="other">Country other</option>
            </select>
            <select className="FormSelect" {...register('Platform')}>
              <option value="">Platform</option>
              <option value="A">Platform A</option>
              <option value="B">Platform C</option>
              <option value="other">Platform other</option>
            </select>
            <div className="CheckBoxItem">
              <input type="checkbox" placeholder="January" {...register('January', {})} className="mx-3" />
              <p>
                By signing up, I confirm that I am 13 years old or older. I agree to the Gameloft Terms and Conditions
                and I have read the Privacy Policy.
              </p>
            </div>
            <div className="CheckBoxItem">
              <input type="checkbox" placeholder="January" {...register('January', {})} className="mx-3" />
              <p>I agree to receive promotional offers relating to all Gameloft games and services.</p>
            </div>
            <div className="CheckBoxSubmit">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
