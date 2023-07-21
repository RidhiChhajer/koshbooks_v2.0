import React from "react";
import './navbar.scss';

// muis
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Navbar() {
    return (
        <div className="Navbar">
            <h1>KoshBooks</h1>
            <div className="Items">
                <div className="Item">
                    <MenuIcon />
                    <span>menu</span>
                </div>
                <div className="Item">
                    <ShoppingCartIcon />
                    <span>cart</span>
                </div>
                <div className="Item">
                    <FavoriteIcon/>
                    <span>wishlist</span>
                </div>
                <div className="Item">
                    <PersonIcon/>
                    <span>profile</span>
                </div>
            </div>
        </div>
    
    );
}

export default Navbar;