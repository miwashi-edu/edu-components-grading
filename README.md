# edu-components-grading

## State lifting

### Scaffold Login component

```bash
cd ~
cd ws
cd components-grading
mkdir ./src/components/Login
cd ./src/components/Login
touch index.js
touch Login.module.css
touch Login.styles.js
touch LoginMolecule.jsx
touch UserAtom.jsx
touch PasswordAtom.jsx
touch LoginButtonAtom.jsx
touch LoginMolecule.stories.jsx
touch UserAtom.stories.jsx
touch PasswordAtom.stories.jsx
touch LoginButtonAtom.stories.jsx
cd ..
cd ..
cd ..
```

### Barrel file <heredoc

```bash
cat > ./src/components/Login/index.js << 'EOF'
import LoginMolecule from './LoginMolecule";

export {LoginMolecule as Login}
EOF
```

### LoginMolecule file <heredoc

```bash
cat > ./src/components/Login/LoginMolecule.jsx << 'EOF'
import React, { useState } from 'react';
import styles from './Login.module.css';
import UserAtom from './UserAtom';
import PasswordAtom from './PasswordAtom';
import LoginButtonAtom from './LoginButtonAtom';

const LoginMolecule = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle login click with basic validation
  const handleLogin = () => {
    if (username === '' || password === '') {
      setError('Username and password cannot be empty.');
    } else {
      setError('');
      console.log(`Logging in with Username: ${username} and Password: ${password}`);
    }
  };

  return (
    <div className={styles.container}>
      <UserAtom username={username} onUsernameChange={setUsername} />
      <PasswordAtom password={password} onPasswordChange={setPassword} />
      <LoginButtonAtom onClick={handleLogin} />
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};

export default LoginMolecule;
EOF
```


### UserAtom file <heredoc

```bash
cat > ./src/components/Login/UserAtom.jsx << 'EOF'
import React from 'react';
import styles from './Login.module.css';

const UserAtom = ({ username, onUsernameChange }) => {
    const handleChange = (e) => {
        const newValue = e.target.value;
        onUsernameChange(newValue);
    };

    return (
        <div>
            <label className={styles.label} htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                value={username}
                onChange={handleChange}
                className={styles.inputField}
                placeholder="Enter your username"
            />
        </div>
    );
};

export default UserAtom;
EOF
```


### PasswordAtom file <heredoc

```bash
cat > ./src/components/Login/PasswordAtom.jsx << 'EOF'
import React from 'react';
import styles from './Login.module.css';

const PasswordAtom = ({ password, onPasswordChange }) => {
    const handleChange = (e) => {
        const newValue = e.target.value;
        onPasswordChange(newValue);
    };

    return (
        <div>
            <label className={styles.label} htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={handleChange}
                className={styles.inputField}
                placeholder="Enter your password"
            />
        </div>
    );
};

export default PasswordAtom;
EOF
```

### LoginButtonAtoom file <heredoc

```bash
cat > ./src/components/Login/LoginButtonAtom.jsx << 'EOF'
import React from 'react';
import styles from './Login.module.css';

const LoginButtonAtom = ({ onClick }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    Login
  </button>
);

export default LoginButtonAtom;
EOF
```

### Login.module.css

```css
cat > ./src/components/Login/Login.module.css << 'EOF'
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px solid gray;
  padding: 20px;
  width: 320px;
  border-radius: 8px;
  background-color: #f2f2f2;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
}

.inputField {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.button {
  padding: 12px 18px;
  margin-top: 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}

.label {
  font-weight: bold;
  margin-bottom: 5px;
}

.errorText {
  color: red;
  border: 1px dashed red;
  padding: 5px;
  margin-top: 10px;
  border-radius: 4px;
  font-weight: bold;
}
EOF
```

### LoginMolecule story <heredoc

```bash
cat > ./src/components/Login/LoginMolecule.stories.jsx << 'EOF'
import React from 'react';
import LoginMolecule from './LoginMolecule';

export default {
  title: 'Components/LoginMolecule',
  component: LoginMolecule,
};

export const Default = {
};
EOF
```

### UserAtom story <heredoc

```bash
cat > ./src/components/Login/UserAtom.stories.jsx << 'EOF'
import React, { useState } from 'react';
import UserAtom from './UserAtom';

const Template = (args) => {
  const [username, setUsername] = useState(args.username || '');

  return (
      <UserAtom
          {...args}
          username={username}
          onUsernameChange={setUsername}
      />
  );
};

export default {
  title: 'Components/UserAtom',
  component: UserAtom,
  render: Template,
};

export const Default = {
  args: {
    username: '',
  },
};
EOF
```

### PasswordAtom story <heredoc

```bash
cat > ./src/components/Login/PasswordAtom.stories.jsx << 'EOF'
import React, {useState} from 'react';
import PasswordAtom from './PasswordAtom';

const Template = (args) => {
  const [password, setPassword] = useState(args.password || '');

  return (
      <PasswordAtom
          {...args}
          password={password}
          onPasswordChange={setPassword}
      />
  );
};

export default {
    title: 'Components/PasswordAtom',
    component: PasswordAtom,
    render: Template,
};

export const Default = {
  args: {
    password: '',
  },
};
EOF
```

### LoginButton story <heredoc

```bash
cat > ./src/components/Login/LoginButton.stories.jsx << 'EOF'
import React from 'react';
import LoginButtonAtom from './LoginButtonAtom';

export default {
  title: 'Components/LoginButtonAtom',
  component: LoginButtonAtom,
  parameters: {
    docs: {
      description: {
        component: 'A styled button component that triggers a login action, using CSS Modules for styling.',
      },
    },
  },
};

export const Default = {
  args: {
    onClick: () => alert('Login button clicked'),
  },
};
EOF
```
