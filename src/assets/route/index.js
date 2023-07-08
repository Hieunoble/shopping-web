//import Layout 
import { HeaderOnly, ItemInfo } from '../components/Layout/index.js';

import Address from '../pages/address/Address.jsx';
import Buy1Get1 from '../pages/buy1Get1/Buy1Get1.jsx';
import Home from '../pages/Home'
import Items from '../pages/item/Items.jsx';
import Policies from '../pages/policies/Policies.jsx';
import Products from '../pages/products/Products.jsx'
import SaleUp from '../pages/saleup/SaleUp.jsx';
import Item from '../pages/product/ProductForm.jsx';
import Search from '../components/Layout/header/header-icons/search/Search.jsx';
import Users from '../components/Layout/header/header-icons/user/Users.jsx';
import Cart from '../components/Layout/header/header-icons/cart/Cart.jsx';

const privateRoutes = [];

const publicRoutes = [
  { path: '', component: Home },
  { path: 'all-products', component: Products },
  { path: 'buy1Get1', component: Buy1Get1 },
  { path: 'saleUp', component: SaleUp },
  { path: 'address', component: Address, layout: HeaderOnly },
  { path: 'policies', component: Policies, layout: HeaderOnly },
  { path: 'item', component: Items, layout: null },
  { path: 'san-pham', component: Item, layout: ItemInfo },
];

const headingRoutes =
{
  activeMenu: null,
  objects: [
    {
      title: 'Products',
      path: '/all-products',
      subMenu: [
        {
          id: 0,
          title: 'Shirts'
        },
        {
          id: 1,
          title: 'Sets'
        },
        {
          id: 2,
          title: 'Bags'
        },
        {
          id: 3,
          title: 'Shoes'
        },
        {
          id: 4,
          title: 'Others'
        },
      ]
    },
    {
      title: 'Buy 1 get 1',
      path: '/buy1Get1',
      subMenu: null
    },
    {
      title: 'Sale Up',
      path: '/saleUp',
      subMenu: [
        {
          id: 0,
          title: 'Summer Product'
        },
        {
          id: 1,
          title: '75%'
        },
        {
          id: 2,
          title: '50%'
        },
        {
          id: 3,
          title: '30%'
        },
        {
          id: 4,
          title: 'sales off'
        },
      ]
    },
    {
      title: 'Adress',
      path: '/address',
      subMenu: [
        {
          id: 0,
          title: 'Hanoi'
        },
        {
          id: 1,
          title: 'Bac Ninh'
        },
        {
          id: 2,
          title: 'Thanh Hoa'
        },
        {
          id: 3,
          title: 'Nam Dinh'
        },
      ]
    },
    {
      title: 'Policy',
      path: '/policies',
      subMenu: [
        {
          id: 0,
          title: 'Exchange and return'
        },
        {
          id: 1,
          title: 'Refund'
        },
        {
          id: 2,
          title: 'Membership'
        },
      ]
    },
  ]

}

const iconRoutes = {
  activeIcon: null,
  isShow: false,
  objects:
    [
      {
        id: 0,
        Icon: Search,
        // isShow: false
      },
      {
        id: 1,
        Icon: Users,
        // isShow: false
      },
      {
        id: 2,
        Icon: Cart,
        // isShow: false
      },
    ]
}


export { publicRoutes, privateRoutes, headingRoutes, iconRoutes }