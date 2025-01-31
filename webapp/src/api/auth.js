import CryptoJS from 'crypto-js';

export async function loginUser({ username, password }) {
    // Hashowanie hasła
    const hashedPassword = CryptoJS.SHA256(password).toString();

    try {
        // Wysylka hasla na backend
        const response = await fetch("http://localhost:5173/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password: hashedPassword }),
        });

        if (!response.ok) {
            throw new Error("Nieprawidłowe dane logowania");
        }

        // Odbieranie tokena
        const data = await response.json();
        return { token: data.token, user: data.user };

    } catch (error) {
        console.error("Błąd logowania:", error);
        throw error;
    }
}