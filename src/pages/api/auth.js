import fetch from 'node-fetch';

export default async function handler(req, res) {
  const requestToken = req.query.code;

  if (!requestToken) {
    return res.status(400).json({ error: 'Code is required' });
  }

  const { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } = process.env;

  try {e
    // Solicitar o token de acsso ao GitHub
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRET,
        code: requestToken,
      }),
    });

    const tokenData = await tokenResponse.json();

    // Verificar se o token de acesso foi recebido
    if (tokenData.access_token) {
      // Redirecionar para o CMS com o token
      res.redirect(`/admin/#access_token=${tokenData.access_token}&token_type=bearer`);
    } else {
      // Lidar com a resposta falha
      console.error('Failed to retrieve access token:', tokenData);
      return res.status(500).json({ error: 'Failed to retrieve access token' });
    }
  } catch (error) {
    // Capturar e logar qualquer erro durante a requisição
    console.error('Authentication error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
