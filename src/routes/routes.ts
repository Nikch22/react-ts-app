import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string,
  path: string,
  Component: LazyExoticComponent<JSXComponent> | JSXComponent,
  name: string,
  children?: Route[]
}

const LazyLayout = lazy( () => import('../01-lazyload/layout/LazyLayout'));


export const routes: Route[] = [

  {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'LazyLayout',
  },

  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },

]