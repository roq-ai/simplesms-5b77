const mapping: Record<string, string> = {
  businesses: 'business',
  messages: 'message',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
