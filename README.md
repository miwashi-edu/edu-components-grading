# 💡 edu-components-grading

## 👣 Create a login component and lift state from user field, and password field.

### 📚 State

> In React, `state` refers to the data or information that a component manages and can change over time. It determines how a component behaves and what it renders. State is usually used for things like user input, form values, or whether an element is visible.
> Each React component can have its own state, and when the state changes, the component re-renders to reflect the new data. This makes your app interactive and dynamic.
> For example, a button’s clicked state can change when it's pressed, and that change can be used to update the UI, such as showing a message or changing the button’s appearance.
> In React, state is typically set using the useState hook for functional components.  
> This efficient "reactive" behavior is a **key reason** behind the library’s name—React—as it reacts to state changes and updates the UI in a declarative way.

### 📚 State lifting

> State Lifting in React refers to the process of moving state from a child component to a common parent component in order to share data or allow multiple child
> components to access and modify the same state. When two or more child components need to share state or communicate with each other,
> it's often better to lift the state to their **nearest common ancestor** (the parent component).
> The parent then passes the state down to its children via props, and the children can trigger updates by calling functions passed down as `props`.
>   
> This is particularly useful when managing form data, coordinating interactions between components, or synchronizing UI elements.

### 📚 Atomic Design

> [`Atomic Design`](https://atomicdesign.bradfrost.com) is a methodology for creating design systems and user interfaces by breaking down components into smaller, reusable building blocks. It was introduced by Brad Frost and is based on the concept of chemistry, where design elements are structured in five distinct levels:
> 1. `Atoms`: The smallest, indivisible elements, such as buttons, inputs, or labels.
> 2. `Molecules`: Groups of atoms that work together as a unit, like a form input with a label and button.
> 3. `Organisms`: Complex components formed by groups of molecules, such as a navigation bar or a product card.
> 4. `Templates`: Page-level components that arrange organisms into a layout, like a homepage template.
> 5. `Pages`: Specific instances of templates, populated with real content to represent actual screens in the application.
> This approach promotes reusability, consistency, and scalability in design, making it easier to manage and evolve a design system over time. By starting with small, simple components and building up to more complex structures, Atomic Design creates a more modular and maintainable design process.
>
> A `Component developer` works with `Atoms`, `Molecules`, and `Organisms`, in the `sub system` `components`. 

### 📚 Instructions

> In this trail, we will lift state from the **User field**, and **Password Field** to the Login component.
>
> To achieve the grade of `green belt` you need to complete this task in 15 minutes using only [`bash`](https://www.gnu.org/s/bash/manual/bash.html) and [`vim`](https://www.vim.org).
> No copy paste i allowed!  
> CSS is not part of the grading!  
> Grading must be performed before a `black belt`.  

#### 🦶 Scaffold Login component

```bash
cd ~
cd ws
cd components-grading
mkdir ./src/components/Login
touch ./src/components/Login/index.js
touch ./src/components/Login/Login.module.css
touch ./src/components/Login/Login.styles.js
touch ./src/components/Login/Login.molecule.jsx
touch ./src/components/Login/UserField.atom.jsx
touch ./src/components/Login/PasswordField.atom.jsx
touch ./src/components/Login/LoginButton.atom.jsx
touch ./src/components/Login/Login.stories.jsx
touch ./src/components/Login/UserField.stories.jsx
touch ./src/components/Login/PasswordField.stories.jsx
touch ./src/components/Login/LoginButton.stories.jsx
```

#### 🦶 Barrel files

```bash
cat > ./src/components/Login/index.js << 'EOF'
export {default as Login} from './Login.molecule.jsx';
EOF

cat >> ./src/components/index.js << 'EOF'
export {Login} from './Login';
EOF

cat >> ./src/index.js << 'EOF'
export {Login} from './components';
EOF
```

#### 🦶 Login Button

##### Component

```bash
cat > ./src/components/Login/LoginButton.atom.jsx << 'EOF'
import React from 'react';
import styles from './Login.module.css';

const LoginButton = ({ onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            alert('No login method provided');
        }
    };

    return (
        <button type="button" className={styles.button} onClick={handleClick}>
            Login
        </button>
    );
};

export default LoginButton;
EOF
```

##### Storybook

```bash
cat > ./src/components/Login/LoginButton.stories.jsx << 'EOF'
import React from 'react';
import LoginButton from './LoginButton.atom';

export default {
  title: 'Components/Login/LoginButton',
  component: LoginButton,
};

export const Default = {
  args: {
    onClick: () => alert('Login button clicked'),
  },
};

export const NoLoginMethodProvided = {
};
EOF
```

#### 🦶 User Field

##### Component

```bash
cat > ./src/components/Login/UserField.atom.jsx << 'EOF'
import React from 'react';
import styles from './Login.module.css';

const UserField = ({ username, onChange }) => {
    if (!onChange) {
        return (<div>No onChange method supplied.</div>);
    }
    const handleChange = (e) => {
        const newValue = e.target.value;
        onChange(newValue);
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

export default UserField;
EOF
```

##### Storybook

```bash
cat > ./src/components/Login/UserField.stories.jsx << 'EOF'
import React, { useState } from 'react';
import UserField from './UserField.atom';
export default {
  title: 'Components/Login/UserField',
  component: UserField,
};
export const Default = () => {
  const [user, setUser] = useState('');
  const handleChange = (newUser) => {
    console.log('setUser called with:', newUser);
    setUser(newUser);
  };
  return (
      <UserField
          user={user}
          onChange={handleChange}
      />
  );
};
export const NoOnChangeProvided = {};
EOF
```

#### 🦶 Password Field

##### Component

```bash
cat > ./src/components/Login/PasswordField.atom.jsx << 'EOF'
import React from 'react';
import styles from './Login.module.css';

const PasswordField = ({ password, onChange }) => {
    if (!onChange) {
        return (<div>No onChange method supplied.</div>);
    }
    const handleChange = (e) => {
        const newValue = e.target.value;
        onChange(newValue);
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
export default PasswordField;
EOF
```

##### Storybook


#### 🦶 Password Field Storybook

```bash
cat > ./src/components/Login/PasswordField.stories.jsx << 'EOF'
import React, { useState } from 'react';
import PasswordField from './PasswordField.atom';
export default {
    title: 'Components/Login/PasswordField',
    component: PasswordField,
};
export const Default = () => {
    const [password, setPassword] = useState('');
    const handleChange = (newPassword) => {
        console.log('setPassword called with:', newPassword);
        setPassword(newPassword);
    };
    return (
        <PasswordField
            password={password}
            onChange={handleChange}
        />
    );
};
export const NoOnChangeProvided = {};
EOF
```

#### 🦶 Login Dialogue

##### Component

```bash
cat > ./src/components/Login/Login.molecule.jsx << 'EOF'
import React, { useState } from 'react';
import styles from './Login.module.css';
import UserField from './UserField.atom';
import PasswordField from './PasswordField.atom';
import LoginButton from './LoginButton.atom';

const Login = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!onLogin) {
    return (<div>No onLogin method provided.</div>);
  }

  const handleLogin = () => {
    setError()
    if (username === '' || password === '') {
      setError('Username and password cannot be empty.');
    } else {
      setError('');
    }
    onLogin();
  };

  return (
    <div className={styles.container}>
      <UserField username={username} onChange={setUsername} />
      <PasswordField password={password} onChange={setPassword} />
      <LoginButton onClick={handleLogin} />
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};

export default Login;
EOF
```

##### Storybook

```bash
cat > ./src/components/Login/Login.stories.jsx << 'EOF'
import React from 'react';
import Login from './Login.molecule';

export default {
  title: 'Components/Login',
  component: Login,
};

export const Default = {
  args: {
    onLogin: () => console.log('Login button clicked'),
  },
};

export const NoLoginMethodProvided = {
};
EOF
```

#### 🦶 Login.module.css

---

## CSS (not part of tutorial)

⚠️ **Notice**: You can use `heredoc` for Login.module.css, it is not part of test!

```bash
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

---
---

## Bonus (not part of tutorial)

### Login.mdx

### info.mdx


---
---

## 📋 You can clone and run this Tutorial from here

> ⚠️ **Warning**: This part is only if you start from here.

```bash
cd ~
[ -d ws ] && cd ws || { echo -e '\033[1;31mcreate workspace first!\033[0m'; return 1; }
rm -rf components-grading
git clone --single-branch --branch 3-Green https://github.com/miwashi-edu/edu-components-grading.git components-grading
cd components-grading
rm -rf .git # Remove history
git init
git add .
git commit -m "Initial Commit"
npm install
```
