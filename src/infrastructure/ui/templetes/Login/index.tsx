import Image from 'next/image';
import { GithubLogo } from 'phosphor-react';
import { FunctionComponent, useState } from 'react';
import { IUserUseCase } from '~/domain/usecases';
import { AuthComponent } from '~/infrastructure/ui/components/Auth';
import { Button } from '~/infrastructure/ui/components/Button';
import { Input } from '~/infrastructure/ui/components/Input';
import { LoginButton, LoginContainer, LoginForm, LoginFormSocial } from './styles';

export const Login: FunctionComponent<{ userUseCase: IUserUseCase }> = ({ userUseCase }) => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [loading, SetLoading] = useState(false);

  const handlerSubmit = async () => {
    if (email === '' || password === '') {
      return window.alert('email and password is required');
    }
    SetLoading(true);

    const response = await userUseCase.login({ email, password });

    SetLoading(false);
    if (response.isLeft()) {
      const message: any = response.value;
      return window.alert(message.message);
    }

    console.log(response.value);
  };

  return (
    <AuthComponent>
      <LoginContainer>
        <Image width={50} height={50} src={'/assets/icons/logo-mobile.svg'} />
        <h2>Welcome Back</h2>
        <p>welcome back! please enter your details</p>
        <LoginForm>
          <Input
            type={'email'}
            label="Email"
            name="email"
            placeholder="Enter your email"
            action={{
              value: email,
              SetValue: SetEmail
            }}
            required={true}
          />

          <Input
            type={'password'}
            required={true}
            label="Password"
            name="password"
            placeholder="Enter your email"
            action={{
              value: password,
              SetValue: SetPassword
            }}
          />

          <LoginFormSocial>
            {/* <span>Login with:</span> */}
            <Button action={handlerSubmit} loading={loading}>
              Login
            </Button>
            <Button action={handlerSubmit}>Github</Button>
          </LoginFormSocial>
        </LoginForm>
      </LoginContainer>
    </AuthComponent>
  );
};
