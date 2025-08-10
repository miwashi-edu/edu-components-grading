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

> [´Atomic Design`](https://atomicdesign.bradfrost.com) is a methodology for creating design systems and user interfaces by breaking down components into smaller, reusable building blocks. It was introduced by Brad Frost and is based on the concept of chemistry, where design elements are structured in five distinct levels:
> 1. `Atoms`: The smallest, indivisible elements, such as buttons, inputs, or labels.
> 2. `Molecules`: Groups of atoms that work together as a unit, like a form input with a label and button.
> 3. `Organisms`: Complex components formed by groups of molecules, such as a navigation bar or a product card.
> 4. `Templates: Page-level components that arrange organisms into a layout, like a homepage template.
> 5. `Pages`: Specific instances of templates, populated with real content to represent actual screens in the application.
> This approach promotes reusability, consistency, and scalability in design, making it easier to manage and evolve a design system over time. By starting with small, simple components and building up to more complex structures, Atomic Design creates a more modular and maintainable design process.
>
> A `Component developer` works with `Atoms`, `Molecules`, and `Organisms`, in the `sub system` `components`. 

### 📚 Instructions

> In this trail, we will lift state from the **User field**, and **Password Field** to the Login component.
>
> To achieve the grade of `gree belt` you need to complete this task in 15 minutes using only [`bash`](https://www.gnu.org/s/bash/manual/bash.html) and [`vim`](https://www.vim.org).
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
touch ./src/components/Login/UserAtom.jsx
touch ./src/components/Login/PasswordAtom.jsx
touch ./src/components/Login/LoginButtonAtom.jsx
touch ./src/components/Login/LoginMolecule.stories.jsx
touch ./src/components/Login/UserAtom.stories.jsx
touch ./src/components/Login/PasswordAtom.stories.jsx
touch ./src/components/Login/LoginButtonAtom.stories.jsx
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
