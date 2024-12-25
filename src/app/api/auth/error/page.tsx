"use client";
import { useSearchParams } from "next/navigation";

const ErrorPage = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const getErrorMessage = (error: string | null) => {
    switch (error) {
      case "CredentialsSignin":
        return "Neplatné přihlašovací údaje.";
      case "SessionRequired":
        return "Je vyžadováno přihlášení.";
      case "Configuration":
        return "Chyba konfigurace na serveru.";
      case "AccessDenied":
        return "Přístup byl odepřen.";
      default:
        return "Došlo k neznámé chybě. Zkuste to znovu.";
    }
  };
  

  return (
    <div>
      <h1>Chyba při přihlášení</h1>
      <p>{getErrorMessage(error)}</p>
      <a href="/login">Zpět na přihlášení</a>
    </div>
  );
};

export default ErrorPage;
