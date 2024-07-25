let token = 'd36db2b89656ee3970cc963440c60de2ecc9a9620f2662fd';

export const server_calls = {
  get: async () => {
    const response = await fetch(`https://flask-library-lsd1.onrender.com/api/books`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data from server');
    }

    return await response.json();
  },

  create: async (data: any = {}) => {
    const response = await fetch(`https://flask-library-lsd1.onrender.com/api/books`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-access-token': `Bearer ${token}`
        },
        body: JSON.stringify(data)

    })

    if (!response.ok) {
        throw new Error('Failed to create new data on the server')
    }

    return await response.json()
},
  update: async (id: string, data: any = {}) => {
    const response = await fetch(`https://flask-library-lsd1.onrender.com/api/books/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to update data on server');
    }

    return await response.json();
  },

  delete: async (id: string) => {
    const response = await fetch(`https://flask-library-lsd1.onrender.com/api/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Failed to delete data from server');

    }

    return await response.json();
  }
};