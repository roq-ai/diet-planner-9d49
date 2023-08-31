const mapping: Record<string, string> = {
  'diet-plans': 'diet_plan',
  dieticians: 'dietician',
  invitations: 'invitation',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
