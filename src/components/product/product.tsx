import { IProduct } from "../../interfaces/inde";
import { textWarp } from "../../utilities/textSlicer";
import Button from "../ui/button";

interface iProps {
    product:IProduct

}

const Product = ({product}:iProps) => {
    const {title,imageURL,description,price,colors,category} = product;


return(
<div className="bg-white text-black dark:bg-stone-800 dark:text-white max-w-sm md:max-w-lg lg:max-w-xl border rounded-md p-2 flex flex-col">
    <img
    src={imageURL}
    className="w-full  rounded-md h-52 object-cover"
    alt="product_imageURL"
    />
    <h2 className="text-lg ">{title}</h2>
    <p>{textWarp(description)}</p>
    <div className="flex space-x-2 my-5 items-center">
        {
        colors?.map(color => (
            <span 
            className="w-5 h-5 rounded-full "
            style={{backgroundColor:`${color}`}}/>
        ))}
    </div>
    <div className="flex justify-between my-3 items-center">
        <p>{price}</p>
        <img
        alt = "category"
        src={category.imageURL}
        className="w-10 h-10 rounded-full object-center"
        />
    </div>
    <div className="flex justify-between space-x-2">
        <Button className="bg-indigo-600">edit</Button>
        <Button className=' bg-red-600'>delete</Button>
    </div>
</div>
)
}
export default Product;