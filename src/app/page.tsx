import Image from "next/image";
import styles from "./page.module.css";

export async function getAllTeams() {
  const api = "https://api.api-futebol.com.br/v1/campeonatos/10/tabela";

  const res = await fetch(`${api}`, {
    headers: { Authorization: 'Bearer test_1e1b1c5c5ba56e1acca9b01703d758'},
  });

  const data = await res.json();

  console.log(data);

}
export default function Home() {
  return (
    <div>
      <h1>Times de Futebol</h1>
    </div>
  );
}