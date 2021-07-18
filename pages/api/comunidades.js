import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if(request.method === 'POST') {
        const TOKEN = '3670752ec1ab7f2b97ddf5cfe60ee5';
        const client = new SiteClient(TOKEN);

        if(request.headers.type === "comunidades") {
            const registroCriado = await client.items.create({
                itemType: "975303", 
                ...request.body,
                //title: "Eu odeio acordar cedo",
                //imageUrl: "https://alurakut.vercel.app/capa-comunidade-01.jpg",
                //linkUrl: "https://www.netflix.com/br/",
            });

            console.log(registroCriado);

            response.json({
                dados:'algum dado qualquer',
                registroCriado: registroCriado,
            });
        
        } 
    
        if(request.headers.type === "scrap") {
            const registroScrap = await client.items.create({
                itemType: "976087",
                ...request.body
            });

            response.json({
                registroScrap: registroScrap
            });
        }
        response.status(404).json({
            message:'Ainda não tem nada.'
        });

        return;

    }
}