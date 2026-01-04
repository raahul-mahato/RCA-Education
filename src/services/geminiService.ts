
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

export async function getAiCourseRecommendation(query: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a career counselor for RCA Education. Based on the user's query: "${query}", recommend the best career path or exam (SSC, Railway, WBCS, Banking, etc.). Keep the response concise and motivating. Limit to 3-4 sentences. Mention that RCA Education has dedicated batches for these.`,
      config: {
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base. Please try again or contact RCA support directly!";
  }
}

export async function getAiCurrentAffairsSearch(topic: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide a quick bulleted summary for the current affairs topic: "${topic}" specifically for competitive exam aspirants.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });
    
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    return {
      text: response.text,
      sources: sources.map((s: any) => s.web).filter(Boolean)
    };
  } catch (error) {
    console.error("Search Error:", error);
    return { text: "Could not fetch latest news. Please try again.", sources: [] };
  }
}
