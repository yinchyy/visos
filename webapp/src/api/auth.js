import CryptoJS from 'crypto-js';

export async function loginUser({ username, password }) {
    // Haszowanie has�a po stronie frontendu (dla przyk�adu; w praktyce stosowa� nale�y HTTPS).
    // W realnym systemie i tak nale�y has�o weryfikowa� po stronie serwera!
    const hashedPassword = CryptoJS.SHA256(password).toString();

    // Poniżej symulacja weryfikacji - w normalnej aplikacji robi si� zapytanie do backendu
    // i sprawdza zwr�cony wynik (np. token).
    if (username === 'admin' && hashedPassword) {
        // Zwracamy "udawany" token
        return { token: 'fake-jwt-token', user: { username: 'admin' } };
    } else {
        throw new Error('Nieprawid�owe dane logowania');
    }
}
