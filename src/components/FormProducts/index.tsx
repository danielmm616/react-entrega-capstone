import { useProducts } from '../../Providers/ProductsContext'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface ProductsData {
    name: string;
    category: string;
    price: number;
    img: string;
  }

const FormProducts = () => {

}

export default FormProducts;