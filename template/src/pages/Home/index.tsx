import React, { useState } from "react";
import { ILoginParam, login } from "@/apis/auth";

/**
 * login function
 * @param username
 * @param password
 */
async function handleLogin(username: string, password: string) {
  try {
    const params: ILoginParam = {
      username,
      password,
    };
    const res = await login(params);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

/**
 * 登录
 */
const Index: React.FC<{}> = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div>
      <div>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          min={1}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          min={6}
          max={60}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={() => handleLogin(username, password)}>Login</button>
    </div>
  );
};

export default Index;
