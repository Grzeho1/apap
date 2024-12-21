export const login = async (email: string, password: string) => {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    // Ladicí výpis pro odpověď
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);

    if (!response.ok) {
        const errorText = await response.text();  // Přečti odpověď jako text pro lepší diagnostiku
        console.error('Error response:', errorText); // Vypíše chybu
        throw new Error('Neplatné údaje');
    }

    try {
        // Pokus o parsování JSON
        const data = await response.json();
        console.log('Parsed data:', data);

        sessionStorage.setItem('email',email); // uložím email do session

        return data;
    } catch (error) {
        console.error('Failed to parse JSON:', error);
        throw new Error('Chyba při parsování odpovědi');
    }
}
