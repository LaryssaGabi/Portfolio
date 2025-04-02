import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

export default function TesteFirebase() {
  useEffect(() => {
    async function fetchData() {
      try {
        const snapshot = await getDocs(collection(db, "projects"));
        
        // Retorno formatado no console
        console.group("📦 Dados do Firestore");
        console.log("Total de projetos:", snapshot.size);
        
        snapshot.forEach((doc) => {
          console.groupCollapsed(`Projeto: ${doc.data().Title || 'Sem título'}`);
          console.log("ID:", doc.id);
          console.log("Dados completos:", doc.data());
          console.groupEnd();
        });
        
        console.groupEnd();
        
        // Retorno adicional com array de projetos
        const projetosArray = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log("Array de projetos:", projetosArray);
        
      } catch (error) {
        console.error("🔥 Erro ao buscar dados:", error);
      }
    }
    
    fetchData();
  }, []);

  return 
}