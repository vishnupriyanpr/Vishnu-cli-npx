# Vishnu-cli-npx ⚡ 

> Your terminal just got cooler — run `npx vishnupriyan` and unlock a custom, fast, and interactive experience from the creator himself. Built for devs, learners, and curious minds.

---

## 🚀 What is this?

**`vishnu-cli-npx`** is a personal, zero-install, command-line tool that shows you:
- 📄 A short and clean intro to **Vishnupriyan**
- 🌐 Links to his **projects**, **socials**, and **portfolio**
- 💡 Quick access to his developer profile, skills, and interests
- 🔗 All directly inside your **terminal**, in under 2 seconds

It's like a digital business card — but geeked up for developers 😎

---

## ⚙️ How to Run

### ✅ One-liner – No setup, no install:

```bash
npx vishnupriyan
```

> Yup. That’s it.  
> No `git clone`, no `npm install`.  
> Just one command — works on **any system with Node.js installed**.

---

## 🧠 Use Cases

- 🔍 Curious about Vishnupriyan? Just type `npx vishnupriyan`  
- 🤝 Hiring or collaborating? Get a fast overview from your terminal  
- 💼 Want inspiration for your own personal CLI card? Clone this repo!

---

## ✨ Features

- 🧑‍💻 Developer bio & background  
- 🔗 Clickable links to GitHub, LinkedIn, projects, and more  
- 🎨 Clean, stylized terminal output  
- 🪄 Instant usage with NPX (no global installs)  
- 📦 Open source — fork & make your own!

---

## 🛠 Built With

- [Node.js](https://nodejs.org/)
- [NPX](https://docs.npmjs.com/cli/v9/commands/npx)
- Pure JavaScript & terminal magic

---

## 🧩 Related Projects & Inspirations

- [npx card](https://github.com/bnb/bitandbang) – The original CLI card concept  
- [create-github-profile-cli](https://github.com/abhisheknaiidu/cli-profile) – Interactive profile CLI  
- [business-card](https://github.com/Raathigesh/npx-card) – Terminal-based business card

---



## 🤖 Try It Out Now!

```bash
npx vishnupriyan
```

> 💥 Experience a fast, fun, and minimal terminal-based profile card.  
> Go ahead and give it a shot — you're just one command away!

---
### ✍️ Make Your Own CLI Card!

Want a CLI like this for yourself?  
Here’s how to customize it:

```bash
# 1. Fork or clone this repo
git clone https://github.com/vishnupriyanv/vishnu-cli-npx.git

# 2. Move into the project folder
cd vishnu-cli-npx

# 3. Open the main CLI file (usually cli.js or index.js)
code cli.js
```

🔧 Inside `cli.js`, look for the section where info is printed, and update it like this:

```js
#!/usr/bin/env node

console.log(`
👋 Hey there! I'm [Your Name]
🌐 Portfolio: https://yourwebsite.com
💼 GitHub: https://github.com/yourusername
🔗 LinkedIn: https://linkedin.com/in/yourprofile

Thanks for checking out my CLI card!
`);
```

```bash
# 4. Update package.json fields:
# - name
# - version
# - description
# - author
# - bin

code package.json
```

```json
{
  "name": "your-cli-name",
  "version": "1.0.0",
  "description": "Your awesome CLI card",
  "author": "Your Name",
  "bin": {
    "your-cli-name": "./cli.js"
  }
}
```

```bash
# 5. Publish to NPM (once your account is set up)
npm login
npm publish
```

✅ Now run it from anywhere using:
```bash
npx your-cli-name
```



---

## 📄 License

MIT — use it, modify it, share it. Just don’t forget to drop a ⭐!

---

## 🙌 Credits

<div align="center">
  <table style="width:100%;">
    <tr>
      <td align="center" style="width:50%;">
        <a href="https://github.com/vishnupriyanpr">
                  <img src="https://github.com/vishnupriyanpr.png?size=120" width="120px;" alt="Vishnupriyan P R"/>
      </a>
      </td>
      <td align="center" style="width:50%;">
        <blockquote>
          <p>“Tools should disappear into the background and let you build.”</p>
          <footer>— Vishnupriyan P R, <i>caffeinated coder ☕</i></footer>
        </blockquote>
      </td>
    </tr>
  </table>
</div>


