# 🎭 BitB (Browser-in-the-Browser) Attack Simulation with Evilginx2

This project demonstrates how the **BitB (Browser-in-the-Browser)** phishing technique works in combination with **Evilginx2**, for the purpose of research, simulation, and training on phishing detection.

All data entered by the user is collected **locally** on a Node.js backend server for analysis and demonstration purposes.

---

## 🧩 How It Works

Upon visiting the page, the user is presented with two login options:

- **Sign in with Microsoft**
- **Sign in with Gmail**

![Login Options](https://github.com/user-attachments/assets/97a5fb7a-869a-4a7c-b57c-ccfab88fbb83)

---

When the user clicks one of these buttons, a **fake browser window** is displayed inside an `iframe`. Despite showing legitimate domain names in the address bar (e.g. `https://login.microsoftonline.com`, `https://accounts.google.com`), the content is actually rendered from a custom **HTML template** under our control.

---

### 🪟 Microsoft Login Example

![Microsoft BitB](https://github.com/user-attachments/assets/4aed8ea3-525b-4556-833d-fc25d9ea148e)

---

### 🪟 Google Login Example

![Google BitB](https://github.com/user-attachments/assets/808b48c2-c812-47f5-8d88-aeba7ed5ba53)

---

In this simulation, we continue by selecting **Sign in with Microsoft**.

---

### Step-by-Step Interaction

The fake browser window prompts the user to interact with a cloned Microsoft login page:

![Form Step 1](https://github.com/user-attachments/assets/4ceafca6-0eb0-4ddd-9f0f-bfeafe316bf3)

---

![Form Step 2](https://github.com/user-attachments/assets/00e93b7d-4c52-45da-8aba-0be51e32f0e9)

---

![Final Prompt](https://github.com/user-attachments/assets/a44d07ac-50ea-4cd4-b8aa-4cd8a0fc398e)

---

When the user clicks **"Yes"**, the iframe closes and the entered credentials are sent to the backend, where they are stored in a `.txt` file on the attacker's local machine.

---

### 🧾 Result Logging

![Saved Data](https://github.com/user-attachments/assets/9c8afa46-dbef-429c-9978-27504702603b)

---

## 🔗 Evilginx2 Integration

This BitB phishing simulation can be extended with **Evilginx2** to:

- Perform real-time MITM attacks using predefined phishlets
- Capture session cookies (JWT, bearer tokens, etc.)
- Evade 2FA and gain persistent session access

Evilginx2 acts as a reverse proxy to handle real authentication endpoints, while the BitB frontend handles the **visual deception** and interaction layer.

---

## ⚠️ Legal Notice

This project is intended **only for educational, awareness, and authorized testing purposes**. Unauthorized use of this tool against third parties without explicit permission is strictly prohibited and may violate local or international laws.

---
