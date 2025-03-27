

export async function updateCartItem(
    itemId: number, 
    quantity: number, 
    token: string
) {
    const response = await fetch('/api/cart', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `User ${token}`
        },
        body: JSON.stringify({ itemId, quantity })
    });

    return response.json();
}

export async function deleteCartItem(
    itemId: number, 
    token: string
) {
    const response = await fetch('/api/cart', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `User ${token}`
        },
        body: JSON.stringify({ itemId })
    });

    return response.json();
}
