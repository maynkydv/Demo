Here’s the complete solution for the assignments:

---

### **JavaScript Assignment**

#### **Problem 1: Second Largest**
```javascript
function secondLargest(array) {
    let l1 = array[0];
    let l2 = array[1];

    if (l2 > l1) {
        l2 = l1;
        l1 = array[1];
    }

    array.forEach((item) => {
        if (item > l1) {
            l2 = l1;
            l1 = item;
        } else if (item < l1 && item > l2) {
            l2 = item;
        }
    });
    return l2;
}
```

#### **Problem 2: Calculate Frequency**
```javascript
function calculateFrequency(string) {
    let freq = {};
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char >= "a" && char <= "z") {
            if (freq[char] == null) {
                freq[char] = 0;
            }
            freq[char]++;
        }
    }
    return freq;
}
```

#### **Problem 3: Flatten Object**
```javascript
function flatten(unflatObject) {
    let result = {};
    for (const k in unflatObject) {
        if (typeof unflatObject[k] === "object") {
            const temp = flatten(unflatObject[k]);
            for (const j in temp) {
                result[k + "." + j] = temp[j];
            }
        } else {
            result[k] = unflatObject[k];
        }
    }
    return result;
}
```

#### **Problem 4: Unflatten Object**
```javascript
function unflatten(flatObject) {
    let result = {};
    for (const key in flatObject) {
        let substrings = key.split(".");
        let temp = result;
        for (let i = 0; i < substrings.length - 1; i++) {
            if (!(substrings[i] in temp)) {
                if (isFinite(substrings[i + 1])) {
                    temp[substrings[i]] = [];
                } else {
                    temp[substrings[i]] = {};
                }
            }
            temp = temp[substrings[i]];
        }
        temp[substrings[substrings.length - 1]] = flatObject[key];
    }
    return result;
}
```

---

### **Web Assignment**

#### **Overview**
APIs provide a secure and standardized way for applications to work together. Using the RestAPI architecture will make the code readable, maintainable, and organized.

#### **Base URL**
- For local server: `http://localhost:5000/`

#### **Authentication**
- **Method:** JWT (JSON Web Token)
- **Process:** User login generates a JWT token to access protected endpoints by including it in the `Authorization` header as `auth-token <token>`.

#### **Endpoints**

1. **User Sign-Up**
   - **URL:** `/auth/signup`
   - **HTTP Method:** POST
   - **Request Body:**
     ```json
     {
       "username": "user_name",
       "email": "user@email.com",
       "password": "securePassword"
     }
     ```
   - **Response Body:**
     ```json
     {
       "message": "User registered successfully.",
       "user_id": "1a2b3c4d"
     }
     ```

2. **User Login**
   - **URL:** `/auth/login`
   - **HTTP Method:** POST
   - **Request Body:**
     ```json
     {
       "email": "user@email.com",
       "password": "securePassword"
     }
     ```
   - **Response Body:**
     ```json
     {
       "token": "jwtToken12345"
     }
     ```

3. **Send Friend Request**
   - **URL:** `/friends/request`
   - **HTTP Method:** POST
   - **Request Body:**
     ```json
     {
       "friend_id": "2b3c4d5e"
     }
     ```
   - **Response Body:**
     ```json
     {
       "message": "Friend request sent."
     }
     ```

4. **Accept/Reject Friend Request**
   - **URL:** `/friends/respond`
   - **HTTP Method:** POST
   - **Request Body:**
     ```json
     {
       "friend_id": "5e6f7g8h",
       "action": "accept"  or "reject"
     }
     ```
   - **Response Body:**
     ```json
     {
       "message": "Friend request accepted."
     }
     ```

5. **Create Post**
   - **URL:** `/posts`
   - **HTTP Method:** POST
   - **Request Body:**
     ```json
     {
       "content": "This is my first post!"
     }
     ```
   - **Response Body:**
     ```json
     {
       "post_id": "7h8i9j0k",
       "message": "Post created successfully."
     }
     ```

6. **Like a Post**
   - **URL:** `/posts/{post_id}/like`
   - **HTTP Method:** POST
   - **Response Body:**
     ```json
     {
       "message": "Post liked."
     }
     ```

7. **List Posts**
   - **URL:** `/posts`
   - **HTTP Method:** GET
   - **Response Body:**
     ```json
     {
       "posts": [
           {
               "post_id": "7h8i9j0k",
               "content": "This is my first post!",
               "likes": 10
           }
       ]
     }
     ```

#### **Validation**
- Username: Required, alphanumeric, 3-30 characters.
- Email: Required, valid email format.
- Password: Required, minimum 8 characters.
- Content: Required, text only, max 256 characters.

#### **Security**
- **HTTPS:** All communications must be done over HTTPS.
- **JWT Expiry:** JWT tokens should have an expiration time.
- **Data Validation:** All input data must be validated.
- **Password Hashing:** Passwords must be hashed and salted before storing.

#### **Database Design**
- **MongoDB Database:**
  - **User Schema:**
    ```json
    {
        "username": "String, minLength:3, maxlength:30, unique: true, required: true",
        "email": "String",
        "password": "String, minLength: 4, required: true",
        "friends": ["{user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }}"],
        "friend_request": ["{user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }}"]
    }
    ```
  - **Post Schema:**
    ```json
    {
        "user_id": "{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }",
        "content": "String, minLength:3, maxlength: 30, required: true",
        "like": "Number"
    }
    ```

---

### **Git Assignment**

Follow the steps below and document your commands and observations.

1. **Create a private GitHub repo:**
   - Name: `i-am-a-git-noob`

2. **Initialize a local repository:**
   ```bash
   mkdir -v i-am-a-git-noob
   cd i-am-a-git-noob
   git init
   ```
   - **Observation:** A `.git` directory is created to store local repo data.

3. **Point remote of your local git repo to the GitHub repo:**
   ```bash
   git remote add origin https://github.com/maynkydv/i-am-a-git-noob.git
   ```

4. **Print current git configs:**
   ```bash
   git config --local --list --show-origin
   ```

5. **Update git config with your name and email:**
   ```bash
   git config --local user.name “maynkydv”
   ```

6. **Create a file named `test1.txt`:**
   ```bash
   touch test1.txt
   ```

7. **Add content to `test1.txt`:**
   ```bash
   echo "first line in file" > test1.txt
   ```

8. **Push the file to GitHub:**
   ```bash
   git add test1.txt 
   git commit -m "test1 pushed on github"
   git push -u origin main
   ```

9. **Append another line to `test1.txt`:**
   ```bash
   echo "second line in file" >> test1.txt
   ```

10. **Add file to staging area:**
    ```bash
    git add test1.txt 
    ```

11. **Check the status of the file:**
    ```bash
    git status
    ```

12. **Append another line to `test1.txt`:**
    ```bash
    echo "Third line in file" >> test1.txt
    ```

13. **Remove `test1.txt` from the staging area:**
    ```bash
    git rm --cached test1.txt
    ```

14. **Create a commit with the message "My First Commit":**
    ```bash
    git add test1.txt
    git commit -m "My First Commit"
    ```

15. **Push commit to the remote repo:**
    ```bash
    git push -u origin main
    ```

16. **Update message of last commit:**


    ```bash
    git commit --amend -m "My Updated First Commit"
    git push -f origin main
    ```

17. **Difference between files:**
    ```bash
    git diff test1.txt
    ```

18. **Delete the test1.txt file locally:**
    ```bash
    rm -f test1.txt
    ```

---

### **Shell Assignment**

#### **Shell Script:**
```bash
#!/bin/bash
# Shell script to automate file creation and permissions

# Create a file named "foo.txt" with the content "Today is Monday"
echo "Today is Monday" > foo.txt
echo "foo.txt created with content 'Today is Monday'."

# Copy foo.txt to bar.txt and append the date
cp foo.txt bar.txt
date >> bar.txt
echo "foo.txt copied to bar.txt and date appended."

# Set permissions to read-only for both files
chmod 444 foo.txt bar.txt
echo "Permissions for foo.txt and bar.txt set to read-only (444)."

# Create a directory "myDir" and move both files into it
mkdir -p myDir
mv foo.txt bar.txt myDir
echo "foo.txt and bar.txt moved to myDir."

# Create an empty file "empty.txt" inside "myDir"
touch myDir/empty.txt
echo "empty.txt created in myDir."

# Print the contents of "bar.txt"
cat myDir/bar.txt

# Create a symbolic link to "bar.txt" called "barlink.txt"
ln -s myDir/bar.txt barlink.txt
echo "Symbolic link barlink.txt created for bar.txt."

# List all files and directories in "myDir" with detailed information
ls -l myDir
```

#### **Source vs. sh Explanation:**
- **sh** runs the script in a new subshell, meaning it won't affect the current shell environment.
- **source** runs the script in the current shell environment, which is useful for setting environment variables or modifying the current shell's state.

#### **Commands:**

1. **`ls` Command:**
   ```bash
   ls -alh
   ```
   - **Explanation:** Lists all files including hidden ones in human-readable format.

2. **`lsof` Command:**
   ```bash
   lsof -i :8080
   ```
   - **Explanation:** Lists all open files on port 8080, useful for identifying which process is using that port.

3. **`mkdir` Command:**
   ```bash
   mkdir -p /path/to/nested/directories
   ```
   - **Explanation:** Creates a directory tree even if the intermediate directories do not exist.

#### **Setting Environment Variables:**

1. **Temporary Setting:**
   ```bash
   export MY_VAR="my_value"
   ```

2. **Permanent Setting:**
   ```bash
   echo 'export MY_VAR="my_value"' >> ~/.bashrc
   source ~/.bashrc
   ```

---
