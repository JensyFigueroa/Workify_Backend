

app.get('/countryInfoJSON', async (req, res) => {
  try {
    const response = await axios.get(`${geonamesProxyUrl}/countryInfoJSON`, {
      params: {
        username: 'joaquinsgro',
        type: 'json'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener la lista de países', error);
    res.status(500).json({ error: 'Error al obtener la lista de países' });
  }
});

app.get('/searchJSON', async (req, res) => {
  const { q } = req.query;

  try {
    const response = await axios.get(`${geonamesProxyUrl}/searchJSON`, {
      params: {
        q,
        username: 'joaquinsgro',
        type: 'json',
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener la lista de estados', error);
    res.status(500).json({ error: 'Error al obtener la lista de estados' });
  }
});

