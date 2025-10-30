
import React, { useState, useCallback } from 'react';
import { generateBusinessIdeas } from '../services/geminiService';
import { LightbulbIcon } from './Icons';

const IdeationSection: React.FC = () => {
    const [ideas, setIdeas] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateIdeas = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const result = await generateBusinessIdeas();
            setIdeas(result);
        } catch (err) {
            setError('Ocorreu um erro ao gerar as ideias. Tente novamente mais tarde.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <div className="mt-12 p-6 bg-surface-bg rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-secondary">
                <LightbulbIcon className="w-6 h-6 mr-2" />
                Análise de Mercado e Escalabilidade
            </h2>
            <p className="text-text-secondary mb-6">
                Clique no botão abaixo para usar a IA do Gemini para gerar uma análise sobre outras oportunidades de aplicativos para o mercado Angolano e as possibilidades de escalabilidade para o ZuridropA.
            </p>

            {!ideas && (
                 <button 
                    onClick={handleGenerateIdeas}
                    disabled={isLoading}
                    className="w-full md:w-auto bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-violet-700 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Gerando Análise...
                        </>
                    ) : (
                        'Gerar Ideias de Negócio com IA'
                    )}
                </button>
            )}

            {error && <p className="mt-4 text-red-500">{error}</p>}
            
            {ideas && (
                <div className="mt-6 prose prose-invert prose-p:text-text-secondary prose-headings:text-text-main prose-strong:text-secondary max-w-none whitespace-pre-wrap font-mono text-sm">
                  {ideas}
                </div>
            )}
        </div>
    );
};

export default IdeationSection;
