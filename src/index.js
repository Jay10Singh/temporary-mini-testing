import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
//domain: dev-4h4b2dhu3enidhic.us.auth0.com
//client id: 3FjN1rVXRPv9hGVU1uUg4CB3uhQRtvV4

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    cacheLocation='localstorage'
    >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider> 
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>
);
