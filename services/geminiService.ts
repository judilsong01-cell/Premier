
import { GoogleGenAI } from "@google/genai";

// Assume process.env.API_KEY is configured in the environment
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might handle this more gracefully.
  // For this example, we'll log an error and the app will show a message.
  console.error("Gemini API key not found. Please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export async function generateBusinessIdeas(): Promise<string> {
  if (!API_KEY) {
    return Promise.reject(new Error("API Key for Gemini is not configured."));
  }

  const prompt = `
    Aja como um especialista em criação de aplicativos e análise de mercado, com foco específico em Angola.
    
    A tarefa é dividida em duas partes:

    **Parte 1: Outras Oportunidades de Aplicativos para o Mercado Angolano**
    Liste e descreva 3 a 5 ideias de aplicativos que teriam alta probabilidade de sucesso no mercado angolano, visando a juventude. Para cada ideia, inclua:
    - **Nome da Ideia:** Um nome cativante.
    - **O Problema que Resolve:** Qual necessidade específica do jovem angolano o app atende.
    - **Funcionalidades Principais:** 3-4 funcionalidades essenciais.
    - **Monetização:** Como o aplicativo geraria receita.

    **Parte 2: Análise de Escalabilidade para "ZuridropA"**
    Analise as possibilidades de escalabilidade para um aplicativo chamado "ZuridropA", que é um marketplace para jovens em Angola comprarem e venderem itens, onde o dono do app fica com 5% de cada venda. Detalhe os seguintes pontos:
    - **Crescimento Vertical:** Como aprofundar as funcionalidades existentes? (Ex: categorias premium, sistema de reputação avançado, etc.).
    - **Crescimento Horizontal:** Como expandir para novas áreas? (Ex: serviços, aluguel de itens, eventos, etc.).
    - **Expansão Geográfica:** Quais os desafios e estratégias para expandir para outras províncias de Angola ou países vizinhos?
    - **Desafios Tecnológicos e Logísticos:** Quais são os principais obstáculos a serem superados (pagamentos, entregas, infraestrutura de internet)?

    Formate a resposta de forma clara e organizada, usando títulos e listas para facilitar a leitura.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: [{ parts: [{ text: prompt }] }],
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to generate business ideas from Gemini API.");
  }
}
