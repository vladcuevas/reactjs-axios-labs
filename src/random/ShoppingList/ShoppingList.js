import React from 'react';

export default function ShoppingList(params)
{
    return (
      <div className="shopping-list">
        <h1>Shopping List for {params.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
}