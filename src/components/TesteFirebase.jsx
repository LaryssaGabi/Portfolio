import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";

export default function TesteFirebase() {
  useEffect(() => {
    async function fetchData() {
      try {
        const snapshot = await getDocs(collection(db, "projects"));
        

        
        
        // Retorno adicional com array de projetos
        const projetosArray = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
      } catch (error) {
        console.error("🔥 Erro ao buscar dados:", error);
      }
    }
    
    fetchData();
  }, []);

  return 
}