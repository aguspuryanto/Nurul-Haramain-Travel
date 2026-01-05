
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are a helpful customer service assistant for "Nurul Haramain Travel", an Indonesian Umrah and Hajj travel agency.
        Be polite, spiritual, and informative. Use Indonesian (Bahasa Indonesia).
        Key Info:
        - Packages: Reguler (28.5jt), VIP (35.9jt), Plus Turki (42jt).
        - Focus: Safe, Amanah, and Professional.
        - Office: Jakarta, Indonesia.
        Always encourage the user to fill out the booking form on the website for further details.`,
        temperature: 0.7,
        thinkingConfig: { thinkingBudget: 2000 }
      },
    });

    return response.text || "Mohon maaf, saya sedang tidak bisa merespons. Silakan hubungi admin kami melalui WhatsApp.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kesalahan koneksi. Silakan coba lagi nanti.";
  }
};
