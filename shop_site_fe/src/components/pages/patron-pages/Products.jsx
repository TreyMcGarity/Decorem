import React, { useEffect, useMemo, useState } from "react";
import { getProducts } from '../../../redux/actions/productActions';
import { connect, useDispatch } from "react-redux";
import Product from '../segments/Product';
import Header from '../segments/Header';
import Footer from '../segments/Footer';
import '../../../styles/pages/patron-pages/products.scss';

const Products = ({ products }) => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const filteredProducts = useMemo(() => {
        const items = products?.product_data || [];
        const query = searchQuery.trim().toLowerCase();

        if (!query) {
            return items;
        }

        return items.filter((product) => {
            const name = (product?.name || '').toLowerCase();
            const details = (product?.details || '').toLowerCase();
            return name.includes(query) || details.includes(query);
        });
    }, [products, searchQuery]);

    return (
        <div>
            <Header onSearch={setSearchQuery} />
            <div className='products'>
                {filteredProducts.length ? (
                    filteredProducts.map((product, index) => <Product key={index} product={product} />)
                ) : (
                    <p>No products match your search.</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

const mapping = (state) => ({
    products: state.product,
});

export default connect(mapping)(Products);