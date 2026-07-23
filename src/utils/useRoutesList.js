import { useRouter, useRoute } from 'vue-router'

export function useRoutesList(routeName) {
    const router = useRouter()
    const currentRoute = useRoute()
    const parentRoute = router.getRoutes().filter(route => route.name === routeName)[0]
    const routerItems = parentRoute.children
        .filter(route => route.path !== '' && route.name !== currentRoute.name);

    return routerItems.map(item => {
        return item = {
            name: item.name,
            path: `${parentRoute.path}/${item.path}`,
            isInternal: true,
        };
    });
}
