//import Layout 
import { HeaderOnly, IteamInfo } from '../components/Layout/index.js';

import Address from '../pages/address/Address.jsx';
import Buy1Get1 from '../pages/buy1Get1/Buy1Get1.jsx';
import Home from '../pages/Home'
import Items from '../pages/item/Items.jsx';
import Policies from '../pages/policies/Policies.jsx';
import Products from '../pages/products/Products.jsx'
import SaleUp from '../pages/saleup/SaleUp.jsx';
import Item from '../components/Layout/product/Item.jsx';

const privateRoutes = [];

const publicRoutes = [
  { path: '/', component: Home },
  { path: 'all-products', component: Products },
  { path: 'buy1Get1', component: Buy1Get1 },
  { path: 'saleUp', component: SaleUp },
  { path: 'address', component: Address, layout: HeaderOnly },
  { path: 'policies', component: Policies, layout: HeaderOnly },
  { path: 'item', component: Items, layout: null },
  { path: 'san-pham', component: Item, layout: IteamInfo },
];


export { publicRoutes, privateRoutes }