const { GoogleGenAI } = require("@google/genai")

const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});

async function generateResponse(chatHistory){
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",//this line is optional if we don't provide it will take the default model
        contents: chatHistory//an array of strings or a single string
    });
    console.log(response);
    
    return response.text;//response is an object which contains a text property
}

module.exports = generateResponse ;