import type { Router, RouteRecord } from 'vue-router';

export function getRoutesFromNameList(
    router: Router, 
    routeNames: string[], 
    componentName: string
): RouteRecord[] {
    return routeNames.map((name: string) => {
        const route = router.getRoutes().find((route: RouteRecord) => route.name === name);
        if (!route) {
            console.error(`${componentName}: Route ${name} not found`);
            return null;
        } else {
            return route;
        }
    }).filter(Boolean) as RouteRecord[];
}