import { Outlet } from "react-router-dom";
import style from './Products.module.css';
import image from '../../img/shop.png'

const Products = () => {
    return (
      <div className={style.products}>
        <img src={image} alt={'shop'}/> 
        <p className={style.text}> This is Our Products! </p>
        <Outlet />
      </div>
    )
}
export default Products;