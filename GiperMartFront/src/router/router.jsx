import { Home } from '../pages/home/home'
import { Blog } from '../pages/blog/blog'
import { Kabinet } from '../pages/kabinet/kabinet'
import { Kompany } from '../pages/kompany/kompany'
import { ShoppingCompont } from '../pages/shop/shoppingCompont'
import { ShopPage } from '../pages/shop/shop'
import { Smartfone } from '../pages/smartfone/smartfone'
import { ShopSingle } from '../pages/shop/components/shopSingle'
import { LikePage } from '../pages/like/likePage'

export const router = [
    {
        component: <Home />,
    },
    {
        component: <Blog />,
        path: "blog",
    },
    {
        component: <ShoppingCompont />,
        path: "shoppingcards",
    },
    {
        component: <ShopPage />,
        path: "shop",
    },
    {
        component: <Kabinet />,
        path: "kabinet",
    },
    {
        component: <Kompany />,
        path: "kompany",
    },
    {
        component: <Smartfone />,
        path: "smartfone",
    },
    {
        component: <ShopSingle />,
        path: "shopsingle",
    },
    {
        component: <LikePage />,
        path: "likepage",
    },
]