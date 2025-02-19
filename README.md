# Notes App

## 📌 Overview

Notes App adalah aplikasi pencatatan sederhana yang memungkinkan pengguna untuk menambahkan, mengedit, menghapus, dan melihat catatan mereka. Aplikasi ini menggunakan **React.js** untuk frontend dan **Node.js dengan Express** untuk backend.

## 🛠 Tech Stack

### Frontend:

- React.js
- Axios
- Tailwind CSS
- PropTypes

### Backend:

- Node.js
- Hapi.js.

## 🚀 Features

- Menambahkan catatan baru dengan **judul**, **isi**, dan **tag**
- Mengedit catatan yang sudah ada
- Menghapus catatan
- Melihat detail catatan
- Penyimpanan data

## 🏗 Instalasi dan Setup

### 1️⃣ Clone Repository

#### Frontend

```bash
git clone https://github.com/Nitaa1904/notes-app-frontend.git
cd notes-app-frontend
```

#### Backend

```bash
git clone https://github.com/Nitaa1904/notes-app-back-end.git
cd notes-app-back-end
```

### 2️⃣ Install Dependencies

#### Frontend

```bash
npm install
```

#### Backend

```bash
npm install
```

### 3️⃣ Menjalankan Aplikasi

#### Jalankan Backend

```bash
npm start
```

Backend akan berjalan di **http://localhost:5000**

#### Jalankan Frontend

```bash
npm run dev
```

Frontend akan berjalan di **http://localhost:5173** (default Vite)

## 🔗 API Endpoints

Berikut beberapa endpoint utama dari backend:

- **GET /notes** → Mendapatkan semua catatan
- **POST /notes** → Menambahkan catatan baru
- **PUT /notes/:id** → Mengedit catatan berdasarkan ID
- **DELETE /notes/:id** → Menghapus catatan berdasarkan ID
- **GET /notes/:id** → Mendapatkan detail catatan berdasarkan ID

## 📌 Folder Structure

```
notes-app-frontend/
│── src/
│   ├── components/
│   │   ├── NoteForm.jsx
│   │   ├── NoteList.jsx
│   │   ├── NoteDetail.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│
notes-app-back-end/
│── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── server.js
```

## 🎯 Author

**Nita Fitrotul Mar'ah**  
📧 nitafitrotul1904@gmail.com
