import React from "react";
import './card.scss';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
function Card () {
    return (
        <div className="Card">
            <div className="Image">
                <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80" alt="book"></img>
            </div>
            <div className="Icons">
                <div className="Wishlist">
                    <FavoriteBorderOutlinedIcon fontSize="large" />
                </div>
                <div>
                    <p>
                        <span>20</span> %off
                    </p>
                    
                </div>
            </div>
            <div className="Description">
                
                <span>Title of the Book</span>
                <div className="money">
                    <del>
                        <span>
                        ₹ 400
                        </span>
                    </del>
                    <ins>
                        <span>
                        ₹ 320 
                        </span>
                    </ins>
                </div>
            </div>
        </div>
    );
}

export default Card;