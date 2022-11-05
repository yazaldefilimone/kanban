import Image from 'next/image';
import { GithubLogo } from 'phosphor-react';
import { FunctionComponent, useState } from 'react';
import { AuthComponent } from '~/infrastructure/ui/components/Auth';
import { Button } from '~/infrastructure/ui/components/Button';
import { Input } from '~/infrastructure/ui/components/Input';
import { LoginButton, LoginContainer, LoginForm, LoginFormSocial } from './styles';
export const Login: FunctionComponent = () => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

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
          />

          <Input
            type={'password'}
            label="Password"
            name="password"
            placeholder="Enter your email"
            action={{
              value: password,
              SetValue: SetPassword
            }}
          />
          <Button action={() => 0}>Login</Button>

          <LoginFormSocial>
            {/* <span>Login with:</span> */}
            <LoginButton>
              <GithubLogo size={20} />
            </LoginButton>
          </LoginFormSocial>
        </LoginForm>
      </LoginContainer>
    </AuthComponent>
  );
};
